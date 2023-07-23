const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const HIDDEN_CLASSNAME = 'hidden';

function loginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  saveUserName(userName);
  paintGreeting(userName);
}

function saveUserName(userName) {
  localStorage.setItem('userName', userName);
}

function paintGreeting(userName) {
  loginForm.innerHTML = `<h1>Welcome, ${userName}</h1>`;
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem('userName');

if (savedUserName === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', loginFormSubmit);
} else {
  paintGreeting(savedUserName);
}
