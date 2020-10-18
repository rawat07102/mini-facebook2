import {NextApiRequest, NextApiResponse} from "next"
import {router} from "../../../src/http/Router"
import {UserService} from "../../../src/user/service/user.service"
// import {UserStub} from "../../../stub/user/user.stub"

export default router.get(async function (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {userId} = req.query
	// todo: DI for userService
	const userService = new UserService()
	// const userService = new UserStub()
	const user = await userService.getUser(userId as string)
	return res.json({
		ok: true,
		data: user,
		error: null,
	})
})
