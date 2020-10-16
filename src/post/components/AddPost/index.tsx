import React, {ChangeEvent, FormEvent, useState} from "react"
import {Button, TextField} from "@material-ui/core"
import useSWR from "swr"
import {fetcher} from "../../../http/fetcher"
import {PostDTO} from "../../dto"

const AddPost = () => {
	const [post, setPost] = useState("")
	const {data, mutate} = useSWR("posts", fetcher)

	const handlSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		mutate(
			[
				...data,
				new PostDTO(`${Math.random()}`, () => ({
					body: post,
					username: "test",
				})),
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
		<form onSubmit={handlSubmit}>
			<TextField
				value={post}
				multiline
				rows={3}
				rowsMax={5}
				onChange={handleChange}
			/>
			<Button type="submit" title="Post">
				Post
			</Button>
		</form>
	)
}

export default AddPost
