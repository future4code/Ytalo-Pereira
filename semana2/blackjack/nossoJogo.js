/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas-Vindos ao Jogo de Blackjack")

    //const confirmaçãoDePartida = prompt("Quer iniciar uma nova jogada?")
     const jogadores = confirm("Quer inicar uma nova partida?")

     if(jogadores === true){
        console.log("Bom jogo")
     }else{
        console.log("Fim de Jogo")
     }
    
    if(jogadores){     
      
      let jogador1Cartas = comprarCarta()
      let jogador1Cartass = comprarCarta()
      let jogador2Carta = comprarCarta ()
      let jogador2Cartaa = comprarCarta()

      const Jogador1 = jogador1Cartas.valor + jogador1Cartass.valor

      console.log(`Jogador 1 - carta:${jogador1Cartas.texto} ${jogador1Cartass.texto} pontos - ${Jogador1}`)

      const jogador2 = jogador2Carta.valor + jogador2Cartaa.valor 

      console.log(`Jogador 2 - carta: ${jogador2Carta.texto} ${jogador2Cartaa.texto}  pontos - ${jogador2}`)
    
    if(Jogador1 > jogador2){
       console.log("Você ganhou")
    }else if ( Jogador1 < jogador2){
       console.log("Você é o ganhador PC")
    }else if (Jogador1 === jogador2){
       console.log("Os dois garanham!!! ")
    }else{
       console.log("Fimm!!")
    }
    }
