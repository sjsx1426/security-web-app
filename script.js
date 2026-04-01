// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // ⚠️ This is hardcoded (not secure, only demo)
    if (user === "sanjay" && pass === "123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login!";
    }
}

// PAGE NAVIGATION
function goPage(page) {
    window.location.href = page;
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}

// FAKE SCAN
function startScan() {
    let result = document.getElementById("scanResult");
    result.innerText = "Scanning...";

    setTimeout(() => {
        result.innerText = "✅ No Threats Found!";
    }, 2000);
}

// LOAD REPORTS
function loadReports() {
    let list = document.getElementById("reportsList");

    list.innerHTML = `
        <li>Firewall Active</li>
        <li>No Malware Detected</li>
        <li>System Secure</li>
    `;
}

// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}
