// Função para abrir/fechar o menu em dispositivos móveis
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links').querySelector('ul');
    navLinks.classList.toggle('active');
});

// Função para exibir mensagem de confirmação no formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibe a mensagem de confirmação
    const mensagemConfirmacao = document.createElement('div');
    mensagemConfirmacao.textContent = 'Mensagem enviada com sucesso!';
    mensagemConfirmacao.style.color = 'green';
    mensagemConfirmacao.style.fontWeight = 'bold';
    mensagemConfirmacao.style.marginTop = '20px';

    document.getElementById('form-contato').appendChild(mensagemConfirmacao);

    // Limpa o formulário após o envio
    this.reset();
});
