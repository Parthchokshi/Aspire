// eslint-disable sort-keys 0
export default theme => ({
  '@global body': {
    margin: 0,
    padding: 0,
  },
  '@global .MuiButton-root': {
    textTransform: 'none',
    borderRadius: 0,
  },
  title: {
    flexGrow: 1,
  },
  contentGutter: {
    padding: theme.spacing(3),
  },
  link: {
    color: theme.palette.common.white,
  },
})
