//Hamburger
const buttonToogle = document.querySelector('.buttonToogle');
        const mobileMenu = document.querySelector('.mobileMenu');

        buttonToogle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });