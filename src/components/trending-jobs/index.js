import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import styles from './styles'

class TrendingJobs extends Component {
	static propTypes = {
		classes: PropTypes.shape({}).isRequired,
	}
	render() {
		return (
			<Grid item xs={12}>
				{/* <Grid item container xs={12}>
					<Grid item xs={6}>
						<Typography variant="body1">Trending</Typography>
					</Grid>
					<Grid item container justify="flex-end" xs={6}>
						<Typography varaint="body1">Learn More</Typography>
					</Grid>
				</Grid> */}
			</Grid>
		)
	}
}

export default withStyles(styles)(TrendingJobs)
