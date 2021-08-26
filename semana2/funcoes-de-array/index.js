// Ecercício de interpletação de código
//1
/* const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" }
        ]
        
        const novoArrayA = usuarios.map((item, index, array) => {
           console.log(item, index, array)
        })
 */
        // copiou tudo da outra arrya. vai ser impresso = nome: "Amanda Rangel", apelido: "Mandi",nome: "Laís Petra", apelido: "Laura" nome: "Letícia Chijo", apelido: "Chijo".
        
// 2 

/* const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayB = usuarios.map((item, index, array) => {
           return item.nome
        })
        
        console.log(novoArrayB)
 */
        // Vai imprimir os nomes que está na arrya

//3
/* 
const usuarios = [
          { nome: "Amanda Rangel", apelido: "Mandi" },
          { nome: "Laís Petra", apelido: "Laura" },
          { nome: "Letícia Chijo", apelido: "Chijo" },
        ]
        
        const novoArrayC = usuarios.filter((item, index, array) => {
           return item.apelido !== "Chijo"
        })
        
        console.log(novoArrayC) */

// vai imprimir todos os apelidos que sçao diferente de "chijo"

// exercício de escrita de código 

//1

const pets = [
          { nome: "Lupin", raca: "Salsicha"},
          { nome: "Polly", raca: "Lhasa Apso"},
          { nome: "Madame", raca: "Poodle"},
          { nome: "Quentinho", raca: "Salsicha"},
          { nome: "Fluffy", raca: "Poodle"},
          { nome: "Caramelo", raca: "Vira-lata"},
       ] 

 const novoDosDoguinhos = pets.map((item, index) => {
          return item.nome 

})
 console.log(novoDosDoguinhos) 


 //2
 
const novaArryaDeSalsicha = pets.filter((item, index, array) =>{
          return item.tipo ==="Salsicha"
})

