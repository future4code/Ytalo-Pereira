import { post } from "../model/Post"
import { BaseDataBase } from "./BaseDataBase"

export class PostDataBase extends BaseDataBase {
    getPostById = async (id: string): Promise<post | undefined> => {

        const result = await this.connection("labook_posts").where({ id })

        return result[0]
    }
}