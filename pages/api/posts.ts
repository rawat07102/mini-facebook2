import {NextApiHandler} from "next"
import {db} from "../../src/firebase"
import {PostDTO} from "../../src/posts/dto"

const getAllPostsHandler: NextApiHandler = async (req, res) => {
	try {
		const posts: PostDTO[] = []
		const postsSnapshot = await db.collection("posts").get()
		postsSnapshot.docs.forEach((doc) => {
			const data = doc.data()
			posts.push(
				new PostDTO(
					doc.id,
					data.userId,
					data.body,
					data.createdAt,
					data.likeCount,
					data.commentCount
				)
			)
		})

		return res.json({
			ok: true,
			data: posts,
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
