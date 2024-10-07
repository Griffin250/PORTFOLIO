
var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".skills").appendChild(copy);


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const words = ["Web Designer","UI/UX Designer", "FrontEnd Developer","BackEnd Developer",  "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;
const typingSpeed = 150; // Speed of typing each character
const pauseTime = 1000;  // Pause time before starting to delete or type next word

const typingEffect = document.querySelector('.typing-effect');

function type() {
if (charIndex < words[wordIndex].length && !isDeleting) {
  currentWord += words[wordIndex].charAt(charIndex);
  charIndex++;
  typingEffect.textContent = currentWord;
  setTimeout(type, typingSpeed);
} else if (charIndex === words[wordIndex].length && !isDeleting) {
  isDeleting = true;
  setTimeout(type, pauseTime);
} else if (charIndex > 0 && isDeleting) {
  currentWord = currentWord.slice(0, -1);
  charIndex--;
  typingEffect.textContent = currentWord;
  setTimeout(type, typingSpeed);
} else if (charIndex === 0 && isDeleting) {
  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  setTimeout(type, typingSpeed);
}
}
document.addEventListener('DOMContentLoaded', type);

//Function to update and display thecurrent year in the copyright form ......
function displayCurrentYear(){
  const year = new Date().getFullYear();
  document.getElementById("currentYear").textContent = year;
}
window.onload = displayCurrentYear