import React from "react"
import Link from "next/link"
import {
	Drawer as MuiDrawer,
	List,
	ListItem,
	ListItemIcon,
} from "@material-ui/core"
import {AccountBox, Home} from "@material-ui/icons"

import useStyles from "./styles"

const Drawer = () => {
	const classes = useStyles()
	return (
		<MuiDrawer classes={{paper: classes.drawerPaper}} variant="permanent">
			<div className={classes.offset}></div>
			<List>
				<Link href="/">
					<ListItem button className={classes.listItem}>
						<ListItemIcon className={classes.listIcon}>
							<Home></Home>
						</ListItemIcon>
					</ListItem>
				</Link>
				<Link href="/profile">
					<ListItem button className={classes.listItem}>
						<ListItemIcon className={classes.listIcon}>
							<AccountBox></AccountBox>
						</ListItemIcon>
					</ListItem>
				</Link>
			</List>
		</MuiDrawer>
	)
}

export default Drawer
