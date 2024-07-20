function updateTextAndAnimate(text) {
    var element = document.getElementById('napis');
    element.innerText = text;
    void element.offsetWidth;
    element.style.opacity = 0.4;
}

function removeTextAndAnimate() {
    var element = document.getElementById('napis');
    void element.offsetWidth;
    element.style.opacity = 0;
}