import {createMuiTheme} from "@material-ui/core/styles"
import {red, cyan, common} from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: cyan[700],
		},
		secondary: {
			main: cyan["A700"],
		},
		error: {
			main: red.A400,
		},
		background: {
			default: common.white,
		},
	},
})

export default theme
