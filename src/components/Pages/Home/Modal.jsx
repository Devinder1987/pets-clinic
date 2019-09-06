import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    left: '5vw',
    width: '80vw',
    top: '25vw',
    padding: 20,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255)'
  },
  button: {
    marginTop: 20
  }
});
export default function ModalContainer() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Typography variant="h5" component="h2">
        Sushma is an Awsome Doctor. Book the appointment now.
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Book Now Here
      </Button>
    </div>
  );
}
