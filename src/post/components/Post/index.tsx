import React, {FunctionComponent} from "react"
import useSWR from "swr"

import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	makeStyles,
	IconButton,
	Typography,
} from "@material-ui/core"
import {Favorite as FavoriteIcon} from "@material-ui/icons"

import {fetcher} from "../../../http/fetcher"
import {UserDTO} from "../../../user/dto"
import {PostDTO} from "../../dto"

const useStyles = makeStyles((theme) => ({
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
}))

type Props = {
	post: PostDTO
}

const Post: FunctionComponent<Props> = ({post}) => {
	const classes = useStyles()
	const {data: user, error} = useSWR<UserDTO>(
		`user/${post.username}`,
		fetcher
	)

	if (error) return <h1>error {error.message}</h1>

	return (
		<Card>
			<CardHeader title={user ? `@${user.username}` : "loading..."} />
			<CardContent>{post.body}</CardContent>
			<CardActions className={classes.cardActions}>
				<IconButton size="small">
					<FavoriteIcon style={{color: "grey"}} fontSize="small" />
				</IconButton>
				<Typography variant="subtitle1">{post.likeCount}</Typography>
			</CardActions>
		</Card>
	)
}

export default Post
