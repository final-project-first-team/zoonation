import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import CardForAdopt from '../Components/CardForAdopt';

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
        marginTop: theme.spacing(1),
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
        marginTop: theme.spacing(1),
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
        fontSize: '20px',
    },
}))

export default function AnimalAdopt() {
    const classes = useStyle();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Hidden smDown>
                <Typography className={classes.ourAnimals}>
                    Adopt an Animal Now
                </Typography>
                </Hidden>

                <Hidden mdUp>
                    <Typography className={classes.ourAnimalsSm}>
                        Adopt an Animal Now
                    </Typography>  
                </Hidden>
            </Grid>

            <Grid container justify="center">
                <Hidden smDown>
                    <Typography className={classes.adoptForBetter}>
                    You’ll be protecting precious habitats. 
                    <br />Adopt for a better future from IDR 150.000 a month.
                    </Typography>
                </Hidden>
            </Grid>

            <Grid container justify="center">
                <Typography className={classes.giftText}>
                Zoonations  adoption also makes a fantastic gift. 
                Choose from our range of adoption animals below.
                </Typography>
            </Grid>

            <Grid container justify="center" className={classes.margin} spacing={2}>
                <CardForAdopt />
                <CardForAdopt />
                <CardForAdopt />
                {/* <CardForAdopt />
                <CardForAdopt />
                <CardForAdopt /> */}
            </Grid>

            <Grid container display='flex' maxWidth='xl' style={{ marginBottom: '30px'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#AAE787'}}>
                    <Hidden smDown>
                        <Typography className={classes.text1}>
                            <Link color="inherit">Make a donation to zoonations today</Link>
                        </Typography>
                    </Hidden>

                    <Hidden mdUp>
                        <Typography className={classes.text2}>
                            <Link color="inherit">Make a donation to zoonations today</Link>
                        </Typography>
                    </Hidden>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ background: '#91BD78'}}>
                    <Hidden smDown>
                    <Typography className={classes.text1}>
                    <Link color="inherit">Feed our animals</Link>
                    </Typography>
                    </Hidden>

                    <Hidden mdUp>
                    <Typography className={classes.text2}>
                    <Link color="inherit">Feed our animals</Link>
                    </Typography>
                    </Hidden>
                    
                </Grid>
            </Grid>
            

            
        </div>
        
    )
}