import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  pageRoot: {
    padding: theme.spacing(1)
  },
  serviceHeading: {
    borderBottom: '2px solid ',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));
export default function About() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      direction="column"
      className={classes.pageRoot}
    >
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="column"
        className={classes.pageRoot}
      >
        <Typography
          variant="h5"
          component="h1"
          className={classes.serviceHeading}
        >
          About Us
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
        >
          <Typography variant="body1" align="justify" color="textSecondary">
            Vatika Pet Clinic & Surgery Center provide extreme care and
            treatment at an affordable cost for your pets. "The Unique Care for
            Pets" Our services include Routine examination, Treatment,
            Vaccination, Surgery, Grooming & Spa, 24×7 Service, Home Visit &
            Delivery, Wheelchair Accessibility, Pet Food & Accessories,
            Air-Conditioned In-patient/Boarding, Home pick-up & Drop ( Pet Taxi
            Service) for pets. We emphasize on preventive care, including
            wellness examinations and regular vaccinations. We provides quality
            pet care support and services to fulfill our goal i.e health and
            happiness of your furry friends.
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            className={classes.serviceHeading}
          >
            Dr. Kapish Yadav
          </Typography>
          <Typography variant="body1" align="justify" color="textSecondary">
            Dr. Kapish Yadav completed his bachelor’s in veterinary science and
            animal husbandry from Lala Lajpat Rai University of Veterinary and
            animal sciences Hisar in 2015 and after that he pursued his post
            graduation from the same university in 2017.
          </Typography>
        </Grid>
        <Button
          variant="outlined"
          href="/about"
          color="primary"
          className={classes.button}
        >
          Know More
        </Button>
      </Grid>
    </Grid>
  );
}
