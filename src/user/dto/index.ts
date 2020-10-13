import {PostDTO} from "../../posts/dto"

export class UserDTO {
	constructor(
		public id: string,
		public email: string,
		public username: string,
		public createdAt: string,
		public friendReqs: FriendReq[],
		public friends: string[],
		public posts: PostDTO["id"][]
	) {}
}

class FriendReq {
	constructor(
		public id: string,
		public userId: string,
		public createdAt: string
	) {}
}
