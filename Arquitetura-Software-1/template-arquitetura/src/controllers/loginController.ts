import { Request, Response } from "express"
import { User } from "../bussines/User-ComClasse/User"
import { loginBussines } from "../bussines/User-SemClasse/userBussines"

export const loginController = async (
   req: Request,
   res: Response
) => {
   try {
      const { email, password } = req.body

      // com função
      // const token = await loginBussines({ email, password })


      // com classe
      const loginBussines = new User()
      const token = await loginBussines.loginBussines({ email, password })

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}