// Alterar estilo do header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#0d210a';
        header.style.padding = '10px 5%';
    } else {
        header.style.background = '#1b3d18';
        header.style.padding = '20px 5%';
    }
});

// Animação simples de entrada (Fade-in ao rolar)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-anima="scroll"]').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

