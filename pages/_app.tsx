import React from "react"
import {NextPage} from "next"
import Head from "next/head"

import CssBaseline from "@material-ui/core/CssBaseline"

type Props = {
	Component: NextPage
	pageProps: any
}

export default function MyApp(props: Props) {
	const {Component, pageProps} = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		jssStyles?.parentElement?.removeChild(jssStyles)
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			{/* <ThemeProvider theme={defaultTheme}> */}
			<CssBaseline />
			<Component {...pageProps} />
			{/* </ThemeProvider> */}
		</React.Fragment>
	)
}
