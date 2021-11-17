type Inform = {
    name: string,
    age: number,
    color:EscolherCor
}

enum EscolherCor {
    ROSE  = "Rose",
    AZUL = "Azul",
    PRETO = "Preto",
    VERMELHO = "Vermelho"
}

const minhaString: string = "Ytalo Cruz"

const meuNumero: number = 19

const person: Inform = {
    name: "Ytalo Cruz",
    age: 19,
    color: EscolherCor.AZUL
}

const person1: Inform = {
    name: "Cristina Santos",
    age: 15,
    color: EscolherCor.VERMELHO
}

const person2: Inform = {
    name: "Erik Martins",
    age: 18,
    color: EscolherCor.PRETO
}

const person3: Inform = {
    name: "Rodrigo Silva",
    age: 21,
    color: EscolherCor.ROSE
}
