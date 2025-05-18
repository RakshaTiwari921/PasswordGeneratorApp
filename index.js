
const passwordBox = document.getElementById("password");
const copyMsg = document.getElementById("copy-msg");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789"
const symbols = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password
}

function copyPassword() {
  
    // Check if input has value
    if (passwordBox.value.trim() === "") {
      alert("Nothing to copy!");
      return;
    }
  
    // Use Clipboard API
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => {
        // alert("Password copied to clipboard!");
        passwordBox.value = ""; // clear input
        copyMsg.classList.add("show"); // show animation

        setTimeout(() => {
            copyMsg.classList.remove("show"); // hide after 1.5 seconds
        }, 1500);
      })
      .catch(err => {
        console.error("Failed to copy:", err);
      });
}

  