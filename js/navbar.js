let ultimaPosicaoScroll = window.scrollY;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const posicaoAtualScroll = window.scrollY;

            if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > 80) {
                navbar.classList.add('ocultar');
            } else {
                navbar.classList.remove('ocultar');
            }

            ultimaPosicaoScroll = posicaoAtualScroll;
        });