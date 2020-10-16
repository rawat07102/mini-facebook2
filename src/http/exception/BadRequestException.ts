export class BadRequestException {
	public name = "BadRequest"
	public status = 400
	public message: string
	protected createdAt: string
	protected path: string

	constructor(message: string, path: string) {
		this.message = message || "Bad Request"
		this.createdAt = new Date().toISOString()
		this.path = path
	}

	toString() {
		return `${this.name} error by ${this.path} at ${this.createdAt}`
	}

	toJson() {
		return JSON.stringify({
			message: this.message,
			code: this.name,
			status: this.status,
			createdAt: this.createdAt,
			path: this.path,
		})
	}
}
