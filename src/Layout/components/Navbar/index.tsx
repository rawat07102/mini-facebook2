import React from "react"
import {AppBar, Button, makeStyles, Toolbar} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
	},
}))

const Navbar = () => {
	const classes = useStyles()
	return (
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<Button variant="outlined" color="inherit">
					Posts
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
