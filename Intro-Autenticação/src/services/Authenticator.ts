import { authenticationData } from "../types";
import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken";
dotenv.config()

export class Authenticator {


    generateToken = (payload: authenticationData) => {
        const token = sign(
            { payload },
            process.env.JWT_SECRET
           
        )

        return token
    }

    getTokenData = (token: string) => {
        try {
            const tokenDate = verify(
                token,
                process.env.JWT_SECRET
            ) as JwtPayload

        } catch (error) {
            console.log(error)
            
        }
    }
}