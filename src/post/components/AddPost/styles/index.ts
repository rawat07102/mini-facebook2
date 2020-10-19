import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginTop: theme.spacing(6),
	},
	button: {
		marginTop: theme.spacing(1),
	},
}))
