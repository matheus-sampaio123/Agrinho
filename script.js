document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Adicionando o estilo para o modo escuro
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: white;
    }
    .dark-mode header, .dark-mode footer {
        background-color: #444;
    }
`;
document.head.appendChild(style);
