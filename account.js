const accountNameEl = document.querySelector(".account-name");
accountNameEl.textContent = localStorage.getItem("username") ?? "Username";

function logout(){
  const logoutInputBox = document.querySelector("#username");
  window.location.href = "login.html";
}