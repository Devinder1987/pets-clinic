import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  pageRoot: {
    padding: theme.spacing(2),
    background: '#f7f7f7'
  },
  listItem: {
    paddingBottom: theme.spacing(2),
    maxWidth: 360
  },
  serviceHeading: {
    borderBottom: '2px solid',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  itemHeading: {
    paddingBottom: theme.spacing(3)
  },
  iconAvatar: {
    margin: theme.spacing(1),
    width: 64,
    height: 64
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  button: {
    margin: theme.spacing(1)
  }
}));
export default function Services() {
  const classes = useStyles();
  return (
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
        Services
      </Typography>
      <Grid
        container
        justify="space-around"
        alignItems="flex-start"
        direction="row"
      >
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
          className={classes.listItem}
        >
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="column"
            className={classes.noWrap}
          >
            <img
              alt={'Clock 24'}
              src="/assert/icons/doctor.svg"
              className={classes.iconAvatar}
            />
            <Typography
              variant="h6"
              component="h1"
              color="primary"
              className={classes.itemHeading}
            >
              24/7 Emergency Service
            </Typography>
          </Grid>
          <Typography variant="body1" align="justify" color="textSecondary">
            Pet medical emergencies are a terrifying thought, specially during
            late night. In such situations, it is of paramount importance to
            stabilise the pet, else the repercussions can be life threatening.
            In such condition we provide 24×7 emergency service.
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
          className={classes.listItem}
        >
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="column"
            className={classes.noWrap}
          >
            <img
              alt={'Clock 24'}
              src="/assert/icons/pet-taxi.svg"
              className={classes.iconAvatar}
            />
            <Typography
              variant="h6"
              component="h1"
              color="primary"
              className={classes.itemHeading}
            >
              Taxi for Pets
            </Typography>
          </Grid>
          <Typography variant="body1" align="justify" color="textSecondary">
            The pet taxi service provides safe and friendly pet pick up and drop
            off services to help alleviate your troubles. We provide
            professional and comfortable local pet transport service.
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          direction="column"
          className={classes.listItem}
        >
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="column"
            className={classes.noWrap}
          >
            <img
              alt={'Clock 24'}
              src="/assert/icons/pet-comb.svg"
              className={classes.iconAvatar}
            />
            <Typography
              variant="h6"
              component="h1"
              color="primary"
              className={classes.itemHeading}
            >
              Grooming
            </Typography>
          </Grid>
          <Typography variant="body1" align="justify" color="textSecondary">
            Grooming is an important part of pet care. In today’s fast paced
            life, it becomes hard to find the time to groom your pet as much as
            required. We take care of all your pooches grooming needs like nail
            clippings, ear cleaning & haircuts. Grooming sessions includes
            routine bath as well as medicated baths.
          </Typography>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        href="/services"
        color="primary"
        className={classes.button}
      >
        View All
      </Button>
    </Grid>
  );
}
