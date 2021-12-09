let burgerBtn = document.querySelector(".menu_burger");
let menu = document.querySelector(".list");

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});