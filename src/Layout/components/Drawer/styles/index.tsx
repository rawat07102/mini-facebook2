import {makeStyles} from "@material-ui/core"

//* Drawer styles

export default makeStyles((theme) => ({
	drawerPaper: {
		width: theme.spacing(7),
	},
	listIcon: {
		color: "inherit",
	},
	listItem: {
		color: "grey",
		"&:hover, &:focus": {
			color: theme.palette.primary.main,
		},
	},
	offset: theme.mixins.toolbar,
}))
