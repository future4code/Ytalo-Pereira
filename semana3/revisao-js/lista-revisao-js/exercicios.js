// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const arrayParametro = ["Azul","Amarelo","Vermelho"]

function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
        array.reverse()
        return array
  
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   numero = [36,12,56,7,3]
   array.sort(function(a,b){
             return a - b
   })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   const pares = array.filter(numero => numero % 2 ===0)
        return pares 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    //const pares = array.filter(numero => numero % 2 ===0)
         return retornaNumerosPares(array).map(n => n**2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const arrayEmOrdemDecrescente = retornaArrayInvertido(retornaArrayOrdenado(array))

    return arrayaEmOrdemDecrescente[0]


}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const [manor, maior ] = retornaObjetoEntreDoisNumeros([num1, num2])
    return {
        maiorNumero: maior,
        maiorDividivePorMenor: maior % menor === 0,
        diferenca: maior -menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const resultado []

   for (let i = 0; i < n; i++){
       resultado[i] = 2*1
   }
   return resultado 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB === ladoC) return "Equilátero"
    if (ladoA === ladoB || ladoA === ladoC || lado B === ladoC)return "Isóscelas"

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
  const indiceSegundoMenor = 1 
  const indiceSegundoMaior = array.length - 2

  return[
      arrayOrdenado[indiceSegundoMaior],
      arrayOrdenado[indiceSegundoMenor]
  ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha asssitir o filme${filme.nome}, de ${filme.ano}, dirigindo por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return{
      ...pessoa, nome:"ANÔNINO"
    }
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pesreturn){
     return pessoas.filter(validarPessoa)
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(pessoa =>!validarPessoa(pessoas))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 //saldoAtualizadoo = contas.map(contas)
   const somar = (num1, num2) => num1 + num2
   contas.forEach(contas => {
       const somaDosGastos = conta.compras.reduce(somar, 0)
       conta.saldoTotal -= somaDosGastos
       contas.compras =[]
   })
return contas 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
          const compararNomesDeConsulta = (a,b) => a.nome > b.nome ? 1 : -1
          return consultas.sort(compararNomesDeConsulta) 
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const gerarData = string => {

        const [dia, mes, ano] = string.split("/")
  
        return new Date(`${ano}-${mes}-${dia}`)
     }
  
     const compararDatasDeConsulta = (a, b) => {
        if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
           return 1
        } else {
           return -1
        }
     }
  
     return consultas.sort(compararDatasDeConsulta)
}