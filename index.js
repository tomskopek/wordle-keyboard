function calculateKeyboardKeyWidth() {
    const keyboardRowWidth = document.querySelector(".keyboard-row").offsetWidth;
    const maxKeysInRow = 10;
    const keyMargin = 6;
    const rowMargin = 8;
    return (keyboardRowWidth - (rowMargin * 2) - keyMargin * (maxKeysInRow - 1)) / maxKeysInRow;
}

function setKeyboardKeyWidth(width) {
    const keys = document.querySelectorAll(".keyboard-button");
    keys.forEach(key => {
        key.style.width = `${width}px`;
    });

    // del and enter button can take up 1 extra key between the two of them since that row has 9 keys total
    const deleteButton = document.getElementById("backspace");
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