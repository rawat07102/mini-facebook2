import {BadRequestException} from "../../src/http/exception/BadRequestException"
import data from "../data.stub"

export class UserStub {
	private data = data

	constructor() {}

	async getUser(username: string) {
		const user = this.data.users.filter(
			(user) => user.username === username
		)[0]
		if (!user) {
			throw new BadRequestException(
				`user with username ${username} does not exist.`,
				`/user/${username}`
			)
		}
		return user
	}
}
