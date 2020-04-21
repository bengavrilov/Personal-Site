document.getElementById('fyc').addEventListener('click', function() {
    document.querySelector('.bg-modal').setAttribute("style", "display: flex;");
});

document.getElementById('syc').addEventListener('click', function() {
    document.querySelector('.bg2-modal').setAttribute("style", "display: flex;");
});

document.getElementById('tyc').addEventListener('click', function() {
    document.querySelector('.bg3-modal').setAttribute("style", "display: flex;");
});

document.getElementById('4yc').addEventListener('click', function() {
    document.querySelector('.bg4-modal').setAttribute("style", "display: flex;");
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').setAttribute("style", "display: none;");
});

document.querySelector('.close2').addEventListener('click', function () {
    document.querySelector('.bg2-modal').setAttribute("style", "display: none;");
});

document.querySelector('.close3').addEventListener('click', function () {
    document.querySelector('.bg3-modal').setAttribute("style", "display: none;");
});

document.querySelector('.close4').addEventListener('click', function () {
    document.querySelector('.bg4-modal').setAttribute("style", "display: none;");
});