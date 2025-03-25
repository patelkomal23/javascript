window.addEventListener("scroll", function () {
    let parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});
