import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(2),
    alignSelf: 'flex-end'
  }
}));
export default function MoreInfoButton() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="flex-start"
      direction="column"
      className={classes.button}
    >
      <Typography variant="body1" color="textSecondary">
        For more information
        <br />
        <Button color="primary" variant="outlined" href="/contact-us">
          Book an Appointment
        </Button>
      </Typography>
    </Grid>
  );
}
