let menuBtn = document.querySelector('.menu-icon');
let menu = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('menu-icon_active');
	menu.classList.toggle('nav_active');
})

let links = document.querySelectorAll(".nav__link");
links.forEach(link => {
    link.addEventListener("click", function(){
        menuBtn.classList.remove('menu-icon_active');
        menu.classList.remove('nav_active');
    })
});