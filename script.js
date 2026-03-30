// Logica do Formulario
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Recebemos sua mensagem sobre o futuro sustentável.`);
    this.reset();
});

// Mudança de cor no Header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#0a1a08';
        header.style.padding = '10px 5%';
    } else {
        header.style.background = '#1b3d18';
        header.style.padding = '20px 5%';
    }
});
