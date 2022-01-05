import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/idGenerator"

console.log("Helloo from JS !! ")

const id = new IdGenerator().generate()

const hashPass = new HashManager().createHash("alice123")

const token = new Authenticator().generateToken({ id: "id fake" })

console.log({ id, hashPass, token })