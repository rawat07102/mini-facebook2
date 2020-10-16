export class UserDoesNotExistException {
	private createdAt: string
	public name = "UserDoesNotExist"
	public status: number

	constructor(
		public message: string,
		private path: string,
		status: number = 200
	) {
		this.createdAt = new Date().toISOString()
		this.status = status
	}

	toString() {
		return `${this.name} error by ${this.path} at ${this.createdAt}`
	}
}
