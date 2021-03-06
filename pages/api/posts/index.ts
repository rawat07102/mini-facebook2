import {NextApiRequest, NextApiResponse} from "next"
import {PostService} from "../../../src/post/service/post.service"
// import {PostStub} from "../../../stub/post/post.stub"
import {router} from "../../../src/http/Router"

export default router.get(async function (
	req: NextApiRequest,
	res: NextApiResponse
) {
	// todo: DI for post service
	const postService = new PostService()
	// const postService = new PostStub()

	const posts = await postService.getPosts()
	return res.json({
		ok: true,
		data: posts,
		error: null,
	})
})
