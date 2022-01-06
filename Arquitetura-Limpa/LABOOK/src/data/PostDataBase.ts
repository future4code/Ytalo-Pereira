import { PostRepository } from "../business/PostRepositori"
import { Post } from "../model/Post"
import { BaseDataBase } from "./BaseDataBase"

export class PostDataBase extends BaseDataBase implements PostRepository {
    getPostById = async (id: string): Promise<Post | undefined> => {

        const result = await this.connection("labook_posts").where({ id })

        return result[0]
    }
}