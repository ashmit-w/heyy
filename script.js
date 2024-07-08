const initialText = "Brishti Sharma I love you";
const loopText = "so much";
const appendText = document.getElementById('append-text');

// Append the initial text
appendText.textContent = initialText;

// Start appending the loop text
setInterval(() => {
    appendText.textContent += " " + loopText;
}, 200);