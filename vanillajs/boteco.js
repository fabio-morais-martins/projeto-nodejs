let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mesas = [];
let cardapio = [];
let mesa = null;

let popularMesas = function() {
    mesas.push({numero: 1, pedidos: []});
    mesas.push({numero: 2, pedidos: []});
    mesas.push({numero: 3, pedidos: []});
    mesas.push({numero: 4, pedidos: []});
    mesas.push({numero: 5, pedidos: []});
    mesas.push({numero: 6, pedidos: []});
    mesas.push({numero: 7, pedidos: []});
    mesas.push({numero: 8, pedidos: []});
    mesas.push({numero: 9, pedidos: []});
    mesas.push({numero: 10, pedidos: []});
}

let popularCardapio = function() {
    cardapio.push({numero: 1, nome: 'Hamburger', valor: 12.99});
    cardapio.push({numero: 2, nome: 'Cheeseburger', valor: 13.99});
    cardapio.push({numero: 3, nome: 'Refrigerante', valor: 5.50});
    cardapio.push({numero: 4, nome: 'Porção de fritas pequena', valor: 6.00});
    cardapio.push({numero: 5, nome: 'Milkshake', valor: 8.99});
    cardapio.push({numero: 6, nome: 'Cerveja', valor: 6.50});
    cardapio.push({numero: 7, nome: 'Porção de aipim', valor: 6.00});
    cardapio.push({numero: 8, nome: 'Tábua de carne', valor: 40.00});
}

let mostrarCardapio = function() {
    console.log('Cardápio: ');
    cardapio.forEach(item => console.log(item.numero + ' - Item: ' + item.nome + ' - Preço: ' + item.valor));
    console.log('');
}

let adicionarItemCardapio = function() {
    rl.question('Nome: ', function(answer) {
        nome = answer;
        numero = cardapio.length + 1;
        rl.question('Valor: ', function(ans) {
            valor = parseFloat(ans);
            cardapio.push({'numero': numero, 'nome': nome, 'valor': valor});
            mostrarMenuInicial();
        });
    });
}

let mostrarMesa = function(numero) {
    mesa = mesas.filter(m => m.numero == numero)[0];
    console.log('Mesa ' + mesa.numero);
    console.log('Pedidos: ');
    mesa.pedidos.forEach(item => console.log('Item: ' + item.nome + ' - Preço: ' + item.valor));
    console.log('');
}

let selecionarMesa = function(funcao) {
    let numeroMesa = 0;
    rl.question('Selecione a mesa: ', function(answer) {
        numeroMesa = answer;        
        if (numeroMesa > 0 && numeroMesa <= mesas.length) {
            mesa = mesas.filter(m => m.numero == numeroMesa)[0];
            mostrarMesa(mesa.numero);
            if (funcao == 'Adicionar') {
                adicionarPedido();
            } else if (funcao == 'Fechar') {
                fecharConta();
            } else {
                mostrarMenuInicial();  
            }
        } else {
            console.log('Número de mesa inválido. Favor selecionar um número válido.');
            selecionarMesa();
        }
        
    });
    
}

let adicionarPedido = function() {
    mostrarCardapio();
    rl.question('Selecione um item: ', function(answer) {
        numeroItem = answer;        
        if (numeroItem > 0 && numeroItem <= cardapio.length) {
            mesa.pedidos.push(cardapio.filter(item => item.numero == numeroItem)[0]);
            mostrarMesa(mesa.numero);
            rl.question('Gostaria de adicionar mais um item? S/N: ', function(ans) {
                if (ans == 'S') {
                    adicionarPedido();
                } else {
                    mostrarMenuInicial();
                }
            })
        } else {
            console.log('Número de item inválido. Favor selecionar um número válido.');
            adicionarPedido();
        }
        
    });
}

let fecharConta = function() {
    let valor = 0;
    mesa.pedidos.forEach(item => valor = valor + item.valor);
    console.log('Valor a ser pago: ' + Math.round(valor * 100) / 100);
    console.log('Mesa ' + mesa.numero + ' fechada.');
    console.log('');
    mesa.pedidos = [];
    mostrarMenuInicial();
}

let mostrarMenuInicial = function() {
    console.log('Opções:');
    console.log('1 - Ver cardápio');
    console.log('2 - Ver mesa');
    console.log('3 - Adicionar item');
    console.log('4 - Fechar conta');
    console.log('5 - Adicionar item ao cardápio');
    console.log('0 - Finalizar');
    rl.question('O que deseja fazer? ', function(answer) {
        console.log('');
        switch (answer) {
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
                console.log('Opção selecionada ' + answer + ' é inválida. Favor selecionar uma opção válida.' );
                mostrarMenuInicial();
                break;
        }
            
    })
}

console.log('Bem vindo ao FoodHelper.');
popularMesas();
popularCardapio();
mostrarMenuInicial();
