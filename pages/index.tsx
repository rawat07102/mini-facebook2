import useSWR from "swr"
import {fetcher} from "../src/http/fetcher"
import {PostDTO} from "../src/posts/dto"

const IndexPage = () => {
	const {data, error, isValidating} = useSWR<PostDTO[]>("posts", fetcher)

	if (isValidating) {
		return <h1>loading</h1>
	}

	if (error) {
		return <h1>{JSON.stringify(error)}</h1>
	}

	return (
		<div>
			{data?.map((post) => (
				<div key={post.id}>
					<h1>{post.id}</h1>
					{post.body}
				</div>
			))}
		</div>
	)
}
export default IndexPage
