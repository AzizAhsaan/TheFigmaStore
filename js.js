function scrolll() {
    var scrollImages = document.querySelector(".scroll-images");
    var imageWidth = scrollImages.querySelector(".child").offsetWidth;
    var scrollAmount = imageWidth + 10; 
    scrollImages.scrollBy(scrollAmount, 0);

    if (scrollImages.scrollLeft >= scrollImages.scrollWidth - scrollImages.offsetWidth) {
        
        scrollImages.scrollTo(0, 0);
    }
}

function scrollr() {
    var scrollImages = document.querySelector(".scroll-images");
    var imageWidth = scrollImages.querySelector(".child").offsetWidth;
    var scrollAmount = imageWidth + 10; 
    scrollImages.scrollBy(-scrollAmount, 0);

    if (scrollImages.scrollLeft === 0) {

        scrollImages.scrollTo(scrollImages.scrollWidth, 0);
    }
}

var scrollContainer = document.querySelector(".scroll-images");
var isMouseDown = false;
var startX;
var scrollLeft;

scrollContainer.addEventListener("mousedown", function (event) {
    event.preventDefault();
    isMouseDown = true;
    startX = event.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mousemove", function (event) {
    event.preventDefault();
    if (!isMouseDown) return;
    var x = event.pageX - scrollContainer.offsetLeft;
    var walk = (x - startX) * 4; // this value to change the scrolling speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener("mouseup", function () {
    isMouseDown = false;
});

scrollContainer.addEventListener("mouseleave", function () {
    isMouseDown = false;
});


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})



