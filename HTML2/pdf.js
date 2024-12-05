document.getElementById("finalizarPedido").addEventListener("click", gerarPDF);

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adicionar Data e Hora
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString();
    const horaFormatada = agora.toLocaleTimeString();

    doc.setFontSize(12);
    doc.text(`Relatório de Pedido`, 10, 10);
    doc.text(`Data: ${dataFormatada} Hora: ${horaFormatada}`, 10, 20);

    // Criar tabela de produtos
    const tabela = document.getElementById("pedidoTabela");
    const linhas = tabela.querySelectorAll("tr");

    const tableData = [];
    linhas.forEach((linha, index) => {
        const colunas = linha.querySelectorAll("td, th");
        const linhaData = [];
        colunas.forEach((coluna) => linhaData.push(coluna.innerText));
        if (index === 0) {
            // Adicionar cabeçalho da tabela
            doc.text("Produtos", 10, 30);
        }
        tableData.push(linhaData);
    });

    // Adicionar tabela ao PDF
    doc.autoTable({
        head: [tableData[0]], // Cabeçalhos
        body: tableData.slice(1), // Dados
        startY: 40,
    });

    // Salvar PDF
    doc.save(`Pedido_${dataFormatada}_${horaFormatada}.pdf`);
}

