// Seleciona os elementos
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const quantidadeSpan = document.getElementById("quantidade");
const valorTotalSpan = document.getElementById("valor-total");
const precoUnitarioSpan = document.getElementById("preco-unitario");

// Variáveis para armazenar os dados
let quantidade = 0;
const precoUnitario = parseFloat(precoUnitarioSpan.textContent); // Converte o preço para número

// Função para atualizar os valores na tela
function atualizarValores() {
    quantidadeSpan.textContent = quantidade;
    valorTotalSpan.textContent = (quantidade * precoUnitario).toFixed(2); // Atualiza o total formatado
}

// Event listener para aumentar a quantidade
btnIncrementar.addEventListener("click", () => {
    quantidade++;
    atualizarValores();
});

// Event listener para diminuir a quantidade
btnDecrementar.addEventListener("click", () => {
    if (quantidade > 0) {
        quantidade--;
    }
    atualizarValores();
});

// Atualiza os valores iniciais
atualizarValores();
