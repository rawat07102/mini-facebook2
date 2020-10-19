import React, {FunctionComponent} from "react"
import {Container, makeStyles} from "@material-ui/core"

import Navbar from "./components/Navbar"

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
}))

const Layout: FunctionComponent = ({children}) => {
	const classes = useStyles()
	return (
		<Container maxWidth="md">
			<Navbar />
			<div className={classes.offset}></div>
			{children}
		</Container>
	)
}

export default Layout
