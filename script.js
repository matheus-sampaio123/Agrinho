// 1. Sistema de Navegação entre Páginas
function navegar(idPagina) {
    // Esconde todas as páginas
    document.querySelectorAll('.pagina').forEach(pag => {
        pag.classList.remove('active');
    });
    // Mostra a página clicada
    document.getElementById(idPagina).classList.add('active');
}

// 2. Troca de Imagem com Legenda
function trocarImagem(url, texto) {
    const img = document.getElementById('imagem-destaque');
    const legenda = document.getElementById('legenda');
    img.src = url;
    legenda.innerText = texto;
}

// 3. Player de Vídeo Dinâmico
function carregarVideo(urlYoutube) {
    const player = document.getElementById('video-player');
    player.src = urlYoutube;
    alert("Carregando vídeo oficial...");
}

// 4. Modo Escuro
document.getElementById('btn-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 5. Lógica da Calculadora
document.getElementById('btn-rodar').addEventListener('click', () => {
    const val = document.getElementById('valor-input').value;
    const resDiv = document.getElementById('resultado');
    const resTxt = document.getElementById('texto-res');

    if(val > 0) {
        resDiv.classList.remove('hidden');
        resTxt.innerHTML = `Sua fazenda de ${val} hectares economizaria <strong>${val * 120} litros</strong> de água por mês com tecnologia JS!`;
    } else {
        alert("Digite um valor válido!");
    }
});
