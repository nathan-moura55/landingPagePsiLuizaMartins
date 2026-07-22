(function() {
    emailjs.init("yEbios-kFmFzRQ7Q9");
})();

const form = document.getElementById('meu-formulario');
const btnSubmit = document.getElementById('btn-submit');
const statusMensagem = document.getElementById('mensagem-status');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const serviceID = 'service_ihsb8ap';
    const templateID = 'template_nopkzrc';

    btnSubmit.textContent = 'Enviando...';
    btnSubmit.disabled = true;
    statusMensagem.textContent = ''; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnSubmit.textContent = 'Mensagem Enviada!';
            btnSubmit.style.backgroundColor = '#28a745';
            
            statusMensagem.textContent = 'Obrigada! Sua mensagem foi enviada com sucesso.';
            statusMensagem.style.color = '#28a745';

            form.reset(); 

            setTimeout(() => {
                btnSubmit.textContent = 'Enviar Mensagem';
                btnSubmit.disabled = false;
                btnSubmit.style.backgroundColor = '';
                statusMensagem.textContent = '';
            }, 4000);
        })
        .catch((err) => {
            btnSubmit.textContent = 'Enviar Mensagem';
            btnSubmit.disabled = false;
            
            statusMensagem.textContent = 'Ops! Houve um erro ao enviar. Tente novamente.';
            statusMensagem.style.color = '#dc3545';
            
            console.error('Erro ao enviar pelo EmailJS:', err);
        });
});