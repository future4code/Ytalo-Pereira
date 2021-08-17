// exercício de interpletação de texto 

//const respostaDoUsuario = prompt("Digite o número que você quer testar") 
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) { 
  //console.log("Passou no teste.")
//} e/lse {
  //console.log("Não passou no teste.")
//}

//a) Explique o que o código faz. Qual o teste que ele realiza? 

// Ele faz um teste de um determinado número. Ele testa se o número é true ou false e se for true a responda é (passou no teste ) com números pares  ou se não, (você não póssou no teste,) com números impar 

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
 // para todos os números pares 

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// para todos os números impar 

//let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {
  //case "Laranja":
    //preco = 3.5
    //break;
  //case "Maçã":
    //preco = 2.25
    //break;
  //case "Uva":
    //preco = 0.30
    //break;
  //case "Pêra":
    //preco = 5.5
    //break// BREAK PARA O ITEM c.
  //default:
    //preco = 5
    //break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?

// Para inumerar os preços das frutas 

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?  

// Seria O preço da fruta é maça R$2.25 

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

// erro 

//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
  //console.log("Esse número passou no teste")
	//let mensagem = ("Essa mensagem é secreta!!!")
  
//}

//console.log(mensagem)

//a) O que a primeira linha está fazendo?

// Está perdindo para o usuario inserir um valor.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//10 = seria false. -10 = seria true

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//não sei 

//exercício de escrita de código 

//1

//const previcaoParadirigir = Number(prompt("qual sua idade"))

//if(previcaoParadirigir >= 18 ){
  //console.log("Você pide dirigir")
//}else {
  //console.log("Você não pode dirigir")
//}

//2

//const seuTurno = prompt("Qual seu turno, M - Matutino, V - Vespertino ou N - Noturno")

//if(seuTurno === "M" ){
  //console.log("Bom dia")
//}else if(seuTurno === "V") {
  //console.log ("Boa tarde")
//}else if (seuTurno ==="N"){
  //console.log("Boa noite")
//}else{
  //console.log ("Opção inválida!")
//}

//3

//const turno= prompt("Qual seu turno, M - Matutino, V - Vespertino ou N - Noturno")

//let turnos
//switch (turnos){
  //case "M" :
    //console.log("Bom dia")
    //break
    //case "V":
      //console.log("Boa tarde")
      //break
    //case "N":
      //console.log("Boa noite")
      //break
    //default:
      //console.log("Opção inválida")
      //break
//}
  
//4

//const generoDoFilme = prompt("Qual o gênero do filme")
//const precoDoFilme = Number(prompt("Qual o valor do ingresso"))


//if (generoDoFilme &&  "fantasia" && precoDoFilme <= 15){
  //console.log("Bom filme")
//}else{
  //console.log("Escolha outro filme")
//}