import {db} from "../../firebase"
import {BadRequestException} from "../../http/exception/BadRequestException"
import {PostDTO} from "../dto"

export interface PostDoc {
	body: PostDTO["body"]
	username: PostDTO["username"]
	createdAt?: PostDTO["createdAt"]
	likeCount?: PostDTO["likeCount"]
	commentCount?: PostDTO["commentCount"]
}

export class PostService {
	private postDB = db.collection(
		"posts"
	) as firebase.firestore.CollectionReference<PostDoc>

	constructor() {}

	async getPosts(limit = 10) {
		const postsSnapshot = await this.postDB.limit(limit).get()
		const posts: PostDTO[] = []
		postsSnapshot.docs.forEach((doc) => {
			posts.push(new PostDTO(doc.id, doc.data()))
		})
		return posts
	}

	async getPost(postId: string) {
		const {data, id, exists} = await this.postDB.doc(postId).get()
		if (!exists) {
			throw new BadRequestException(
				`post with ${postId} does not exist.`,
				`/post/${postId}`
			)
		}
		const post = new PostDTO(id, data()!)
		return post
	}

	async addPost(body: string, username: string) {
		// todo: validation for username and body
		const {id} = await this.postDB.add({body, username})
		return id
	}
}
