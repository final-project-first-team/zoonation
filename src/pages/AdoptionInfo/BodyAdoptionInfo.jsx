import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';;

const useStyles = makeStyles((theme) => ({
    root: {
        // INI CSS BODY
      display: 'flex',
      flexWrap: 'wrap',
      height: "auto",
      width: "auto",
      alignItems: "center",
      textAlign: "center",
      flexDirection: 'row',
      
      '& > *': {
        //   INI CSS 2 KOTAK DALAM BODY
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          minHeight: "95vh",
          alignItems: 'center',
          padding: '10px',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, 0.39)',
      },
    },
    forAvatar: {
        background: 'red',
        borderRadius: '50%',
        width: '140px',
        height: '140px',
        margin: theme.spacing(1),
        background :'#D0C89E',
    },
    buttons: {
        margin: theme.spacing(1),
        width: '80%',
        fontFamily: 'Fredoka One, cursive',
    },
    margin: {
        margin: theme.spacing(1),
    }
  }));

export default function BodyProfileInfo() {
    const classes = useStyles();
        return (
            <div className={classes.root} style={{ background: '#ECE4BA' }}>
                <Grid item lg={4} md={4} xs={12} style={{margin: '25px'}}>
                    <div className={classes.forAvatar}>
                        
                    </div>
                    
                    <div>
                        <Button     
                            size="small"
                            className={classes.buttons}
                            style={{fontSize: '18px'}}>
                            <span>Welcome,</span>
                        </Button>
                        <form>
                            <Button
                                variant="contained"
                                size="small"
                                className={classes.buttons}
                                style={{background: '#D0C89E'}}>
                                <Link href="#" color="inherit">
                                Change Avatar
                                </Link>
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                className={classes.buttons}
                                style={{background: '#D0C89E'}}>
                                <Link href="#" color="inherit">
                                Profile Info
                                </Link>
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                className={classes.buttons}
                                style={{background: '#D0C89E'}}>
                                <Link href="#" color="inherit">
                                Adoption Info
                                </Link>
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                className={classes.buttons}
                                style={{background: '#D0C89E'}}>
                                <Link href="#" color="inherit">
                                Redeem Points
                                </Link>
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                className={classes.buttons}
                                style={{background: '#D0C89E'}}>
                                <Link href="#" color="inherit">
                                Logout
                                </Link>
                            </Button>
                        </form>
                    </div>
                </Grid>

                <Grid item lg={7} md={7} xs={12} style={{margin: '25px'}} >
                    <Container maxWidth="sm">
                        <Typography variant="h5"
                            style={{fontFamily: 'Fredoka One, cursive',
                            textAlign: 'left'}}>
                            Adoption Info
                        </Typography>
                    <form>
                    <div style={{fontFamily: 'Fredoka One, cursive',
                                background: '#D0C89E',
                                textAlign: 'left'}}>
                        <p>Here's your animals doing. They're happy and healthy because of you!</p>
                    </div>
                    </form>

                    </Container>
                </Grid>
            </div>
        )
    }