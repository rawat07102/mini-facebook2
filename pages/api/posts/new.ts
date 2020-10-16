import {router} from "../../../src/http/Router"
import {PostStub} from "../../../stub/post/post.stub"

export default router.post(async function (req, res) {
	// todo: DI for post service
	// const postService = new PostService()
	const postService = new PostStub()
	const {body, username} = req.body
	const id = await postService.addPost(body, username)
	return res.status(201).json({
		ok: true,
		data: id,
		error: null,
	})
})
