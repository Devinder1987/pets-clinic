import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ServiceData from './ServiceData.json';
import MoreInfoButton from '../../common/MoreInfoButton';

const useStyles = makeStyles(theme => ({
  serviceList: {
    minHeight: 'calc(100vh - 127px)',
    '& >:nth-child(even)': {
      paddingTop: theme.spacing(2),
      background: 'rgba(255, 253, 226, 0.7)',
      flexDirection: 'row-reverse'
    },
    '& >:nth-child(odd)': {
      paddingTop: theme.spacing(2),
      background: 'rgba(228, 241, 255, 0.7)',
      flexDirection: 'row'
    }
  },
  imageAndBody: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '48%'
    }
  },
  itemBody: {
    padding: theme.spacing(2)
  },
  serviceHeading: {
    borderBottom: '2px solid ',
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    textAlign: 'left'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: 56,
    height: 56
  },
  noWrap: {
    flexWrap: 'nowrap',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
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
      className={classes.serviceList}
    >
      {ServiceData.services.map(data => {
        return (
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              direction="column"
              className={classes.imageAndBody}
            >
              <Grid
                container
                justify="flex-start"
                alignItems="center"
                direction="row"
                className={classes.noWrap}
              >
                <img
                  src={data.iconPath}
                  alt={data.header}
                  className={classes.icon}
                />
                <Typography
                  variant="h6"
                  component="h1"
                  color="primary"
                  className={classes.serviceHeading}
                >
                  {data.header}
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                align="justify"
                color="textSecondary"
                className={classes.itemBody}
              >
                <div dangerouslySetInnerHTML={{ __html: data.body }} />
              </Typography>
            </Grid>
            {data.imagePath && (
              <img
                src={data.imagePath}
                alt={data.header}
                className={classes.imageAndBody}
              />
            )}
          </Grid>
        );
      })}
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        direction="column"
      >
        <MoreInfoButton />
      </Grid>
    </Grid>
  );
}
