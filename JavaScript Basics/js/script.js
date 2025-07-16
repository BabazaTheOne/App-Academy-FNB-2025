document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Replace with actual authentication logic
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Username or password are incorrect";
  }
});
