import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import { Character, Dog, GENDER, Owl } from "./types"

// app.get("/", (req, res) => {
//     res.send("Hello")
// })

// app.get("/character", getAllCharacters)
// app.post("/character", createCharacter)
// app.delete("/character/:id", deleteCharacter)


// console.log(new Date());

// const pluto: Dog = new Dog("Pluto, 30")
const heawing: Owl =  new Owl("Heawing", 17, 20);
// pluto.eat(1)