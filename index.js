const text = "Hi!am Saddam Saku"; // The text to be typed
let charIndex = 0; // Current character index
let isDeleting = false; // Flag to check if we are deleting
const typingSpeed = 150; // Speed of typing in milliseconds
const deletingSpeed = 100; // Speed of deleting in milliseconds
const pauseTime = 1000; // Pause time after completing the sentence

function typeEffect() {
    const displayElement = document.getElementById("typing-text");

    if (!isDeleting) {
        if (charIndex < text.length) {
            displayElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            isDeleting = true; // Start deleting after typing is complete
            setTimeout(typeEffect, pauseTime); // Pause before starting to delete
        }
    } else {
        if (charIndex > 0) {
            displayElement.textContent = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            isDeleting = false; // Start typing again after deleting is complete
            setTimeout(typeEffect, pauseTime); // Pause before starting to type again
        }
    }
}

// Start the typing effect
typeEffect();