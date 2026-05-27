const API = "http://127.0.0.1:8000";


// ================= LOGIN =================
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.access_token) {
        alert("Login successful!");

        // store token
        localStorage.setItem("token", data.access_token);

        // redirect if you want
        window.location.href = "home.html";
    } else {
        alert(data.detail || "Login failed");
    }
}


// ================= SIGNUP =================
async function signup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.message) {
        alert("Account created! Please login.");
        window.location.href = "login.html";
    } else {
        alert("Signup failed");
    }
}

console.log("JS is working");