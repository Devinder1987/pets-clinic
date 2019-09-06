import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home/Home';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';
import Facilites from './Facilities/Facilities';
const useStyles = makeStyles(theme => ({
  pageRoot: {
    paddingTop: 58,
    maxWidth: 1200,
    margin: 'auto'
  }
}));

export default function Pages() {
  const classes = useStyles();
  return (
    <div className={classes.pageRoot}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/facilities" component={Facilites} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
