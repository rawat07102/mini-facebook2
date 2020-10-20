import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	button: {
		maxWidth: theme.spacing(12),
		marginTop: theme.spacing(2),
		margin: "auto",
	},
}))
