const listaProdutos = [
    "Big Burguer 42",
    "Chicken Burguer 42",
    "Galaxy Burguer 42",
    "Hitchhiker's Burguer 42",
    "Dinamite Pangaláctica",
    "Horse and Groom's Beer",
    "Damogran's Water"
];

const listaPreços = [
    42.00,
    35.50,
    27.80,
    38.42,
    42.00,
    22.45,
    12.98
];

var carrinho = [];
var valores = [];

var produtos = 0;
var valorTotal = 0;

var idPTemp = null;

function adicionarProduto(idProduto) {
    var adicionado = window.confirm('Adicionar produto?');

    idPTemp = idProduto;

    if (adicionado) {
        produtos++;
        window.alert(`Produto adicionado: ${listaProdutos[idProduto]}`);

        carrinho.push(listaProdutos[idProduto]);
        valores.push(listaPreços[idProduto].toFixed(2));

        valorTotal += listaPreços[idProduto];
        listarProdutos();
    }
}

function listarProdutos() {
  
    var lista = document.getElementById("todosProdutos");

    var p = document.createElement("p");

    let emoji;

    if (idPTemp <= 3) {
        emoji = '&#x1F354;'
    } else if (idPTemp == 4) {
        emoji = '&#x1F378;'
    } else if (idPTemp == 5) {
        emoji = '&#x1F37A;'
    } else if (idPTemp == 6) {
        emoji = '&#x1F95B;'
    };

    let resultado = `${emoji} ${carrinho[carrinho.length-1]}` + '..........<span id="valor">R$' + valores[valores.length-1] + '</span>';

    p.innerHTML = resultado;
    lista.appendChild(p);
}

function finalizarCompra() {
    var link = window.document.getElementById('linkToPay');

    if (carrinho.length == 0) {
        link.href="#";

        window.alert('Seu carrinho está vazio!');
    } else {
        var isFinalizado = window.confirm(`Valor Total R$${valorTotal.toFixed(2)}. Finalizar?`);
        
        if (isFinalizado) {
            link.href="pagamento.html";
        }
    }
}