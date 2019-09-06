import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FacilitiesData from './FacilitiesData.json';
import MoreInfoButton from '../../common/MoreInfoButton';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 144px)',
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  serviceHeading: {
    borderBottom: '2px solid #3f51b5',
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(2)
  },
  section: {
    maxWidth: 360
  },
  list: {
    width: '100%',
    maxWidth: 360,
    '& >:nth-child(even)': {
      background: 'inherit'
    },
    '& >:nth-child(odd)': {
      background: '#f7f7f7'
    }
  },
  iconAvatar: {
    margin: theme.spacing(1),
    width: 36,
    height: 36
  }
}));

export default function Facilites() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-around"
      alignItems="flex-start"
      direction="row"
      className={classes.root}
    >
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        direction="column"
        className={classes.section}
      >
        <Typography
          variant="h5"
          component="h1"
          className={classes.serviceHeading}
        >
          Facilities
        </Typography>
        <List className={classes.list}>
          {FacilitiesData.facilites.map(item => {
            return (
              <ListItem key={item.header}>
                <ListItemAvatar>
                  <img
                    alt={item.header}
                    src={item.imagePath}
                    className={classes.iconAvatar}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.header} secondary={item.body} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        direction="column"
        className={classes.section}
      >
        <Typography
          variant="h5"
          component="h1"
          className={classes.serviceHeading}
        >
          Facilites On Demand
        </Typography>
        <List className={classes.list}>
          {FacilitiesData.facilitesOnDemand.map(item => {
            return (
              <ListItem key={item.header}>
                <ListItemAvatar>
                  <img
                    alt={item.header}
                    src={item.imagePath}
                    className={classes.iconAvatar}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.header} secondary={item.body} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <MoreInfoButton />
    </Grid>
  );
}
