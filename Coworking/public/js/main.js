//menu burger ( frite )
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('ul');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.classList.remove('open');
        } else {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.classList.add('open');
        }
    });
});