import React, {FunctionComponent} from "react"
import useSWR from "swr"

import {
	Card,
	CardActions,
	CardContent,
	makeStyles,
	IconButton,
	Typography,
} from "@material-ui/core"
import {Comment, Favorite as FavoriteIcon, Toys} from "@material-ui/icons"

import {fetcher} from "../../../http/fetcher"
import {UserDTO} from "../../../user/dto"
import {PostDTO} from "../../dto"

const useStyles = makeStyles((theme) => ({
	root: {},
	content: {
		padding: theme.spacing(1),
	},
	postBody: {
		paddingLeft: theme.spacing(2),
	},
	iconButton: {
		marginLeft: theme.spacing(4),
	},
	actionContainer: {
		display: "flex",
		justifyContent: "space-between",
		marginLeft: "auto",
		maxWidth: theme.spacing(25),
	},
	actions: {
		display: "flex",
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
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Typography variant="h6">
					{user ? `@${user.username}` : "loading..."}
				</Typography>
				<Typography className={classes.postBody} variant="body1">
					{post.body}
				</Typography>
			</CardContent>
			<CardActions className={classes.actionContainer}>
				<div className={classes.actions}>
					<IconButton size="small">
						<FavoriteIcon style={{color: "grey"}} />
					</IconButton>
					<Typography variant="subtitle1">
						{post.likeCount}
					</Typography>
				</div>
				<div className={classes.actions}>
					<IconButton size="small">
						<Comment style={{color: "grey"}}></Comment>
					</IconButton>
					<Typography variant="subtitle1">
						{post.commentCount}
					</Typography>
				</div>
			</CardActions>
		</Card>
	)
}

export default Post
