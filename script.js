
function verificarFrete() {
    const valor = Number(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (valor >= 200) {
        resultado.textContent = "Você possui frete grátis!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Você não possui frete grátis.";
        resultado.style.color = "red";
    }
}