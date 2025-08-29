let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡Agrega al menos un amigo para poder sortear!");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo secreto sorteado es: ${amigoSorteado}!</li>`;
}