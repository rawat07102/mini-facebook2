import {NextApiHandler} from "next"
import {db} from "../../../src/firebase"

const getAllPostsHandler: NextApiHandler = async (req, res) => {
	try {
		const {userId} = req.query
		const userSnapshot = await db.doc(`users/${userId}`).get()

		if (!userSnapshot.exists) {
			throw new Error("User Does not Exists.")
		}

		return res.json({
			ok: true,
			data: userSnapshot.data(),
			error: null,
		})
	} catch (err) {
		return res.json({
			ok: false,
			data: null,
			error: err,
		})
	}
}

export default getAllPostsHandler
