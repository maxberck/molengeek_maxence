//menu burger ( frite )
document.addEventListener('DOMContentLoaded', () => {
    // aller chercher les éléments dans html
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('ul');

    burgerMenu.addEventListener('click', () => {
        // creation de la classe open avec un toggle pour pouvoir allumer fermer
        burgerMenu.classList.toggle('open');
        // vérifier si la class open est active ou pas
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
// creation d'objet
 images = {
    carou1: "url('./public/img/img-carousel.jpeg')",
    carou2: "url('./public/img/img-carousel1.jpg')",
    carou3: "url('./public/img/carou1.jpg')"
};
 // si il y a un header
if (header) {
    // forEach parce qu'il faut lire les élément de l'objet
    carouDivs.forEach(div => {
        div.addEventListener('click', () => {
            let id = div.id;
            if (images[id]) {
                header.style.backgroundImage = images[id];
            } else {
                console.error(`Aucune image trouvée pour ${id}`);
            }
        });
    });
    // si il n'y en a pas de header
} else {
    console.log("Le header n'a pas été trouvé !");
}
