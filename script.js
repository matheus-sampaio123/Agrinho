// 1. Função para o Modo Escuro (Melhoria de usabilidade)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Tema alterado pelo usuário."); // Log para debug
});

// 2. Manipulação de dados e DOM (Funcionalidade)
function calcularEconomia() {
    const inputLitros = document.getElementById('litros');
    const displayResultado = document.getElementById('resultado');
    
    // Armazenando valor em variável antes de processar
    let litrosDiarios = Number(inputLitros.value);
    
    if (litrosDiarios > 0) {
        let totalSemana = litrosDiarios * 7;
        // Atualizando o texto do elemento HTML
        displayResultado.innerText = `Parabéns! Em uma semana você economizará ${totalSemana} litros de água.`;
        displayResultado.style.color = "#2e7d32";
    } else {
        displayResultado.innerText = "Por favor, insira um valor válido.";
        displayResultado.style.color = "red";
    }
}
