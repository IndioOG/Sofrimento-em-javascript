// tipos de variaveis que PODEM MUDAR DE VALOR
// var utilizada escopo global
// var

// let utilizada escopo local
// let

// váriavel que NÂO PODE MUDAR DE VALOR
// const

// tipos de dado:
// Number -> tipo para números
// String -> Textos, sempre entre 'texto' ou "texto"
// Boolean -> true ou false

// declaração de variaveis:
// const meuNome = 'Gabriel';
// alert(meuNome)

// variavel do tipo numero:
// let minhaIdade = 17;
// alert(minhaIdade)

// let nomeDele = prompt('Digite seu nome')
// alert(nomeDele)

// variavel do tipo Boolean/verdadeiro ou falso
// let fumante = false;
// alert(fumante)

// reatribuição de valores (let -> valor variavel):
// fumante = true;
// alert(fumante)

// 1 -> declare uma let com o texto "ola mundo" chamada "mensagemInicial"
// 2 -> declare uma variavel que não muda de valor chamada "dtNasc" que receberá a sua data de nascimento em forma de texto.

// 1 let mensagemInicial = 'ola mundo';
// 2 const dtNasc = "08/12/2008";

// OPERAÇÕES COM VARIAVEIS - PT.2
// const primeiraIdade = 8;
// const segundaIdade = 2;

// const somaDasIdades = primeiraIdade + segundaIdade;
// alert(somaDasIdades);

// const subtracaoDasIdades = primeiraIdade - segundaIdade;
// alert(subtracaoDasIdades)

// const multiplicacaoDasIdades = primeiraIdade * segundaIdade;
// alert(multiplicacaoDasIdades);

// const divisaoDasIdades = primeiraIdade / segundaIdade;
// alert(divisaoDasIdades)

// operações com string

// const profLeo = 'Leonardo';
// const profMoises = 'Moises';
// o simbolo de "+" quando aplicado a texto, realiza a concatenação dos valores.
// const mensagemFinal = 'Ola ' + profLeo + ' e ' + profMoises + ' como vocês estão?';
// alert(mensagemFinal);

// operação com Boolean
// == -> comparação
// alert(2 == 2)
// != -> diferença
// alert(2 != 2);

// === -> comparação de valores e TIPO (ESTRITAMENTE IGUAL);
// alert (2 === '2'); //false
// alert (2 === 2); //true
// alert ('2' === '2'); //true

// OPERAÇÕES MATEMÁTICAS COM VARIÁVEIS - PT.3

// const resultadoOperacao = 5+2*1+6/2;
// alert(resultadoOperacao)

// const resultadoOperacaoDois = ((5 + 2) * (1 + 6) / 2)
// alert (resultadoOperacaoDois)

// ESTRUTURA CONDICIONAL - PT .4
// IF - se
// if ('leo' != 'moises') {

//     if(2 != 2){
//         alert('leo e moises diferentes e 2 igual a 2')
//     }
//     alert('sao diferentes')
// }

// if (5 === '5') {
//     if (2 == 2) {
//         alert('todos iguais, dougras!')
//     }
//     alert('os cinco são iguais')

// }]


// if ('leao' == 'leao') {
//     if (42 == '42') {
//         alert('leao e 42 iguais')
//     }
//     alert ('os leoes sao iguais')
// }

// && -> "e" condições todas serem satisfeitas
// || -> "ou" qualquer uma das condições a ser satisfeita

// if (2 === 2 && 2 === '2') {
//     alert('entrei no if do E!')
// }

// if (2 === 2 || 2 === '2') {
//     alert ('entrei no if do OU!')
// }

// if ((2 === 2 && 2 === '2' || 5 == 5) || 2 === 2) {
//     alert('entrei no 3 condicoes')
// }

//ESTRUTURA CONDICIONAL - PT.4 (if else)

// if (2 === 2 && 2 === '2') {
//     alert('entrei no 3 condicoes')
// }
// else {
//     alert('entrei no else')
// }

// ESTRUTURA CONDICIONAL - Pt.5 (if else if)

// if (2 === 2 && === '2') {
//     alert('entrei no if do E!')
// }
// else if (5 === '5') {
//     alert('entrei no else if!')
// }
// else {
//     alert('nao entrei em nd')
// }

//ESTRUTURA CONDICIONAL - PT.6 (switch-case)

// const minhaIdade = 28;
// switch (minhaIdade) {
//     case 10:
//         alert('tem, 10 anos');
//         break;
//     case 11:
//         alert('tem, 11 anos');
//         break;
//     case 28:
//         alert('tem, 28 anos');
//         break;
//     default:
//         alert('idade nao encontrada');
//         break;
// }


// const number3 = 3
// switch(number3) {
//     case 1:
//         alert('dougras');
//         break;
//     case 2:
//         alert('dougras dougras');
//         break;
//     case 3:
//         alert('dougras dougras dougras');
//         break;
//     case 4:
//         alert('dougras dougras dougras dougras');
//         break;
//     case 5:
//         alert('dougras dougras dougras dougras dougras');
//         break;
// }


//LOOP DE REPETIÇÃO - PT.6 (for)

// for (let indice = 0; indice < 5; indice = indice + 1) {
//     console.log(indice*indice)
// }


// for (let tabuada = 0; tabuada <= 10; tabuada++) {
//     console.log(tabuada*7)
// }

//todos os pares de 0 a 100

// for (let tabuada = 0; tabuada <= 100; tabuada+=2) {
//      console.log(tabuada)
// }


// for (let tabuada = 0; tabuada <= 100; tabuada++) {
//      if (tabuada % 2 == 0) {
//         console.log(tabuada)
//      }
// }

let fatorial = 5;
let resultado = 1;
for (let  indice = 1 ; indice <= fatorial; indice++) {
    resultado = resultado*indice;
    console.log(resultado);
}