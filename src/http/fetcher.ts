export async function fetcher(key: string, init?: RequestInit) {
	const res = await (await fetch(`/api/${key}`, init)).json()
	const {error, data, ok} = res
	if (!ok) {
		throw error
	}
	return data
}
