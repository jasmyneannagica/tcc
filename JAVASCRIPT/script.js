function aumentarQuantidade(cardId) {
    const quantidadeElemento = document.getElementById(`quantidade-${cardId}`);
    const quantidade = parseInt(quantidadeElemento.innerText);
    quantidadeElemento.innerText = quantidade + 1;
    atualizarPreco(cardId);
  }

  // Função para diminuir a quantidade
  function diminuirQuantidade(cardId) {
    const quantidadeElemento = document.getElementById(`quantidade-${cardId}`);
    const quantidade = parseInt(quantidadeElemento.innerText);
    if (quantidade > 0) {
      quantidadeElemento.innerText = quantidade - 1;
      atualizarPreco(cardId);
    }
  }

  // Função para atualizar o preço com base na quantidade
  function atualizarPreco(cardId) {
    const quantidade = parseInt(document.getElementById(`quantidade-${cardId}`).innerText);
    let precoUnitario;

    // Definindo o preço de cada card
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


    // Atualizando o preço
    const precoTotal = quantidade * precoUnitario;
    document.getElementById(`preco-${cardId}`).innerText = `Preço: R$ ${precoTotal.toFixed(2)}`;
  }