import React from "react"
import useSWR from "swr"
import {fetcher} from "../../http/fetcher"
import {PostDTO} from "../dto"
import Post from "./Post"

const PostList = () => {
	const {data: posts, error, isValidating} = useSWR<PostDTO[]>(
		"posts",
		fetcher
	)
	if (isValidating) {
		return <h1>loading...</h1>
	}

	if (error) {
		return <h1>error</h1>
	}
	return (
		<div>
			{posts?.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	)
}

export default PostList
