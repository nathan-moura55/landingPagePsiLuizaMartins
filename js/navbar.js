document.addEventListener('DOMContentLoaded', () => {
    let ultimaPosicaoScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const eDesktopOuPaisagem = window.innerWidth > 1024 || window.matchMedia("(orientation: landscape)").matches;

        if (eDesktopOuPaisagem && navbar) {
            const posicaoAtualScroll = window.scrollY;

            if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > 80) {
                navbar.classList.add('ocultar');
            } else {
                navbar.classList.remove('ocultar');
            }

            ultimaPosicaoScroll = posicaoAtualScroll;
        } else if (navbar) {
            navbar.classList.remove('ocultar');
        }
    });

    const icon = document.getElementById("hamburger-icon");
    const icon1 = document.getElementById("icon-a");
    const icon2 = document.getElementById("icon-b");
    const icon3 = document.getElementById("icon-c");
    const navMenu = document.getElementById("nav-menu");
    const blueBg = document.getElementById("blue-bg");
    const navLinks = document.querySelectorAll(".Navbar-links a");

    function toggleMenu() {
        if (icon1 && icon2 && icon3 && navMenu && blueBg) {
            icon1.classList.toggle('a');
            icon2.classList.toggle('c');
            icon3.classList.toggle('b');
            navMenu.classList.toggle('show');
            blueBg.classList.toggle('slide');
        }
    }

    if (icon) {
        icon.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('show')) {
                toggleMenu();
            }
        });
    });
});