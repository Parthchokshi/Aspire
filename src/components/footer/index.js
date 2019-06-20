import { Grid, Typography, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
})

const Footer = ({ classes }) => (
  <Grid item container justify="center" className={classes.footer}>
    <Grid item xs={4}>
      <Typography variant="body1">Post a Job</Typography>
    </Grid>
  </Grid>
)

Footer.propTypes = {
  classes: PropTypes.shape({
    footer: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Footer)
