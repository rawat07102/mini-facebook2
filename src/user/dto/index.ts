import {PostDTO} from "../../post/dto"
import {UserDoc} from "../service/user.service"

export class UserDTO {
	public email: string
	public username: string
	public createdAt: string
	public friendReqs: FriendReq[]
	public friends: string[]
	public posts: PostDTO["id"][]

	constructor(username: string, data: () => UserDoc | undefined) {
		const {email, createdAt, friendReqs, friends, posts} = data()!
		this.username = username
		this.email = email
		this.createdAt = createdAt
		this.friendReqs = friendReqs
		this.friends = friends
		this.posts = posts
	}
}

class FriendReq {
	constructor(
		public id: string,
		public userId: string,
		public createdAt: string
	) {}
}
