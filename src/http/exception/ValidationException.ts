type ValidationErrors = {
	[input: string]: string
}

export class ValidationException {
	public name = "ValidationException"
	public validationErrors: ValidationErrors
	public count: number
	public createdAt: string
	public path: string

	constructor(path: string, errors?: ValidationErrors, count?: number) {
		this.validationErrors = errors || {}
		this.count = count || 0
		this.createdAt = new Date().toISOString()
		this.path = path
	}

	addError(key: string, value: string) {
		this.validationErrors = {...this.validationErrors, [key]: value}
		this.count++
	}

	toString() {
		return `Validation failed at ${this.path} on ${this.createdAt}`
	}

	toJson() {
		return JSON.stringify({
			code: this.name,
			createdAt: this.createdAt,
			validationErrors: JSON.stringify(this.validationErrors),
			path: this.path,
		})
	}
}
