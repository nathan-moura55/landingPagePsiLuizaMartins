document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meu-formulario');
    const btnSubmit = document.getElementById('btn-submit');
    const statusMensagem = document.getElementById('mensagem-status');
    const modalErro = document.getElementById('modal-erro');
    const btnFecharModal = document.getElementById('btn-fechar-modal');

    // Alerta de depuração caso o formulário não seja encontrado
    if (!form) {
        console.error("Erro: O elemento #meu-formulario não foi encontrado no HTML!");
        return;
    }

    if (btnFecharModal) {
        btnFecharModal.addEventListener('click', function() {
            if (modalErro) modalErro.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modalErro) {
            modalErro.style.display = 'none';
        }
    });

    form.addEventListener('submit', async function(event) {
        // Impede o recarregamento padrão da página
        event.preventDefault(); 

        btnSubmit.textContent = 'Enviando...';
        btnSubmit.disabled = true;
        if (statusMensagem) statusMensagem.textContent = ''; 
        
        const formData = {
            nome_completo: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            telefone: document.getElementById('number')?.value || '',
            tipo_atendimento: document.getElementById('subject')?.value || '',
            mensagem: document.getElementById('message')?.value || ''
        };

        const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
            ? 'http://127.0.0.1:8000/api/agendamentos'
            : '/api/agendamentos';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                btnSubmit.textContent = 'Mensagem Enviada!';
                btnSubmit.style.backgroundColor = '#505E36';
                form.reset(); 
            } else {
                throw new Error('Erro ao registrar no backend');
            }
        } catch (err) {
            btnSubmit.textContent = 'Enviar Mensagem';
            btnSubmit.style.backgroundColor = '#6D382D'; 
            btnSubmit.disabled = false;
            
            if (modalErro) {
                modalErro.style.display = 'flex';
            }
            
            console.error('Erro na requisição:', err);
        }
    });
});