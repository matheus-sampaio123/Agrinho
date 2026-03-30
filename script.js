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
