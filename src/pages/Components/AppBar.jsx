import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#6C5434',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Damion, cursive',
    color: '#6C5434',
  },
  zoonations: {
    flexGrow: 1,
    fontFamily: 'Montserrat Subrayada, sans-serif',
    color: '#6C5434',
  },
  fredokaFont: {
    flexGrow: 1,
    fontFamily: 'Fredoka One, cursive',
    color: '#6C5434',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#AAE787' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.zoonations}>
            ZOONATIONS
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="#">
              Zoos and Conservations
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="#">
              Our Animals
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="#">
              Animals News
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="#">
              About Us
            </Link>
          </Typography>
          <Button color="inherit" className={classes.fredokaFont}>Become A Member</Button>
          <Typography variant="h5" className={classes.fredokaFont}>
            |
          </Typography>
          <Button color="inherit" className={classes.fredokaFont}>Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}