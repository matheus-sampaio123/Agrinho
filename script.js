// Função para saudação personalizada
document.getElementById('saudarBtn').addEventListener('click', function() {
  const nome = document.getElementById('nome').value;
  const saudacao = document.getElementById('saudacao');

  if (nome) {
    saudacao.textContent = `Olá, ${nome}! Bem-vindo ao Agrinho!`;
  } else {
    saudacao.textContent = 'Por favor, digite seu nome.';
  }
});

// Função para ativar/desativar modo escuro
document.getElementById('modoEscuroBtn').addEventListener('click', function() {
  document.body.classList.toggle('modo-escuro');
});
