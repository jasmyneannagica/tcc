document.addEventListener('DOMContentLoaded', function() {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');
    const totalQuantityDisplay = document.getElementById('total-quantity');
    const totalPriceDisplay = document.getElementById('total-price');
    const addToCartButton = document.getElementById('add-to-cart');

    const pricePerLanche = 10;  // Preço fixo do lanche
    let quantity = 1;  // Quantidade inicial

    // Atualiza o display da quantidade e do preço
    function updateDisplay() {
        quantityInput.value = quantity; // Atualiza o campo de input
        totalQuantityDisplay.textContent = quantity; // Atualiza o total de lanches
        totalPriceDisplay.textContent = `R$${(quantity * pricePerLanche).toFixed(2)}`; // Atualiza o valor total
    }

    // Função para diminuir a quantidade
    decreaseButton.addEventListener('click', function() {
        if (quantity > 1) {  // Impede que a quantidade seja menor que 1
            quantity--;
            updateDisplay();
        }
    });

    // Função para aumentar a quantidade
    increaseButton.addEventListener('click', function() {
        quantity++;
        updateDisplay();
    });

    // Quando clicar em "Adicionar ao Carrinho"
    addToCartButton.addEventListener('click', function() {
        alert(`Você adicionou ${quantity} lanche(s) ao carrinho!`);
    });

    // Inicializa o display
    updateDisplay();
});
