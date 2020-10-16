import {Drawer as MuiDrawer, IconButton, makeStyles} from "@material-ui/core"
import {HomeOutlined} from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles((theme) => ({
	drawerContainer: {
		marginTop: theme.mixins.toolbar.marginTop,
	},
}))

const Drawer = () => {
	const classes = useStyles()
	return (
		<MuiDrawer variant="permanent">
			<IconButton>
				<HomeOutlined />
			</IconButton>
		</MuiDrawer>
	)
}

export default Drawer
