let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mesas = [];
let cardapio = [];
let mesa = null;

let popularCardapio = function() {
    cardapio.push({numero: 1, nome: 'Hamburger', valor: 5.00});
    cardapio.push({numero: 2, nome: 'Cheeseburger', valor: 13.99});
    cardapio.push({numero: 3, nome: 'Refrigerante', valor: 5.50});
    cardapio.push({numero: 4, nome: 'Porção de fritas pequena', valor: 6.00});
    cardapio.push({numero: 5, nome: 'Milkshake', valor: 8.99});
    cardapio.push({numero: 6, nome: 'Cerveja', valor: 6.50});
    cardapio.push({numero: 7, nome: 'Porção de aipim', valor: 6.00});
    cardapio.push({numero: 8, nome: 'Tábua de carne', valor: 40.00});
}

let popularMesas = function(quantidade) {
    for (i = 1; i <= quantidade; i++) {
        mesas.push({numero: i, pedidos: []});
    }
}

let mostrarCardapio = function() {
    cardapio.forEach(item => console.log(item.numero + ' - ' + item.nome + ' - ' + item.valor));
}

let selecionarMesa = function(funcao) {
    rl.question('Selecione a mesa: ', function(resposta) {
        if (resposta > 0 && resposta <= mesas.length) {
            mesa = mesas.filter(m => m.numero == parseInt(resposta))[0];
            console.log('Mesa: ' + mesa.numero);
            console.log('Pedidos: ');
            mesa.pedidos.forEach(item => console.log(item.nome + ' - ' + item.valor));
            if (funcao == 'Adicionar') {
                adicionarItem();
            } else if (funcao == 'Fechar') {
                fecharConta();
            } else {
                mostrarMenuInicial();
            }
        } else {
            console.log('A mesa ' + resposta + ' que você digitou não existe. Digite uma mesa entre 1 e ' + mesas.length);
            selecionarMesa();
        }
    })
}

let adicionarItem = function() {
    rl.question('Selecione um item para adicionar: ', function(resposta) {
        if (resposta > 0 && resposta <= cardapio.length) {
            pedido = cardapio.filter(item => item.numero == parseInt(resposta))[0];
            mesa.pedidos.push(pedido);
            rl.question('Gostaria de adicionar mais um item? S/N ', function(resp) {
                if (resp == 'S' || resp == 's') {
                    adicionarItem();
                } else {
                    mostrarMenuInicial();
                }
            });
        } else {
            console.log('O item ' + resposta + ' que você digitou não existe. Digite um item entre 1 e ' + cardapio.length);
        }
    });
}

let fecharConta = function() {
    let valor = 0;
    mesa.pedidos.forEach(item => valor = valor + item.valor);
    console.log('Valor: ' + valor.toFixed(2));
    mesa.pedidos = [];
    mostrarMenuInicial();
}

let adicionarItemCardapio = function() {
    let itemCardapio = {
        numero: 0,
        nome: '',
        valor: 0
    };
    itemCardapio.numero = cardapio.length + 1;
    rl.question('Nome: ', function(resposta) {
        itemCardapio.nome = resposta;
        rl.question('Valor: ', function(resp) {
            itemCardapio.valor = parseFloat(resp);
            cardapio.push(itemCardapio);
            mostrarMenuInicial();
        });
    });
}


let mostrarMenuInicial = function() {
    console.log('Opções: ');
    console.log('1 - Ver cardápio');
    console.log('2 - Ver mesa');
    console.log('3 - Adicionar item');
    console.log('4 - Fechar conta');
    console.log('5 - Adicionar item ao cardápio');
    console.log('0 - Finalizar');
    rl.question('O que deseja fazer? ', function(resposta) {
        switch (resposta) {
            case '1':
                mostrarCardapio();
                mostrarMenuInicial();
                break;
            case '2':
                selecionarMesa();
                break;
            case '3':
                selecionarMesa('Adicionar');
                break;
            case '4':
                selecionarMesa('Fechar');
                break;
            case '5':
                adicionarItemCardapio();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('A opção que você digitou é inválida. Digite uma opção válida');
                mostrarMenuInicial();
        }
    })
}

popularMesas(10);
popularCardapio();
mostrarMenuInicial();

