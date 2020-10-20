import {NextApiRequest, NextApiResponse} from "next"
import {router} from "../../../src/http/Router"
import {UserService} from "../../../src/user/service/user.service"

export default router.post(async function (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const userData = req.body
	const {email, username, password} = userData
	const userService = new UserService()
	const token = await userService.signUp(username, email, password)

	console.log(token, "api")
	return res.json({
		ok: false,
		data: token,
		error: null,
	})
})
