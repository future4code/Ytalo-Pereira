import app from "./app"
import { CustomError } from "./CustomError"
import { BaseDatabase } from "./data/BaseDatabase"
import { Animal, Character, Dog, GENDER, Owl } from "./types"

app.get("/", (req, res) => {
    res.send("Hello")
})

// app.get("/character", getAllCharacters)
// app.post("/character", createCharacter)
// app.delete("/character/:id", deleteCharacter)


// console.log(new Date());

const pluto: Dog = new Dog("Pluto", 30)
const scooby: Dog = new Dog("Scooby Doo", 31)
const heawing: Owl =  new Owl("Heawing", 17, 20);

// console.log(Dog.nomeCientifico)
// console.log(Dog.nomeCientifico)


export function testDatabase(database:BaseDatabase){
    console.log(database.getHost())
}

// const canil: Dog []=[pluto, scooby, new Dog("Musley", 44),heawing ] // gera erro
// const zoo: Animal[] = [pluto, scooby, new Animal("Musley", 1)] // correto

