export default theme => ({
  title: {
    borderBottomWidth: theme.spacing(1) / 4,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  featureImage: {
    width: theme.spacing(30),
    height: theme.spacing(25),
  },
  featureTitle: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },
})
