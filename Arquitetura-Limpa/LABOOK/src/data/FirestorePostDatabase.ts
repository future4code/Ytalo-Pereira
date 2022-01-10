import { firestore, initializeApp } from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { PostRepository } from "../business/PostRepository";
import { Post } from "../model/Post";

initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://aula-clean.firebaseio.com'
});

export class FirestorePostDatabase implements PostRepository {
    async getPostById(id: string) : Promise<Post | undefined> {
        try {
            const result = await firestore()
            .collection('user_posts')
            .where('id', '==', id)
            .get()
            const postResult = result.docs[0] as any;

            if(!postResult){
                return undefined;
            }
            return new Post(
                postResult.id,
                postResult.userId,
                postResult.photo,
                postResult.description
            )
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}