import {selectUserByEmail} from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { login, user } from '../types/user'

export const loginBussiners = async (login: login): Promise<string> => {
  
      

      if (!login.email || !login.password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const user: user = await selectUserByEmail(login.email)

      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const passwordIsCorrect: boolean = await compare(login.password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.id,
         role: user.role
      })
      

      return token
}