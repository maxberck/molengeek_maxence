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


// carousel
let carouDivs = document.querySelectorAll('.carousel');
let header = document.querySelector('header');
 images = {
    carou1: "url('./public/img/img-carousel.jpeg')",
    carou2: "url('./public/img/img-carousel1.jpg')",
    carou3: "url('./public/img/carou1.jpg')"
};
if (header) {
    carouDivs.forEach(div => {
        div.addEventListener('click', function() {
            let id = div.id;
            if (images[id]) {
                header.style.backgroundImage = images[id];
            } else {
                console.error(`Aucune image trouvée pour ${id}`);
            }
        });
    });
} else {
    console.log("Le header n'a pas été trouvé !");
}
