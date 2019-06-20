import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import Engagement from '../../../images/engagement.svg'
import Connected from '../../../images/connected.svg'
import Experience from '../../../images/experience.svg'
import styles from '../styles'

class Employer extends Component {
	static propTypes = {
		classes: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}).isRequired,
	}
	render() {
		const { classes } = this.props
		return (
			<Grid item container justify="center" xs={12}>
				<Grid item container justify="center">
					<Typography variant="h4" className={classes.title}>
						Employers
					</Typography>
				</Grid>
				<Grid item container xs={12} sm={4} alignItems="center" direction="column">
					<img src={Engagement} alt="engagement" className={classes.featureImage} />
					<Typography variant="h5" className={classes.featureTitle}>
						<br />
					</Typography>
				</Grid>
				<Grid item container xs={12} sm={4} alignItems="center" direction="column">
					<img src={Connected} alt="connected" className={classes.featureImage} />
					<Typography variant="h5" className={classes.featureTitle}>
						feel <br /> connected
					</Typography>
				</Grid>
				<Grid item container xs={12} sm={4} alignItems="center" direction="column">
					<img src={Experience} alt="experience" className={classes.featureImage} />
					<Typography variant="h5" className={classes.featureTitle}>
						superior <br /> experience
					</Typography>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Employer)
