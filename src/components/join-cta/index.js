import {
  Grid, withStyles, Typography, Button,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LinkButton from '../LinkButton/index'

const styles = theme => ({
  joinCta: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8),
    marginTop: theme.spacing(12),
  },
  joinNowText: {
    color: theme.palette.secondary.main,
  },
  ctaButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  ctaText: {
    lineHeight: 1.5,
    color: theme.palette.common.white,
  },
})

const JoinCTA = ({ classes }) => (
  <Grid container justify="center" className={classes.joinCta}>
    <Grid item xs={12}>
      <Grid item xs={12} container justify="center">
        <Typography variant="h3" className={classes.ctaText}>
					Want to join a great company
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Typography variant="h3" className={classes.ctaText}>
					or
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Typography variant="h3" className={classes.ctaText}>
					Building a team,&nbsp;
          <span className={classes.joinNowText}>Join Now!</span>
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12} container justify="center">
      <Router>
        <Button
          variant="contained"
          component={LinkButton}
          className={classes.ctaButton}
          to="/signup/job-seeker"
          size="large"
        >
					Job Seeker
        </Button>
        <Button
          variant="contained"
          component={LinkButton}
          className={classes.ctaButton}
          to="/employer"
          size="large"
        >
					Employer
        </Button>
      </Router>
    </Grid>
  </Grid>
)

JoinCTA.propTypes = {
  classes: PropTypes.shape({
    joinCta: PropTypes.string.isRequired,
  }).isRequired,
}
export default withStyles(styles)(JoinCTA)
