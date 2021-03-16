//  SCROLL BACK TO TOP BUTTON AND TRIVIA BUTTON SHOWS ON SCROLL

let topBtn = $('#backToTop');
let triviaBtn = $('#toTrivia');


$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        topBtn.addClass('show');
        triviaBtn.addClass('show');
    } else {
        topBtn.removeClass('show');
        triviaBtn.removeClass('show')
    }
});

topBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


//  NAVIGATION BAR 

function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();


//  ANIMATION FOR MAIN TITLES WHEN PAGE IS LOADED

animate = function (element, px) {
    $(document).ready(() => {
        $(element).css("margin-left", px)
        $(element).animate({
            marginLeft: "0px"
        }, 1000);
    })
}

animate('h1', "-100px");
animate("h2", "-100px");
animate(".mainTitles p", "200px")