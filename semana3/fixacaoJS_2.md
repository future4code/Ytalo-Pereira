//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

//Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.



function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  
valor1 = 1.3 
valor2 = 1
  
const macasCompradas = Number(prompt("Quantas Maças compradas"))
if(macasCompradas >= 12){
  console.log (valortotal = macasCompradas * valor2)
}else macasCompradas < 12 {
  console.log ( valortotal = macasCompradas * valor1)
}
 return valortotal


}