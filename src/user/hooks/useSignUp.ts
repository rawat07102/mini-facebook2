import {fetcher} from "../../http/fetcher"

export type SignUpData = {
	email: string
	password: string
	username: string
}

const useSignUp = () => {
	async function signup(userData: SignUpData) {
		const {username, email, password} = userData
		const error = {
			username: "",
			email: "",
			password: "",
		}

		if (!username) error.username = "cannot be empty"
		if (!email) error.email = "cannot be empty"
		if (!password) error.password = "cannot be empty"
		if (error.username || error.email || error.password) throw error

		try {
			const res = await fetcher("user/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					email,
					password,
				}),
			})
			return res
		} catch (err) {
			throw err.validationErrors
		}
	}
	return {signup}
}

export default useSignUp
