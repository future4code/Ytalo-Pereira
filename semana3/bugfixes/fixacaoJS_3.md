```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  
  const p1 = Number(prompt("NotaDaPrimeiraNota"))
  const p2  = Number(prompt("NotaDaSegundaNota"))
  const ex = Number(prompt("NotaDosExercicos"))
  
  let resultado = (p1 + p2 + ex ) / 2
  
  if(resultado >= 9 ){
    return ("O conceito A")
  }else if (resultado < 9 || resultado >= 7.5){
    return ("conceito B")
  }else if (resultado < 7.5 || resultado >= 6 ){
    return ("conceito B")
  }else (resultado < 6){
    return ("Conceito D")
  }
}`