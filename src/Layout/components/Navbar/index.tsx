import React from "react"
import {AppBar, Button, makeStyles, Toolbar} from "@material-ui/core"

import Drawer from "../Drawer"

const useStyles = makeStyles((theme) => ({
	appbar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
	},
}))

const Navbar = () => {
	const classes = useStyles()
	return (
		<>
			<AppBar position="fixed" className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
					<Button variant="outlined" color="inherit">
						Posts
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer />
		</>
	)
}

export default Navbar
