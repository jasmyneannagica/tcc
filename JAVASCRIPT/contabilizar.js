
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


    const precoTotal = quantidade * precoUnitario;
    document.getElementById(`preco-${cardId}`).innerText = `Preço: R$ ${precoTotal.toFixed(2)}`;
  }