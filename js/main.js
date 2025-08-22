// document.addEventListener('DOMContentLoaded', () => {
//     const mobileToggle = document.querySelector('.header__mobile-toggle');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const closeMenu = document.querySelector('.mobile-menu__close');

//     mobileToggle.addEventListener('click', () => {
//         mobileMenu.classList.add('active');
//     });

//     closeMenu.addEventListener('click', () => {
//         mobileMenu.classList.remove('active');
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.mobile-menu__close');
    const menuLinks = document.querySelectorAll('.mobile-menu__list a');

    const toggleMenu = (show) => {
        mobileMenu.classList.toggle('active', show);
        document.body.style.overflow = show ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => toggleMenu(true));
    closeMenu.addEventListener('click', () => toggleMenu(false));

    // Fermer le menu quand on clique sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu(false);
        }
    });
});