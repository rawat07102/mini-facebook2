export async function fetcher(key: string) {
	const res = await (await fetch(`/api/${key}`)).json()
	const {error, data, ok} = res
	if (!ok) {
		throw error
	}
	return data
}
