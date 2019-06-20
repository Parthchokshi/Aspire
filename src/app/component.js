import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Button, withStyles, TextField, Grid } from '@material-ui/core'
import styles from './styles'

class App extends Component {
	static propTypes = {
		classes: PropTypes.shape({
			root: PropTypes.string.isRequired,
		}).isRequired,
	}
	render() {
		const { classes } = this.props
		return (
			<React.Fragment>
				<AppBar elevation={0} position="relative" classes={{ root: classes.root }}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							NextGen
						</Typography>
						<Button color="inherit">Signup</Button>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<Grid container justify="center">
					<Grid item xs={10}>
						<TextField placeholder="Search for a position" fullWidth />
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(App)
