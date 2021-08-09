// 1.
//
//let a = 10 //Atribuiu valores para variavel a e b
//let b = 10

//console.log(b) // apenas ixibir o valor da variavel b 

//b = 5
//console.log(a, b) // vai ixibir o valor a = 10 b = 10 5


// 2.

//let a = 10
//let b = 20
//c = a
//b = c
//a = b

//console.log(a, b, c) // vai ixibir c = 10, 20 = c, 10 = 20 

// 3
//
//let t = prompt("Quanto você recebe por dia?") // let salarioPorDia = prompt("Quanto você recebe por dia?") 
//lert(`Voce recebe ${t/p} por hora`) //alert(`Voce recebe ${salarioPorDia/horariosPorDia} por hora`) 

let nome 
let idade 

console.log (typeof nome)
console.log (typeof idade) // Reflita: Isso aconteceu porque o typeof vai ver o tipo daquela variável, já que não existir nenhum valor o resultado é undefined

let nomes = prompt ("Qual é seu nome?")
let idades = prompt ("Qual é sua idade?")

console.log(nomes)
console.log(idades)
console.log(typeof nomes)
console.log(typeof idades)
console.log ("Olá, me chamo" , nomes,"tenho", idades, "anos")

const maiorIdade = prompt(" Você é maior de idade?") 
const aceitaOsTermos = prompt (" Aceita os termos das politicas")
const avanca = prompt(" Deseja avança?")

console.log (maiorIdade)
console.log (aceitaOsTermos)
console.log (avanca)

let a = 10
let b = 25
a = b
b = a



console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b )