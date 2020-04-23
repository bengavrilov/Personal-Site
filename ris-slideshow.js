var i = 0; // start point
var images = [];
var time = 4000;

// Image List
images[0] = 'my-css/images/ris-a-1.png';
images[1] = 'my-css/images/ris-a-2.jpg';
images[2] = 'my-css/images/ris-a-3.png';

// Chance Image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;