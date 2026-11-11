
// SCROLL REVEAL ANIMATION
function revealElements() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.background = "#080808";
        } else {
            navbar.style.padding = "18px 0";
            navbar.style.background = "rgba(0,0,0,0.92)";
        }
    }
});


// CONTACT FORM
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for contacting AL SYED Restaurant!");

        contactForm.reset();
    });
}
