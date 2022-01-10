import {isEven} from "./";


let result = isEven(2)

console.assert(result === true, `A função isEven(2) falhou para o numero 2 ${result}`)
console.assert(isEven(3) === false, `A função isEven(2) falhou para o numero 2 ${isEven(3)}`)