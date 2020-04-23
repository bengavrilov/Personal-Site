var i = 0; // start point
var images1 = [];
var images2 = [];
var images3 = [];
var images4 = [];
var images5 = [];
var time = 4000;

// Image 
images1[0] = 'my-css/images/ris-a-1.png';
images1[1] = 'my-css/images/ris-a-2.jpg';
images1[2] = 'my-css/images/ris-a-3.png';

images2[0] = 'my-css/images/idb-a-1.png';
images2[1] = 'my-css/images/idb-a-2.png';
images2[2] = 'my-css/images/idb-a-3.png';

images3[0] = 'my-css/images/fim-a-1.jpg';
images3[1] = 'my-css/images/fim-a-2.png';
images3[2] = 'my-css/images/fim-a-3.png';

images4[0] = 'my-css/images/txtcomp-a-1.png';
images4[1] = 'my-css/images/txtcomp-a-2.png';
images4[2] = 'my-css/images/txtcomp-a-3.png';

images5[0] = 'my-css/images/site-a-1.png';
images5[1] = 'my-css/images/site-a-2.png';
images5[2] = 'my-css/images/site-a-3.png';

// Chance Image
function changeImg() {
    document.slide.src = images1[i];
    document.slide2.src = images2[i];
    document.slide3.src = images3[i];
    document.slide4.src = images4[i];
    document.slide5.src = images5[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;