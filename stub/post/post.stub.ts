import {BadRequestException} from "../../src/http/exception/BadRequestException"
import {PostDTO} from "../../src/post/dto"
import data from "../data.stub"

export class PostStub {
	constructor() {}

	async getPosts(limit: number = 3) {
		return data.posts.filter(({id}) => Number(id) <= limit)
	}

	async getPost(postId: string) {
		const post = data.posts[Number(postId) - 1]
		if (!post) {
			throw new BadRequestException(
				`post with id ${postId} does not exist.`,
				`/posts/${postId}`
			)
		}
		return post
	}

	async addPost(body: string, username: string) {
		const id = (data.posts.length + 1).toString()
		// todo: validation for username and body
		const newPost = new PostDTO(id, () => ({username, body}))
		data.posts.push(newPost)
		return id
	}
}
