import {db} from "../../firebase"
import {BadRequestException} from "../../http/exception/BadRequestException"
import {UserDTO} from "../dto"

export interface UserDoc {
	email: UserDTO["email"]
	posts: UserDTO["posts"]
	friends: UserDTO["friends"]
	createdAt: UserDTO["createdAt"]
	friendReqs: UserDTO["friendReqs"]
}

export class UserService {
	private userDB = db.collection(
		"users"
	) as firebase.firestore.CollectionReference<UserDoc>

	constructor() {}

	async getUser(username: string) {
		const {data, id, exists} = await this.userDB.doc(username).get()

		if (!exists) {
			throw new BadRequestException(
				`user with given username ${username} does not exist.`,
				`/user/${username}`
			)
		}

		const user = new UserDTO(id, data)
		return user
	}
}
