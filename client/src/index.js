import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
	palette: {
		primary: blue
	}
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
	, document.getElementById("root"));
