import { Request, Response } from 'express';
import { signUpBussiners } from '../bussines/signUpBussiners';


export const signUpControllers = async ( 
    req: Request,
    res: Response
) => {
    try {
      const { name, nickname, email, password, role } = req.body

      const token = await signUpBussiners( { name, nickname, email, password, role })

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error :any) {
      res.status(400).send(error.message)
   }
}