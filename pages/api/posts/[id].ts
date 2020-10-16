import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {router} from "../../../src/http/Router"
import {PostStub} from "../../../stub/post/post.stub"
// import {PostService} from "../../../src/post/service/post.service"

export default router.get(async function (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {id} = req.query
	// Todo: DI for post service
	// const postService = new PostService()
	const postService = new PostStub()

	const post = await postService.getPost(id as string)
	return res.json({
		ok: true,
		data: post,
		error: null,
	})
})
