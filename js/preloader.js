window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 2000); 
    });