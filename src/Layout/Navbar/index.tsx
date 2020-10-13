import React from "react"
import {AppBar, Button, Toolbar} from "@material-ui/core"

const Navbar = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<Button color="inherit">Posts</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
