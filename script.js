// Selecionando elementos
const btnTema = document.getElementById('btn-tema');
const btnCalcular = document.getElementById('btn-calcular');
const inputArea = document.getElementById('area-campo');
const resContainer = document.getElementById('resultado-container');
const txtResultado = document.getElementById('txt-resultado');

// 1. Funcionalidade de alternar tema (Nível 4: melhoria de usabilidade)
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Usuário alterou o tema visual.");
});

// 2. Funcionalidade de cálculo (Nível 4: manipulação funcional do DOM)
btnCalcular.addEventListener('click', () => {
    const area = Number(inputArea.value);
    
    if (area > 0) {
        // Lógica simples: supondo economia de 5 litros por m²
        const economia = area * 5;
        
        // Manipulando o HTML para exibir o resultado
        txtResultado.innerHTML = `<strong>Sucesso!</strong> Ao usar tecnologia, você economiza cerca de <strong>${economia} litros</strong> de água por irrigação nesta área.`;
        
        // Mostra o container que estava escondido
        resContainer.classList.remove('hidden');
    } else {
        alert("Por favor, digite um valor válido para a área.");
    }
});
