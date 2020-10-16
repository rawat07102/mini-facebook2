import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {router} from "../../../src/http/Router"

export default router.post(async function (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {email, username, password} = req.body
	return res.json({
		ok: false,
		data: {email, username, password},
		error: null,
	})
})
