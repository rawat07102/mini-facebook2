import React, {ChangeEvent, FormEvent, useState} from "react"
import {Button, IconButton, TextField} from "@material-ui/core"
import useSWR from "swr"
import {fetcher} from "../../../http/fetcher"
import {PostDTO} from "../../dto"
import useStyles from "./styles"
import {Publish} from "@material-ui/icons"

const AddPost = () => {
	const [post, setPost] = useState("")
	const {data, mutate} = useSWR("posts", fetcher)
	const classes = useStyles()

	const handlSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!post) return alert("no value for post")
		mutate(
			[
				...data,
				new PostDTO(`${Math.random()}`, {
					body: post,
					username: "test",
				}),
			],
			false
		)
		await fetcher("posts/new", {
			method: "POST",
			body: JSON.stringify({
				body: post,
				username: "test",
			}),
		})
	}

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setPost(e.target.value)
	}

	return (
		<form className={classes.root} onSubmit={handlSubmit}>
			<TextField
				fullWidth
				value={post}
				multiline
				rows={2}
				rowsMax={5}
				onChange={handleChange}
			/>
			<Button
				className={classes.button}
				endIcon={<Publish />}
				type="submit"
				variant="contained"
				title="Post">
				Post
			</Button>
		</form>
	)
}

export default AddPost
