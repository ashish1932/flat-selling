document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Dummy registration validation (this part will be replaced by back-end validation)
    alert("Registration successful! You can now log in.");
    // Redirect to login page after successful registration
    window.location.href = "login.html";
});