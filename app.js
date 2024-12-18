const menu = document.querySelector('#mobile-menu') // on vise le menu
const menuLinks = document.querySelector('.navbar__menu') // on vise les liens dans le .navbar__menu

menu.addEventListener('click', function() { // on crée un listener qui écoute un clic
    menu.classList.toggle('is-active') // on toggle(switch) à is-active sur le #mobile-menu
    menuLinks.classList.toggle('active') // on toggle(switch) à active 
}) 