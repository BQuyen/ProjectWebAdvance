  // Register
   document.getElementById('btnRegister').addEventListener("click", function() {
    var username = document.getElementById('RegisterName').value;
    var password = document.getElementById('RegisterPassword').value;
    var email = document.getElementById('RegisterMail').value;
    var ConfirmPassword = document.getElementById('ConfirmPassword').value;
    //value ===""
    if(username===""){
       alert("Please enter your username");
    }
    if(email===""){
      alert("Please enter your email");
   }
   if(password===""){
    alert("Please enter your password");
  }
   if(ConfirmPassword ===""){
  alert("Please enter your confirm password");
  }
    // Check if user already exists
    if (localStorage.getItem(username)) {
      alert('This username already exists. Please choose a different one.');
      return;
    }
    //Confirm password
    if(ConfirmPassword !== password){
      alert('Your confirmed password is different from your password. Please write again.');
      return;
    }
    // Save user data to localStorage
    var userData = {
      username: username,
      password: password,
      email : email
    };
    localStorage.setItem(username, JSON.stringify(userData));
    alert('Registration successful!');
    window.location.href = "http://127.0.0.1:5500/Advance/Website%20T%E1%BA%BFt/index.html";
  });