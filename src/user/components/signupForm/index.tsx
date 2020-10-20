import {Button, TextField} from "@material-ui/core"
import {ChangeEvent, FormEvent, useState} from "react"
import useSignUp, {SignUpData} from "../../hooks/useSignUp"
import useStyles from "./styles"

const SignUpForm = () => {
	const classes = useStyles()
	const {signup} = useSignUp()
	const [userData, setUserData] = useState<SignUpData>({
		email: "",
		password: "",
		username: "",
	})

	const [error, setError] = useState({
		email: "",
		username: "",
		password: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target
		setUserData({
			...userData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			console.log(userData, "handlesubmit")
			const res = await signup(userData)
			console.log(res)
		} catch (err) {
			console.error(err)
			setError({
				...error,
				...err,
			})
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={classes.root}>
			<TextField
				label="Username"
				type="text"
				name="username"
				error={!!error.username}
				helperText={error.username}
				value={userData.username}
				onChange={handleChange}></TextField>
			<TextField
				label="Email"
				type="email"
				name="email"
				value={userData.email}
				error={!!error.email}
				helperText={error.email}
				onChange={handleChange}></TextField>
			<TextField
				label="Password"
				type="password"
				name="password"
				error={!!error.password}
				helperText={error.password}
				value={userData.password}
				onChange={handleChange}></TextField>
			<Button type="submit" className={classes.button}>
				Sign Up
			</Button>
		</form>
	)
}

export default SignUpForm
