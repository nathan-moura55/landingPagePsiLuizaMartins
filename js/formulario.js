(function() {
    emailjs.init("yEbios-kFmFzRQ7Q9");
})();

const form = document.getElementById('meu-formulario');
const btnSubmit = document.getElementById('btn-submit');
const statusMensagem = document.getElementById('mensagem-status');

const modalErro = document.getElementById('modal-erro');
const btnFecharModal = document.getElementById('btn-fechar-modal');

if (btnFecharModal) {
    btnFecharModal.addEventListener('click', function() {
        modalErro.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modalErro) {
        modalErro.style.display = 'none';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const serviceID = 'service_ot99val';
    const templateID = 'template_zha68q9'; 

    btnSubmit.textContent = 'Enviando...';
    btnSubmit.disabled = true;
    statusMensagem.textContent = ''; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnSubmit.textContent = 'Mensagem Enviada!';
            btnSubmit.style.backgroundColor = '#505E36';
            btnSubmit.disabled = true;

            form.reset(); 
        })
        .catch((err) => {
            btnSubmit.textContent = 'Enviar Mensagem';
            btnSubmit.style.backgroundColor = '#6D382D'; 
            btnSubmit.disabled = false;
            
            if (modalErro) {
                modalErro.style.display = 'flex';
            }
            
            console.error('Erro ao enviar pelo EmailJS:', err);
        });
});