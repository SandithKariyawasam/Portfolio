; (function ($) {
    $(document).ready(function () {
        // Toggle menu visibility and active class
        $(document).on('click', '.header-area .show-menu', function () {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Optional menu close handler (currently commented out)
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        // Initialize AOS (Animate On Scroll) plugin
        AOS.init({
            duration: 1500,
            once: true
        });
    });
})(jQuery);



var div = document.createElement("div");
div.id = "preloader",
    div.className = "preloader",
    div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div, document.body.firstChild), window.onload = function () {
        document.getElementById("preloader").classList.add("off")
    };


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#5b78f6", "#6f83f7", "#818ff9", "#919bfa", "#a0a7fb", "#afb3fc", "#bdbffc", "#caccfd", "#d8d8fe", "#e5e5fe", "#f2f2ff", "#ffffff"
];


circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();