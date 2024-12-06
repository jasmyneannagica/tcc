function aumentarQuantidade(cardId) {
    const quantidadeElemento = document.getElementById(`quantidade-${cardId}`);
    const quantidade = parseInt(quantidadeElemento.innerText);
    quantidadeElemento.innerText = quantidade + 1;
    atualizarPreco(cardId);
  }

  
  function diminuirQuantidade(cardId) {
    const quantidadeElemento = document.getElementById(`quantidade-${cardId}`);
    const quantidade = parseInt(quantidadeElemento.innerText);
    if (quantidade > 0) {
      quantidadeElemento.innerText = quantidade - 1;
      atualizarPreco(cardId);
    }
  }

  
  function atualizarPreco(cardId) {
    const quantidade = parseInt(document.getElementById(`quantidade-${cardId}`).innerText);
    let precoUnitario;

    
    if (cardId === 1) {
      precoUnitario = 15;
    } else if (cardId === 2) {
      precoUnitario = 18;
    } else if (cardId === 3) {
      precoUnitario = 25;
    }
    if (cardId === 4) {
      precoUnitario = 28;
    } else if (cardId === 5) {
      precoUnitario = 25;
    } else if (cardId === 6) {
      precoUnitario = 30;
    }


   
    const precoTotal = quantidade * precoUnitario;
    document.getElementById(`preco-${cardId}`).innerText = `Preço: R$ ${precoTotal.toFixed(2)}`;
  }

  // script.js
document.addEventListener("DOMContentLoaded", () => {
  const openCardBtn = document.getElementById("open-card-btn");
  const closeCardBtn = document.getElementById("close-card-btn");
  const pedidoCard = document.getElementById("pedido-card");

  // Abre o card
  openCardBtn.addEventListener("click", () => {
    pedidoCard.classList.remove("hidden");
  });

  // Fecha o card
  closeCardBtn.addEventListener("click", () => {
    pedidoCard.classList.add("hidden");
  });

  // Simulação de envio do formulário
  const pedidoForm = document.getElementById("pedido-form");
  pedidoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o reload da página
    alert("Pedido enviado com sucesso!");
    pedidoCard.classList.add("hidden");
    pedidoForm.reset();
  });
});
