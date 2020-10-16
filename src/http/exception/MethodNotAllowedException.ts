import {BadRequestException} from "./BadRequestException"

export enum HTTPMethod {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PUT = "PUT",
}

export class MethodNotAllowedException extends BadRequestException {
	public name = "MethodNotAllowed"
	private methodAllowed: HTTPMethod

	constructor(message: string, path: string, methodAllowed: HTTPMethod) {
		super(message, path)
		this.methodAllowed = methodAllowed
	}

	toString() {
		return `${this.methodAllowed} Not Allowed`
	}

	toJson() {
		return JSON.stringify({
			message: this.message,
			code: this.name,
			status: this.status,
			createdAt: this.createdAt,
			path: this.path,
			methodAllowed: this.methodAllowed,
		})
	}
}
