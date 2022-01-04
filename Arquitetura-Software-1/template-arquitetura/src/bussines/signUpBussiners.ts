import { insertUser } from "../data/insertUser"
import {selectUserByEmail} from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare, hash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"


export const signUpBussiners = async (user: any): Promise<string> => {
   
    
    if (
        !user.name ||
        !user.nickname ||
        !user.email ||
        !user.password ||
        !user.role
     ) {
        throw new Error('Preencha os campos "name","nickname", "email" e "password"')
     }

     const id: string = generateId()

     const cypherPassword = await hash(user.password);

     await insertUser({
        id,
        name: user.name,
        nickname: user.nickname,
        email:user.email,
        password: cypherPassword,
        role: user.role
     })

     const token: string = generateToken({
        id,
        role: user.role
     })

     return token

}