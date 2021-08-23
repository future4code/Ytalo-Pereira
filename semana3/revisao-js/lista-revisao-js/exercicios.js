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
         
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pesreturn){

}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 //saldoAtualizadoo = contas.map(contas)
  return{...contas, saldoTotal: contas.saldoTotal - compras}


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
          return consultas.sort()
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}