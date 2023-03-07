function login(){
  const loginInputBox = document.querySelector("#username");
  localStorage.setItem("username", loginInputBox.value);
  window.location.href = "index.html";
}

