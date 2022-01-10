import { PostRepository } from "../business/PostRepository"
import { Post } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase implements PostRepository{
  getPostById = async (
    id: string
  ): Promise<Post | undefined> => {

    const result = await this.connection("labook_posts").where({ id })

    return result[0]
  }
}