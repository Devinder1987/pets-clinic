import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialpad from '@material-ui/icons/Dialpad';
import Mail from '@material-ui/icons/Mail';
import AddLocation from '@material-ui/icons/AddLocation';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  pageRoot: {
    display: 'flex',
    minHeight: 'calc(100vh - 144px)',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    background:
      'linear-gradient(90deg, rgba(255, 253, 226, 0.7) 0%, rgba(228, 241, 255, 0.7) 100%)'
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    paddingBottom: 0,
    marginBottom: 0
  },
  icon: {
    backgroundColor: '#2196f3',
    borderRadius: '50%',
    display: 'flex',
    color: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneIcon: {
    fontSize: '1rem',
    marginTop: theme.spacing(1)
  },
  link: {
    textDecoration: 'none'
  },

  text: {
    margin: theme.spacing(2)
  }
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.pageRoot}>
      <div className={classes.root}>
        <div className={classes.icon}>
          <Dialpad />
        </div>
        <div className={classes.text}>
          <Typography>
            <PhoneIphoneIcon className={classes.phoneIcon} color="primary" />{' '}
            <a href="tel:7290019005" className={classes.link}>
              7290019005
            </a>
          </Typography>
          <Typography>
            <PhoneIphoneIcon className={classes.phoneIcon} color="primary" />{' '}
            <a href="tel:9034401529" className={classes.link}>
              9034401529
            </a>
          </Typography>
        </div>
      </div>
      {/* EmailAddress */}
      <div className={classes.root}>
        <div className={classes.icon}>
          <Mail />
        </div>
        <div className={classes.text}>
          <Typography>
            <a href="mailto: yadavkapish2@gmail.com">yadavkapish2@gmail.com</a>
          </Typography>
        </div>
      </div>
      {/* Address */}
      <div className={classes.root}>
        <div className={classes.icon}>
          <AddLocation />
        </div>
        <div className={classes.text}>
          <Typography>
            Vatika Pet Clinic
            <br />
            &
            <br />
            Surgery Centre
            <br />
            5, Ground Floor, E-1.1, Vatika India Next, Sector 82, Gurugram -
            122004
          </Typography>
        </div>
      </div>
    </div>
  );
}
