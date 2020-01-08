import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles({
  footer: {
    height: 50,
    background: '#333333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>
        Copyrights <CopyrightIcon fontSize="inherit" /> 2019 Vatika Pet Clinic
      </p>
    </div>
  );
}
