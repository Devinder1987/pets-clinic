import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ServiceData from '../Services/ServiceData.json';

const useStyles = makeStyles(theme => ({
  pageRoot: {
    padding: theme.spacing(2),
    background: '#f7f7f7'
  },
  listItem: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '46%'
    }
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
        justify="space-between"
        alignItems="flex-start"
        direction="row"
      >
        {ServiceData.homeServices.map(item => {
          return (
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              direction="column"
              className={classes.listItem}
              key={item.header}
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
                  src={item.iconPath}
                  className={classes.iconAvatar}
                />
                <Typography
                  variant="h6"
                  component="h1"
                  color="primary"
                  className={classes.itemHeading}
                >
                  {item.header}
                </Typography>
              </Grid>
              <Typography variant="body1" align="justify" color="textSecondary">
                {item.body}
              </Typography>
            </Grid>
          );
        })}
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
