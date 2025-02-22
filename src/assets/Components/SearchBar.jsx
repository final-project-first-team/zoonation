import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(2),
    backgroundColor: fade(theme.palette.common.white, 0.50),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.70),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    fontFamily: 'Raleway',
    color: '#6C5434',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '23ch',
      '&:focus': {
        width: '26ch',
      },
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Animal"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    </div>
  );
}