// import { PostDataBase } from "../data/PostDataBase";
import { Post } from "../model/Post";
import { PostRepository } from "./PostRepositori";


export class PostBussiness {


    private postData: PostRepository

    constructor(
        postRepository: PostRepository
    ){
        this.postData = postRepository
    }

    getPostById = async (
        id: string
    ): Promise<Post | undefined> => {
        
        const post = this.postData.getPostById(id)

        return post
    }
}