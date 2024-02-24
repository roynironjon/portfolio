var typed = new Typed(".muliple", {
    strings: ["Web Designer", "Graphic Designer", "PHP Developer", "Wordpress Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}