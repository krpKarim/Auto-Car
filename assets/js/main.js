/* section 9 counter */
let valueDisplays = document.querySelectorAll(".num")
let interval = 500
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})

/* section 10 owl carousel */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
        }
    }
});

// reveal js
// some key options {duration,origin,distance,easing,rotate x y z,scale 0:1,viewFactor,interval,delay}
ScrollReveal({ reset: true });
ScrollReveal().reveal(".title", {
    duration: 500,
    origin: "bottom",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    }
});

ScrollReveal().reveal(".fade-in", {
    duration: 3000,
    move: 0
});

ScrollReveal().reveal(".scaleUp", {
    duration: 5000,
    scale: 0.85
});

ScrollReveal().reveal(".flip", {
    delay: 500,
    duration: 5000,
    rotate: {
        x: 20,
        z: 20
    }
});

ScrollReveal().reveal(".slide-right", {
    duration: 2000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
    duration: 5000,
    origin: "bottom",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.3,
    scale: 0.5
});

// animated backround
