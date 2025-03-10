// Selecionando todas as perguntas
const perguntas = document.querySelectorAll('.faq ul li');

// Adicionando um evento de clique para expandir/colapsar respostas
perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', function() {
        // Alterna a classe 'active' na pergunta clicada
        this.classList.toggle('active');
    });
});
