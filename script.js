function modoEscuro() {
    document.body.classList.toggle("dark");
}

function adicionarItem() {
    let novo = prompt("Digite um novo benefício:");

    if (novo) {
        let li = document.createElement("li");
        li.textContent = novo;

        document.getElementById("lista").appendChild(li);
    }
}
