window.location.href = "template-home.html"; // Redirect to your real template

// Get elements
const loginModal = document.getElementById('login-modal');
const modalLoginForm = document.getElementById('modal-login-form');
const protectedContent = document.getElementById('protected-content');
const triggerDownload = document.getElementById('trigger-download');
const triggerViewCode = document.getElementById('trigger-view-code');

// Button triggers for modal login
if (triggerDownload) {
  triggerDownload.addEventListener('click', function () {
    loginModal.style.display = 'flex';
  });
}

if (triggerViewCode) {
  triggerViewCode.addEventListener('click', function () {
    loginModal.style.display = 'flex';
  });
}


protectedContent.style.display = 'block';

const protectedContent = document.getElementById('protected-content');


  




// Handle modal login
/*
if (modalLoginForm) {
  modalLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();

   
    const modalLoginForm = document.getElementById('modal-login-form');
    const loginModal = document.getElementById('login-modal');
     
    const modalLoginForm = document.getElementById('modal-login-form');
    const loginModal = document.getElementById('login-modal');
       

    const username = document.getElementById('username').value;
    const password = document.getElementById('modal-password').value;

    if (username === 'admin' && password === '1234') {
      loginModal.style.display = 'none';
      protectedContent.style.display = 'block';
    } else {
      alert('Incorrect username or password.');
    }
  });
}*/

// Handle email login (main login form)
function checkLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("login-error");

  const validEmail = "abebe@gmail.com";
  const validPassword = "1234";

  if (email === validEmail && password === validPassword) {
    document.getElementById("login-form").style.display = "none";
    protectedContent.style.display = "block";
  } else {
    error.textContent = "Incorrect email or password!";
  }
}

// Disable right-click context menu for the whole document
window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable some common keyboard shortcuts for inspect tools
window.addEventListener('keydown', function(e) {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});
