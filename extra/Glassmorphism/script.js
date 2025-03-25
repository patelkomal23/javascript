document.getElementById("loginBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        alert("Login Successful! 🎉");
    } else {
        alert("Please enter username and password.");
    }
});
