// 1. Captura de elementos do DOM
const btnTema = document.getElementById('btn-tema');
const btnSaudar = document.getElementById('btn-saudar');
const inputNome = document.getElementById('input-nome');
const msgBoasVindas = document.getElementById('mensagem-boas-vendas');

// 2. Função para o Modo Escuro (Melhoria para o usuário - Nível 4)
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 3. Função para processar informações e atualizar a tela (Requisito Técnico - Nível 4)
btnSaudar.addEventListener('click', () => {
    const nomeUsuario = inputNome.value; // Armazenando em variável

    if (nomeUsuario.trim() !== "") {
