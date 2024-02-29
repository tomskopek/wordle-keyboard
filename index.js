function setGameDimensions() {
    const keyboardRowWidth = document.querySelector('.keyboard-row').offsetWidth;
    document.documentElement.style.setProperty('--keyboard-row-width', `${keyboardRowWidth}px`);
}

window.onresize = function() {
    setGameDimensions();
};

window.onload = function() {
    setGameDimensions();
}