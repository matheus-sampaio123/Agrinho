window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Adiciona classe 'sticky' ao rolar para baixo
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '10px 50px';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.3)';
        header.style.padding = '20px 50px';
    }
});

// Mensagem de boas-vindas no console (opcional)
console.log("Portal Agro Sustentável carregado com sucesso.");
