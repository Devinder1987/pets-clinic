import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    zIndex: 100,
    width: '100%'
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    padding: '16px 8px'
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: '84vw',
    maxWidth: 320
  },
  link: {
    textDecoration: 'none',
    width: '100%'
  }
}));

const navBarList = [
  {
    linkText: 'Home',
    linkUrl: '/'
  },
  {
    linkText: 'About Us',
    linkUrl: '/about'
  },
  {
    linkText: 'Services',
    linkUrl: '/services'
  },
  {
    linkText: 'Facilities',
    linkUrl: '/facilities'
  },
  {
    linkText: 'Contact Us',
    linkUrl: '/contact-us'
  }
];
export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Link
        to={'/'}
        className={classes.menuHeader}
        underline="none"
        color="textPrimary"
      >
        <Typography variant="h5" className={classes.title} color="primary">
          Vatika Pets Clinic
        </Typography>
      </Link>
      <Divider />
      <List>
        {navBarList.map((item, index) => (
          <Fragment key={item.linkText}>
            <ListItem button component="a" href={item.linkUrl}>
              <ListItemText primary={item.linkText} color="textPrimary" />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            Vatika Pets Clinic
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="contact"
            href="contact-us"
          >
            <img alt={'call'} src="/assert/icons/callCenter.svg" />
          </IconButton>
        </Toolbar>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
      </AppBar>
    </div>
  );
}
