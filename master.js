let landing = document.querySelector(".landing-page");

let images = ["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","hh1.jpg","hh2.jpg","hh3.jpg"];






setInterval(() => {
    let randomNumber =  Math.floor(Math.random() * images.length);


    landing.style.backgroundimage = 'url("p2.jpg")';
    
}, 500);