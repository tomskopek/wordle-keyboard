function calculateKeyboardKeyWidth() {
    const keyboardRowWidth = document.querySelector(".keyboard-row").offsetWidth;
    const maxKeysInRow = 10;
    const margin = 6;
    return (keyboardRowWidth - (8 * 2) - margin * (maxKeysInRow - 1)) / maxKeysInRow;
}

function setKeyboardKeyWidth(width) {
    const keys = document.querySelectorAll(".keyboard-button");
    keys.forEach(key => {
        key.style.width = `${width}px`;
    });
    const deleteButton = document.getElementById("backspace");
    // del and enter button can take up 1 extra key between the two of them

    deleteButton.style.width = `${width * 1.5}px`;
    const enterButton = document.getElementById("enter");
    enterButton.style.width = `${width * 1.5}px`;
}

function setGameDimensions() {
    const keyboardKeyWidth = calculateKeyboardKeyWidth();
    setKeyboardKeyWidth(keyboardKeyWidth);
}

window.onresize = function() {
    setGameDimensions();
};

window.onload = function() {
    setGameDimensions();
}