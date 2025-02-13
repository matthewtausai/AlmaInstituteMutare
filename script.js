const backgroundslider = document.querySelector('#Home');
const images = [
    
    'Pictures/learners.jpg',
    'Pictures/price1.jpg',
    'Images/lab.jpg',
    'Pictures/form1.jpg',
    'Pictures/corridor.jpg',
    'Pictures/drama.jpg',
    'Pictures/A6.jpg',
    'Pictures/choir.jpg',
    
];

let currentImageIndex = 0;

backgroundslider.style.backgroundImage = `url(${images[currentImageIndex]})`;



setInterval(() => {

    currentImageIndex = (currentImageIndex + 1) % images.length;
    backgroundslider.classList.add('slide-out');

    setTimeout(() => {

    backgroundslider.style.backgroundImage = `url(${images[currentImageIndex]})`;

    backgroundslider.classList.remove('slide-out');

    },1000);

},2000);