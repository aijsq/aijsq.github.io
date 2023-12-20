window.onload = function () {
    const img = document.getElementById('img');
    const off_light = document.getElementById('off_light');
    const on_light = document.getElementById('on_light');
    off_light.onclick = function () {
        img.src = './img/off_light.png';
    }
    on_light.onclick = function () {
        img.src = './img/turn_light.png';
    }
}