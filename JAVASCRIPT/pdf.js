document.getElementById("finalizarPedidoBtn").addEventListener("click", () => {
    // Captura os dados dos lanches
    const lanches = [];
    for (let i = 1; i <= 6; i++) {
        const quantidade = parseInt(document.getElementById(`quantidade-${i}`).innerText);
        if (quantidade > 0) {
            const titulo = document.querySelector(`#quantidade-${i}`).closest('.card-body').querySelector('.card-title').innerText;
            const preco = document.getElementById(`preco-${i}`).innerText.replace("Preço: ", "");
            lanches.push({ titulo, quantidade, preco });
        }
    }

    if (lanches.length === 0) {
        alert("Nenhum item foi selecionado.");
        return;
    }

    // Obtém data e horário atual
    const agora = new Date();
    const data = agora.toLocaleDateString("pt-BR");
    const horario = agora.toLocaleTimeString("pt-BR");

    // Endereço fixo (pode ser ajustado ou capturado dinamicamente)
    const endereco = "Rua Exemplo, 123 - Centro, São Paulo - SP";

    // Monta o conteúdo do PDF
    let conteudo = `
        <h1>Comprovante</h1>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <br>
        <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
    `;

    lanches.forEach(lanche => {
        conteudo += `
            <tr>
                <td>${lanche.titulo}</td>
                <td>${lanche.quantidade}</td>
                <td>${lanche.preco}</td>
            </tr>
        `;
    });

    conteudo += `
            </tbody>
        </table>
    `;

    // Configuração do html2pdf.js
    const opt = {
        margin: 10,
        filename: 'pedido.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Gera o PDF
    const element = document.createElement("div");
    element.innerHTML = conteudo;
    html2pdf().set(opt).from(element).save();
});

