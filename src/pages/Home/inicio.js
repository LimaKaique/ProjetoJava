// Função para abrir/fechar o menu em dispositivos móveis
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links').querySelector('ul');
    navLinks.classList.toggle('active');
});

// Função para exibir mensagem de confirmação no formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibe a mensagem de confirmação
    document.getElementById('mensagem-confirmacao').textContent = 'Mensagem enviada com sucesso!';
    document.getElementById('mensagem-confirmacao').style.color = 'green';

    // Limpa o formulário após o envio
    this.reset();
});