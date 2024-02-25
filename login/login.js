// Login
   document.getElementById('btnLogin').addEventListener("click", function() {
    // Get values from the form
    var username = document.getElementById('LoginName').value;
    var password = document.getElementById('LoginPassword').value;

    if(username === "") {
        alert("Please enter your username");
        return; 
    }

    if(password === "") {
        alert("Please enter your password");
        return; 
    }

    // Get user data from localStorage
    var storedUser = localStorage.getItem(username);
    
    if (storedUser) {
        var userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert('Login successful!');
            // Redirect the user after successful login
            window.location.href = "http://127.0.0.1:5500/Advance/Website%20T%E1%BA%BFt/index.html";
        } else {
            alert('Incorrect password');
        }
    } else {
        alert('User not found');
    }
});