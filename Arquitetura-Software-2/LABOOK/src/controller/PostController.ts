import { Request, Response } from "express";
import { PostBussiness } from "../business/PostBusiness";

export class PostController {

    getPostById = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { id } = req.params

            const post = new PostBussiness().getPostById(id)
            res.send(post)

        } catch (error) {
            console.log(error)
            res.status(500).send("Algo deu errado")
        }
    }

    createPost = () => {

    }
}