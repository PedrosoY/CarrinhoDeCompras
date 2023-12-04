let totalGeral = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.'));
    let quantidade = parseFloat(document.getElementById('quantidade').value);

    if (!isNaN(quantidade) && quantidade > 0) {
        let preco = quantidade * valorUnitario;
        let carrinho = document.getElementById('lista-produtos');

        carrinho.innerHTML += `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
            </section>
        `;

        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

        document.getElementById('quantidade').value = '';  // Removendo o valor 0 e deixando o campo vazio
    } else {
        alert('Adicione uma quantidade válida');
    }
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
