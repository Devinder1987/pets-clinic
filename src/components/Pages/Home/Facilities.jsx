import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacilitiesData from './../Facilities/FacilitiesData.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2)
  },
  serviceHeading: {
    borderBottom: '2px solid',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(2)
  },
  list: {
    '& >:nth-child(even)': {
      background: 'inherit'
    },
    '& >:nth-child(odd)': {
      background: '#f7f7f7'
    }
  },
  button: {
    margin: theme.spacing(2)
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
      justify="flex-start"
      alignItems="center"
      direction="column"
      className={classes.root}
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

      <Button
        variant="outlined"
        href="/facilities"
        color="primary"
        className={classes.button}
      >
        View All
      </Button>
    </Grid>
  );
}
