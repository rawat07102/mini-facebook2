export class PostDoesNotExistException {
	private createdAt: string
	public name = "PostDoesNotExist"
	public status: number

	constructor(
		public message: string,
		private path: string,
		status: number = 400
	) {
		this.createdAt = new Date().toISOString()
		this.status = status
	}

	toString() {
		return `${this.name} error by ${this.path} at ${this.createdAt}`
	}
}
