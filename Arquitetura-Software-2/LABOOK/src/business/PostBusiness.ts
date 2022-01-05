import { PostDataBase } from "../data/PostDataBase";
import { post } from "../model/Post";


export class PostBussiness {

    getPostById = async (
        id: string
    ): Promise<post | undefined> => {
        
        const post = new PostDataBase().getPostById(id)

        return post
    }
}