// //console.log(gaveta)
// //Console.log() é uma função do JS que exibe uma mensagem no console do navegador. Entrada-Processamento-Saída

// //--------VAR
// //var Ela não é mais tão utilizada.

// //exemplo, MOSTRAR ESSE EXEMPLO
// var mensagem = "Olá turma";
    
// console.log(mensagem);

// //var é o tipo de variável
// //gaveta é o nome da variável 
// //"meias" é o valor que essa variável ta recebendo

// var gaveta = "meias";

// //----------LET
// //let  é o tipo de variável que é MAIS utilizada. Consigo reutilizar.


// //let é o tipo da variável
// //nome é o nome dessa variável
// //Juliana Silva é o valor que essa variável está guardando

// let nome = "Juliana Silva"
// // console.log(nome)

// let cor = "amarelo"
// // console.log(cor)

// cor = "marrom"
// console.log(cor)


// //const é uma variável constante, ela não muda. 

// const idade = 20 //sem "" entende que é um valor numérico

// console.log(idade)

// //  idade = 21
// //  console.log(idade)


// // const idade = "20 anos"  "quer dizer que é uma string, um valor textual"

// cor = "azul"
// console.log(cor)

// nome = "Adriana Lima"
// console.log(nome)

// //Tipos de erros ou mensagens:
// //type null = tipo de dado nulo , inexistente. Armazena um valor vazio. 
// let x = null 
// console.log(x)

// //type undefined = tipo de dado que ainda não foi definido

// let y;
// console.log(y)


// //type NaN = não é um dado numérico 

// let num = 5;
// let msg = "Hello Word";
// let resp = num/msg; 

// console.log(resp)


// //aula dia 24.11

// //Nomes de variáveis, elas NÃO PODEM começar com números e símbolos, exceto: $ e _ 

// // Posso chamar strings (valor textual), com " " aspas duplas, ' ' aspas simples ou ``crase.

// let pietra = `tenho 20 anos`; 
// let _pietra = "tenho 21 anos"; 
// let $pietra = 'tenho 19 anos'; 
// let $nome = "Fabrícia"
// let fabricia = "Tenho 29 anos"
// let bio = "biografia de fulana"
// let batata = "chips"

// console.log(pietra)
// console.log(_pietra)
// console.log($pietra)
// console.log(bio)
// console.log(batata)

// batata= "batata frita"
// console.log(batata)


// //templateString - forma mais "elegante" de escrever string


// //  `${}` o templateString SEMPRE vai ser usado com crase ``SEMPRE!!

// //ex: 1-guardando informaçãoes dentro da variável alunas*
// let aluna1 = "Joy"
// let aluna2 = "Evelyn"
// let alunas = `Essas são as alunas do vnw:${aluna1} e ${aluna2} `

// console.log(alunas)

// //ex: 2 - mostrando as informações no console.log
//  let _nome = "Rihanna"
//  let sobreNome = 'Silva'
//  let $idade = 22 
//  let sobre = `${_nome} ${sobreNome} ${$idade}` //essa variável está guardando as três variáveis, _nome, sobreNome e $idade

//  console.log(sobre) //Esse console está mostrando somente a variável let sobre


// //Esse console está mostrando um texto criado, juntando com as variáveis existentes. Lembrando que ela não está salvando nada. 
// console.log(`Ola, me chamo ${_nome}. Tenho ${$idade} anos de idade e meu sobrenome é ${sobreNome}`)

// //Nomes de variáveis não podem começar com NÚMEROS e SÍMBOLOS, exceto $ e _
// let legumes = "cenoura"
// let _legumes = "batata"
// let $legumes = "abóbora"
// let _batata = true
// let chuchu = false

// //Saber o tipo da variável
// console.log (typeof legumes)
// console.log (typeof $idade)
// console.log (typeof _batata)
// console.log (typeof chuchu)


// //Operadores de comparação


// // = atribuição do tipo / recebe
let numero = 5
console.log(numero)


// // == verificação de valor

// == verificação de valor (Verifica se o 2 é o mesmo)
console.log(numero == 2)// retournou true pq o valor 2 é 2. 
console.log(numero == 4) //retornou false pq o valor NÃO é 2.
console.log(numero == 5) //O valor 5 é o mesmo, por isso deu true.


// // === verificação de valor e tipo  (estritamente igual)
console.log(numero === '5') //entende que o valor ta recebendo 5, mas que não é um numeral.  Por isso deu false. 

let nome = "Evelyn" 
console.log(typeof nome) //saber qual o tipo da variável 

console.log(nome === "Evelyn")  //true pq o tipo é string e o valor é "Evelyn"


// != verificar se o valor é DIFERENTE
console.log(numero != 5) //False pq é igual e não diferente
console.log(numero != 4) //True pq 4 é diferente de 5. 
console.log (nome != "joy") //True pq "Evelyn" é diferente de "Joy"
console.log(nome != "Evelyn") //False pq "Evelyn" é igual a "Evelyn"

// !== verifica se o tipo e valor são DIFERENTES
console.log (nome !== "Evelyn") //É falsa essa informação, pq "Evelyn" é igual a "Evelyn"

console.log(numero !== "batata") //true pq tanto o tipo quanto o valor são diferentes

console.log (numero != 10)  //true, pq o valor é diferente do valor 5

// 5 é diferente de 5? 
console.log (numero !== 5)  //é falsa essa informação. Pq 5 é igual a 5.
console.log(numero === 5) //true pq o tipo e o valor são estritamente iguais
