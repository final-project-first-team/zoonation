import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom'

import CardDonation from '../Components/CardDonation';

const useStyle = makeStyles((theme) => ({
    root: {
        // CSS BODY
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    ourAnimals: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '44px',
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    ourAnimalsSm: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '34px',
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    adoptForBetter: {
        fontFamily: 'Lemonada',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '25px',
        display: 'flex',
        alignItems: 'center',
        color: '#6C5434',
        marginTop: theme.spacing(1)
    },
    giftText: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '21px',
        display: 'flex',
        alignItems: 'center',
        color: '#6C5434',
        marginTop: theme.spacing(1)
    },
    margin: {
        margin: theme.spacing(3)
    },
    text1: {
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        lineHeight: '65px',
        cursor: 'pointer',
        fontSize: '28px'
    },
    text2: {
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        lineHeight: '32.5px',
        cursor: 'pointer',
        fontSize: '20px'
    }
}));

export default function AnimalAdopt() {
    const classes = useStyle();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Hidden smDown>
                    <Typography className={classes.ourAnimals}>Donate to Our Zoo Partner</Typography>
                </Hidden>

                <Hidden mdUp>
                    <Typography className={classes.ourAnimalsSm}>Donate to Our Zoo Partner</Typography>
                </Hidden>
            </Grid>

            <Grid container justify="center">
                <Hidden smDown>
                    <Typography className={classes.adoptForBetter}>
                        Help them providing better place and facilities for animals
					</Typography>
                </Hidden>
            </Grid>

            <Grid container justify="center">
                <Typography className={classes.giftText}>
                    There are also various project to help animals that also need your help.
				</Typography>
            </Grid>

            <Grid container justify="center" className={classes.margin} spacing={2}>
                <CardDonation />
                <CardDonation />
                <CardDonation />
            </Grid>

            <Grid container display="flex" maxWidth="xl" style={{ marginBottom: '30px' }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#AAE787' }}>
                    <Hidden smDown>
                        <Typography className={classes.text1} /* style={{textDecoration:'none'}} */>
                            <Link to='/animal-adopt' style={{color:'#6C5434', textDecoration:'none'}}>Adopt our animals</Link>
                        </Typography>
                    </Hidden>

                    <Hidden mdUp>
                        <Typography className={classes.text2} /* style={{textDecoration:'none'}} */>
                            <Link to='/animal-adopt' style={{color:'#6C5434', textDecoration:'none'}}>Adopt our animals</Link>
                        </Typography>
                    </Hidden>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#91BD78' }}>
                    <Hidden smDown>
                        <Typography className={classes.text1}>
                            <Link to='/feeding-animals' style={{color:'#6C5434', textDecoration:'none'}}>Feed our animals</Link>
                        </Typography>
                    </Hidden>

                    <Hidden mdUp>
                        <Typography className={classes.text2}>
                            <Link to='/feeding-animals' style={{color:'#6C5434', textDecoration:'none'}}>Feed our animals</Link>
                        </Typography>
                    </Hidden>
                </Grid>
            </Grid>
        </div>
    );
}
