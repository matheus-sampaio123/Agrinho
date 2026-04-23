// Saudação personalizada
const btnSaudacao = document.getElementById("btn-saudacao");
const saudacao = document.getElementById("saudacao");

btnSaudacao.addEventListener("click", () => {
  const nome = prompt("Qual é o seu nome?");
  if (nome) {
    saudacao.textContent = `Olá, ${nome}! Bem-vindo(a) ao Agrinho!`;
  } else {
    saudacao.textContent = "Olá! Bem-vindo(a) ao Agrinho!";
  }
});

// Modo escuro
const btnModo = document.getElementById("btn-modo");
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
