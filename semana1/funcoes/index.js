//1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10))//50
minhaFuncao(2) // err
minhaFuncao(10)//erro

//2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//  essa função captura o texto que o usuário criou, transforma esse texto em mainusculo e pesquisa uma palavra especifica trazendo true ou false. 

// no console o textinho Eu gosto de cenoura -> "eu gosto de cenoura" e true 
// no console o textinho CENOURA é bom pra vista -> cenoura é bom pŕa vista e true 
//no console o  textinho Cenouras crescem na terra -> cenouras cresce na terra e false 
 
//1
function informacoes (nome, idade,cidade,eEstudante){
    console.log("Olá, me chamo " ,nome, "tenho ", idade, "anos, moro em ",cidade, "me considero um estudante", eEstudante )
    
}
(informacoes("Ytalo", "19", "Manaus", "Estudante"))

//a

function informacoes (nome, idade,cidade,eEstudante){
          console.log("Olá, me chamo " ,nome, "tenho ", idade, "anos, moro em ",cidade, "me considero um estudante", eEstudante )
          
 }
const informacoesDois = prompt("Qual seu nome")
console.log(informacoes(informacoesDois))

//2
