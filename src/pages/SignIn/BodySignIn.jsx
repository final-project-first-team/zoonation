import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

// NOTE:
// LINK EMAIL DAN PASSWORD MASIH DEFAULT BIRU KALO DI KLIK. ENTAH HARUS GANTI DIMANA
// UDAH RESPONSIVE, TAPI BELUM TERLALU ENAK DILIAT, MOHON REVISI KALO ADA YANG BISA. DI CSS PAPER.

const useStyles = makeStyles((theme) => ({
    root: {
        // INI CSS SI BODY UTAMA YANG KUNING ITU
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      height: "100%",
      alignItems: "center",
      textAlign: "center",
      '& > *': {
        //   INI CSS SI PAPER YA GUYS. HEIGHT NYA 60VH SOALNYA NGARUH KE POSISI BUTTON SEJAJAR
          display: 'flex',
          flexWrap: 'wrap',
          width: '500px',
          minHeight: "60vh",
          flexDirection: 'row',
          backgroundColor: 'rgba(255, 255, 255, 0.39)',
      },
      submit: {
          borderRadius: '10px',
      }
    },
  }));

export default function BodySignIn() {
    const classes = useStyles();

    return (
      <div className={classes.root} style={{ background: '#ECE4BA' }}>
          
        <Paper elevation={0} >
              <Container component="main" maxWidth="sm"
            style={{alignItems: 'center', marginTop: '35px'}}>
                <Typography component="h1" variant="h5" style={{fontFamily: 'Lemonada, cursive'}}>
                    Welcome Back,
                </Typography>
                <br />< br/>
                <Typography component="h1" variant="h5" style={{fontFamily: 'Raleway, sans-serif'}}>
                    The Animals are excited 
                    for you to visit them again!
                </Typography>
                <br />
                <Typography component="h3" variant="subtitle1" style={{paddingTop: '8px'}}>
                    <i>Not A Member Yet?</i>
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    style={{borderRadius: "3px",
                    fontFamily: 'Roboto, sans-serif',
                    backgroundColor:"#60B6D1",
                    }}
                >
                    Click Here to Join Us
                </Button>
          </Container>
        </Paper>
           
        <Paper elevation={0}>
            <Container component="main" maxWidth="sm"
            style={{alignItems: 'center'}}>
        <CssBaseline />

      <div style={{marginTop: '35px'}}>
        <Typography component="h1" variant="h5" style={{fontFamily: 'Fredoka One, cursive'}}>
          Sign In
        </Typography>
        <form color="inherit" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            style={{borderRadius: "3px",
            fontFamily: 'Roboto, sans-serif',
            backgroundColor:"#60B6D1",
            }}
          >
            Sign In
          </Button>
          
        </form>
      </div>
    </Container>
            </Paper>


            
            
            
        
           
            
      </div>
    );
  }

