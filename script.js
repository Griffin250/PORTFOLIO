AOS.init();

var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".skills").appendChild(copy);


var sidemenu = document.getElementById("sidemenu");
var toggler = document.getElementById("switch");

function openmenu() {
  sidemenu.style.right = "0";
  toggler.style.visibility = "hidden";
}
function closemenu() {
  sidemenu.style.right = "-200px";
  toggler.style.visibility = "visible";

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

// Duplicate the logo-slide to create an infinite scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  const originalSlide = document.querySelector(".logo-slide");
  const copy = originalSlide.cloneNode(true);
  document.querySelector(".skills").appendChild(copy);
});


// Function to toggle theme between light and dark
function toggleTheme() {
  // Check if dark theme is already active
  if (document.body.classList.contains('dark-theme')) {
      // Switch to light theme
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      // Store theme preference in localStorage
      localStorage.setItem('theme', 'light');
  } else {
      // Switch to dark theme
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      // Store theme preference in localStorage
      localStorage.setItem('theme', 'dark');
  }
}

// --------------------Load saved theme on page load
window.onload = function() {
  // Get theme preference from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  // Apply the saved theme
  document.body.classList.add(savedTheme + '-theme');
};
