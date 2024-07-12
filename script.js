const initialText = "Ashmit loves Brishti";
const loopText = "very much";
const appendText = document.getElementById('append-text');

// Append the initial text
appendText.textContent = initialText;

// Start appending the loop text
setInterval(() => {
    appendText.textContent += " " + loopText;
}, 200);
