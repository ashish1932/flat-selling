document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Dummy login validation (this part will be replaced by back-end validation)
    if (email === "ashishkumar1932005@gmail.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to homepage or dashboard
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});