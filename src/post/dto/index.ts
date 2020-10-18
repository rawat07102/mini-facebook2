import {UserDTO} from "../../user/dto"
import {PostDoc} from "../service/post.service"

export class PostDTO {
	public id: string
	public username: UserDTO["username"]
	public body: string
	public createdAt: string
	public likeCount: number
	public commentCount: number

	constructor(id: string, data: PostDoc) {
		const {username, body, createdAt, commentCount, likeCount} = data
		this.id = id
		this.username = username
		this.body = body
		this.createdAt = createdAt || new Date().toISOString()
		this.commentCount = commentCount || 0
		this.likeCount = likeCount || 0
	}
}
