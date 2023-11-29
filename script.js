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


// // //templateString - forma mais "elegante" de escrever string


// // //  `${}` o templateString SEMPRE vai ser usado com crase ``SEMPRE!!

// // //ex: 1-guardando informaçãoes dentro da variável alunas*
// // let aluna1 = "Joy"
// // let aluna2 = "Evelyn"
// // let alunas = `Essas são as alunas do vnw:${aluna1} e ${aluna2} `

// // console.log(alunas)

// // //ex: 2 - mostrando as informações no console.log
// //  let _nome = "Rihanna"
// //  let sobreNome = 'Silva'
// //  let $idade = 22 
// //  let sobre = `${_nome} ${sobreNome} ${$idade}` //essa variável está guardando as três variáveis, _nome, sobreNome e $idade

// //  console.log(sobre) //Esse console está mostrando somente a variável let sobre


// // //Esse console está mostrando um texto criado, juntando com as variáveis existentes. Lembrando que ela não está salvando nada. 
// // console.log(`Ola, me chamo ${_nome}. Tenho ${$idade} anos de idade e meu sobrenome é ${sobreNome}`)

// // //Nomes de variáveis não podem começar com NÚMEROS e SÍMBOLOS, exceto $ e _
// // let legumes = "cenoura"
// // let _legumes = "batata"
// // let $legumes = "abóbora"
// // let _batata = true
// // let chuchu = false

// // //Saber o tipo da variável
// // console.log (typeof legumes)
// // console.log (typeof $idade)
// // console.log (typeof _batata)
// // console.log (typeof chuchu)


// // //Operadores de comparação


// // // = atribuição do tipo / recebe
// let numero = 5 //type number = tipo numérico
// console.log(numero)


// // // == verificação de valor

// // == verificação de valor (Verifica se o 2 é o mesmo)
// console.log(numero == 2)// retornou true pq o valor 2 é 2. 
// console.log(numero == 4) //retornou false pq o valor NÃO é 2.
// console.log(numero == 5) //O valor 5 é o mesmo, por isso deu true.


// // // === verificação de valor e tipo  (estritamente igual)
// console.log(numero === '5') //entende que o valor ta recebendo 5, mas que não é um numeral.  Por isso deu false. 

// let nome = "Evelyn" //type string = tipo textual
// console.log(typeof nome) //saber qual o tipo da variável 

// console.log(nome === "Evelyn")  //true pq o tipo é string e o valor é "Evelyn"

// console.log(nome === "Lima") //false, pq é uma string, porém, não tem o mesmo valor. 


// // != verificar se o valor é DIFERENTE
// console.log(numero != 5) //False pq é igual e não diferente
// console.log(numero != 4) //True pq 4 é diferente de 5. 
// console.log (nome != "joy") //True pq "Evelyn" é diferente de "Joy"
// console.log(nome != "Evelyn") //False pq "Evelyn" é igual a "Evelyn"

// console.log (numero != 10)  //true, pq o valor é diferente do valor 5

// // !== verifica se o tipo e valor são DIFERENTES
// console.log (nome !== "Evelyn") //É falsa essa informação, pq "Evelyn" é igual a "Evelyn"

// console.log(numero !== "batata") //true pq tanto o tipo quanto o valor são diferentes

// // 5 é diferente de 5? 
// console.log (numero !== 5)  //é falsa essa informação. Pq 5 é igual a 5.
// console.log(numero === 5) //true pq o tipo e o valor são estritamente iguais


// let testeDoDiferente = "um" //string 
// console.log(testeDoDiferente !== "um") //false, pq o valor e o tipo são iguais. 

// let teste = 44
// console.log(teste !== "cachorro") //true, é verdade essa informação, pq 44 é um tipo numérico que é diferente de "cachorro" que é um tipo textual. E o valor 44 também é diferente do valor "cachorro"

//Lembrando que nomes de variáveis não podem começar com números e símbolos, exceto _ e $
// let $testeDoDiferente = "um" //string 
// let _testeDoDiferente = "um" //string 


//----- CONDICIONAIS

//IF quer dizer (SE), se a condição for verdadeira, execute isso.  Se a condição for falsa, ela não vai executar. 

//sintáxe do IF 

// if(condição){
//     retorne a ação da condição
// }


//guardando dentro de uma variável um valor boolean (verdadeiro ou falso )

//ex 1 com boolean

let idadeMaiorQueDezoito = true //Nessa gavetinha guardei o valor true

if (idadeMaiorQueDezoito) {
    console.log("Sou maior de idade") //executou pq a afirmação é verdadeira/true
}

//ex 2 com boolean
let exComValorFalse = false //Nessa gavetinha guardei o valor false

if (exComValorFalse) {
    console.log("Não sou uma afirmação verdadeira, por isso, não fui executada")
}

//ex 3 

let kilometragem = 300 //number
//se a kilometragem for MENOR OU IGUAL <= 500 retorna pra mim uma mensagem

if (kilometragem <= 500) {
    console.log("Esse carro é semi novo")
}

if (kilometragem == 400) {
    console.log("Esse carro é semi novo")
}


//else = senão,caso a  mensagem for false, vai cair no senão.

let lancheDoDia = "misto quente"
if (lancheDoDia != "misto quente") {
    console.log("Traga 3 para mim, por favor!! =D ")
} else { //senão, se essa mensagem for falsa, mostre essa aqui.
    console.log("Estou muito triste :( ")
}


//ex 2 com if e else 

let numeroDaSorte = "3" //string/textual

//sintaxe do if e else
if (numeroDaSorte === 3) {
    console.log("Vou ganhar na megasena!!")
}
else {
    console.log("Coitada de mim, deixa pra próxima")
}

//ex 3 com if e else

let idade = 33

if (idade > 35) {
    console.log("Você é adulto")
} else {
    console.log("Estamos refletindo")
}

//Else if = Vamos utilizar quando se tem mais de uma opção

let dia = 6

if (dia === 0) {
    console.log("Domingo")
} else if (dia === 1) {
    console.log("Segunda")
} else if (dia === 2) {
    console.log("Terça")
} else if (dia === 3) {
    console.log("Quarta")
} else if (dia === 6) {
    console.log("Não é feriado!")
} else {
    console.log("Não é nenhuma das opções anteriores")
}


//ex 2 else if 

let tamanhoRoupa = "g" //gavetinha chamada tamanhoRoupa e está guardando o valor "g"

//if, se a resposta for verdadeira, ou seja, se == G restorna no if. 
if (tamanhoRoupa == "p") {
    console.log("O tamanho é P")
} else if (tamanhoRoupa == "m") {
    console.log("O tamanho é M")
} else if (tamanhoRoupa == "g") {
    console.log("O tamanho é G")
} else if (tamanhoRoupa == "gg") {
    console.log("O tamanho é GG")
} else { //Se nenhuma das respostas anteriores forem verdadeiras, cai no else (senão)
    console.log("Produto indisponível")
}


//Ex 3 else if 

let cor = "verde"

if (cor == "vermelho") {
    console.log("cor exata")
} else if (cor == "azul") {
    console.log("Uhull, cor azul disponível")
} else if (cor == "amarelo") {
    console.log("Uhull, cor amarela disponível")
}
else {
    console.log("Cor indisponível")
}