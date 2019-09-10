import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  pageRoot: {
    padding: theme.spacing(2),
    minHeight: 'calc(100vh - 127px)',
    background:
      'linear-gradient(90deg, rgba(255, 253, 226, 0.7) 0%, rgba(228, 241, 255, 0.7) 100%)'
  },
  serviceHeading: {
    borderBottom: '2px solid #3f51b5',
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160
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
        alignItems="flex-start"
        direction="column"
      >
        <Typography
          variant="h5"
          component="h1"
          className={classes.serviceHeading}
        >
          About Vatika Pets Clinic
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
        >
          <Typography variant="body1" align="justify">
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
        </Grid>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Avatar
          alt="Dr. Kapish Yadav"
          src="/assert/icons/doctor.svg"
          className={classes.bigAvatar}
        />
        <Typography variant="h5" component="h1">
          Dr. Kapish Yadav
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          B.V.Sc. &amp; A.H
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
        >
          <Typography variant="body1" align="justify">
            Dr. Kapish Yadav completed his bachelor’s in veterinary science and
            animal husbandry from Lala Lajpat Rai University of Veterinary and
            animal sciences Hisar in 2015 and after that he pursued his post
            graduation from the same university in 2017. His love for horses led
            him to join stud farm(Hazara Stud Farm, Belgarh, Yamuna Nagar for
            one years and performed well in equine field). After working with
            equine he decided to work for small furies and than he join
            Jeevashram Foundation, Delhi and serve for more than one year.
            During NGO practice he gained good experience of handling Critical
            Care patients, Small animal OPD and lot of soft tissue surgery. He
            is always trying to upgrade himself with the latest in medicine and
            surgeries by attending seminars in various disciplines and enjoy
            every moment of his professional life. His love and compassion
            towards Animals brings me in this noble profession. He is always
            happy to help them from their sufferings. He has lifetime membership
            of ISVM (Indian Society for Veterinary Medicine) and ISACP (Indian
            Society for Advancement of Canine Practice).His areas of interest
            are internal medicine and soft tissue surgery.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
