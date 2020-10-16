import React from "react"
import Layout from "../src/Layout/components"
import AddPost from "../src/post/components/AddPost"
import PostList from "../src/post/components/PostList"

const IndexPage = () => {
	return (
		<Layout>
			<AddPost />
			<PostList />
		</Layout>
	)
}

export default IndexPage
