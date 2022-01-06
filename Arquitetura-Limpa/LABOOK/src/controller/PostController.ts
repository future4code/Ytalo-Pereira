import { Request, Response } from "express";
import { PostBussiness } from "../business/PostBusiness";
import { PostDataBase } from "../data/PostDataBase";

export class PostController {

    private postBussiness: PostBussiness

    constructor(){
        this.postBussiness = new PostBussiness(new PostDataBase())
    }

    getPostById = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { id } = req.params

            const post = this.postBussiness.getPostById(id)
            res.send(post)

        } catch (error) {
            console.log(error)
            res.status(500).send("Algo deu errado")
        }
    }

    createPost = () => {

    }
}