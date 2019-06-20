import PropTypes from 'prop-types'
import React from 'react'
import { Typography, withStyles, Grid } from '@material-ui/core'

const styles = theme => ({
  nextgenHeadline: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#403D58',
    lineHeight: 1.5,
    fontWeight: 300,
    fontSize: theme.spacing(4.5),
  },
  tagline: {
    color: '#403D58',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: theme.spacing(3),
    fontWeight: 600,
  },
})
const Headline = ({ classes }) => (
  <Grid item xs={12}>
    <Typography variant="h3" className={classes.nextgenHeadline}>
			Next generation companies needs next generation
      <br />
			hiring platform to connect with worldwide talent
    </Typography>
    <Typography variant="h4" className={classes.tagline}>
			One of the world’s first
      <br />
			video description hiring platform
    </Typography>
  </Grid>
)

Headline.propTypes = {
  classes: PropTypes.shape({
    tagline: PropTypes.string.isRequired,
    nextgenHeadline: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Headline)
