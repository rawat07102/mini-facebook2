import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
} from "@material-ui/core"
import React, {FunctionComponent} from "react"
import useSWR from "swr"
import {fetcher} from "../../http/fetcher"
import {UserDTO} from "../../user/dto"
import {PostDTO} from "../dto"

type Props = {
	post: PostDTO
}

const Post: FunctionComponent<Props> = ({post}) => {
	const {data: user, error, isValidating} = useSWR<UserDTO>(
		`user/${post.userId}`,
		fetcher
	)

	if (isValidating) return <h1>loading..</h1>
	if (error) return <h1>error{JSON.stringify(error)}</h1>

	return (
		<Card>
			<CardHeader title={"@" + user?.username} />
			<CardContent>{post.body}</CardContent>
			<CardActions>{post.likeCount}</CardActions>
		</Card>
	)
}

export default Post
