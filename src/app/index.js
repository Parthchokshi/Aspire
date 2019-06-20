import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import {
	AppBar,
	Toolbar,
	withStyles,
	Typography,
	Grid,
	createMuiTheme,
	Button,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Headline, SearchJobs, JobSeekers, Employers, TrendingJobs, JoinCTA } from '../components'
import AdapterLink from '../components/LinkButton'
import styles from './styles'

const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: yellow,
	},
})

class App extends Component {
	static propTypes = {
		classes: PropTypes.shape({}).isRequired,
	}
	render() {
		const { classes } = this.props
		return (
			<ThemeProvider theme={theme}>
				<AppBar elevation={0} position="relative" classes={{ root: classes.root }}>
					<Toolbar>
						<Router>
							<Grid container justify="flex-start">
								<Grid item className={classes.title}>
									<Button component={AdapterLink} to="/">
										<Typography variant="body1" className={classes.link}>
											ALTIMA
										</Typography>
									</Button>
								</Grid>
								<Grid item>
									<Button className={classes.link} component={AdapterLink} to="/login">
										<Typography variant="body1" className={classes.link}>
											Login
										</Typography>
									</Button>
								</Grid>
								<Grid item>
									<Button className={classes.link} component={AdapterLink} to="/signup">
										<Typography variant="body1" className={classes.link}>
											Signup
										</Typography>
									</Button>
								</Grid>

								<Grid item>
									<Button className={classes.link} component={AdapterLink} to="/employer">
										<Typography variant="body1">Employer</Typography>
									</Button>
								</Grid>
							</Grid>
						</Router>
					</Toolbar>
				</AppBar>
				<Grid container justify="center" className={classes.contentGutter}>
					<Headline />
					<SearchJobs />
					<TrendingJobs />
					<JobSeekers />
				</Grid>
				<JoinCTA />
				<Grid container justify="center" className={classes.contentGutter}>
					<Employers />
				</Grid>
			</ThemeProvider>
		)
	}
}

export default withStyles(styles)(App)
