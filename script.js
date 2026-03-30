function mostrarMensagem() {
    alert("Obrigado pelo interesse! Estamos construindo um agro mais forte e verde juntos.");
}

// Efeito de mudar a cor do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#1b3d18';
    } else {
        header.style.background = '#2d5a27';
    }
});
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    
    // Simulação de envio
    alert(`Olá ${nome}! Sua mensagem foi enviada com sucesso. Nossa equipe de sustentabilidade entrará em contato.`);
    
    this.reset(); // Limpa o formulário
});
