import React from "react"
import useSWR from "swr"
import {Grid, makeStyles} from "@material-ui/core"

import {fetcher} from "../../../http/fetcher"
import {PostDTO} from "../../dto"
import Post from "../Post"

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
}))

const PostList = () => {
	const classes = useStyles()
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

	if (!posts?.length) return <h1>no posts</h1>

	return (
		<Grid container spacing={2} className={classes.container}>
			{posts?.map((post) => (
				<Grid key={post.id} item xs={12}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	)
}

export default PostList
