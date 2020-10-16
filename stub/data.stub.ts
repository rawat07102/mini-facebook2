import {PostDTO} from "../src/post/dto"
import {UserDTO} from "../src/user/dto"

export default {
	users: [
		{
			email: "test@gmail.com",
			friendReqs: [],
			friends: [],
			posts: ["1"],
			username: "test",
			createdAt: new Date().toISOString(),
		},
	],
	posts: [
		{
			id: "1",
			body: "My first post",
			commentCount: 0,
			likeCount: 0,
			createdAt: new Date().toISOString(),
			username: "test",
		},
		{
			id: "2",
			body: "My second post",
			commentCount: 0,
			likeCount: 0,
			createdAt: new Date().toISOString(),
			username: "test",
		},
		{
			id: "3",
			body: "My third post",
			commentCount: 0,
			likeCount: 0,
			createdAt: new Date().toISOString(),
			username: "test",
		},
	],
	likes: [],
	comments: [],
} as {users: UserDTO[]; posts: PostDTO[]}
