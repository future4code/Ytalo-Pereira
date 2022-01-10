import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { FirestorePostDatabase } from "../data/FirestorePostDatabase";
import { PostDatabase } from "../data/PostDatabase";

export class PostController {
  private postBusiness: PostBusiness

  constructor(){
    this.postBusiness = new PostBusiness(new FirestorePostDatabase());
  }

  getPostById = async (
    req: Request,
    res: Response
  ) => {
    try {

      const { id } = req.params

      const post = await this.postBusiness.getPostById(id)

      res.send(post)

    } catch (error) {
      console.log(error)
      res.status(500).send("Algo deu errado")
    }
  }

  createPost = () => { }
}