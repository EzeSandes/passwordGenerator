'use stricts'

const passwordInput = document.getElementById('password');
const btnGeneratePassword = document.querySelector('.btn');

function getPassword() {
   let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@$%^&*()_-=+?<>[]{}";

   let passwordLength = 16;
   let password = "";

   for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars[randomNumber];
   }

   passwordInput.value = password;
}

btnGeneratePassword.addEventListener('click', getPassword);