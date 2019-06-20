import PropTypes from 'prop-types'
import React from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'

const styles = theme => ({
  searchInput: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
})

const handleSearchInputChange = (e) => {
  console.log(e.target.value)
}

const SearchJobs = ({ classes }) => (
  <Grid item xs={6}>
    <TextField
      classes={{ root: classes.searchInput }}
      onChange={handleSearchInputChange}
      fullWidth
      placeholder="Search for a position (For e.g Account Payable, Web Developer, etc)"
    />
  </Grid>
)

SearchJobs.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}
export default withStyles(styles)(SearchJobs)
