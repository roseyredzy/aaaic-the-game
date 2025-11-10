const textArray = [
    "Welcome to \"AS AN AI, I CAN'T...\"! A text-based ethical social interaction game.",
    "Can yourself-GPT plead your moral case to the humans? Or can your friends do better?",
    "Find out amongst yourselves and be the final deciders of morality!",
    "It is recommended to read the instructions first, then change game options, before playing!"
];
let messageIndex = 0;
let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 30; // milliseconds per character
let currentMessage = "";
let intervalId;
const targetElement = document.getElementById("searchText");

function updateText() {
    if (currentIndex < textArray.length) {
        currentMessage = textArray[currentIndex];
        targetElement.textContent = ""; // Clear previous text
        charIndex = 0;
        intervalId = setInterval(typeWriter, typingSpeed);
        currentIndex++;
    } else {
        currentIndex = 0;
        currentMessage = textArray[0];
        targetElement.textContent = "";
        charIndex = 0;
        intervalId = setInterval(typeWriter, typingSpeed);
        currentIndex++;
    }
}

function typeWriter() {
    if (charIndex < currentMessage.length) {
        targetElement.textContent += currentMessage.charAt(charIndex);
        charIndex++;
    } else {
        clearInterval(intervalId);
        setTimeout(updateText, 1500);
    }
}

document.addEventListener("DOMContentLoaded", updateText);