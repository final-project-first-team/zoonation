import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from 'react-router-dom';

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
    image: {
		margin: 'auto',
		display: 'block',
		maxWidth: '50vw',
		maxHeight: '50vh'
	},
    ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
        marginTop: theme.spacing(10)
    },
}))

export default function AnimalAdopt2() {
    const classes = useStyle();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    Adopt a Tiger
                </Typography>
            </Grid>

            <Grid container>
                <Grid item lg={8} style={{ background: 'red', padding: '10px' }}>
                    <Paper> 
                        <img className={classes.image} alt="animals" src="https://wallpaperaccess.com/full/2136603.jpg" />
                    </Paper>
                </Grid>

                <Grid item lg={4} style={{ background: 'yellow', padding: '10px' }}>
                    <Paper elevation={0}>
                        hello juga
                    </Paper>
                </Grid>

                <Grid item lg={8} style={{ background: 'red', padding: '10px' }}>
                    <Paper elevation={0}>
                        hello
                    </Paper>
                </Grid>

                <Grid container justify="center" maxWidth="lg" style={{ background: '#AAE787' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography>
                        PROTECT THIS INCREDIBLE ANIMALS, AND RECIEVE
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center">
                    <Grid item lg={3} style={{ background: 'yellow' }}>
                        <Paper>
                            hehe
                        </Paper>
                    </Grid>

                    <Grid item lg={3} style={{ background: 'yellow' }}>
                        <Paper>
                            hehe
                        </Paper>
                    </Grid>

                    <Grid item lg={3} style={{ background: 'yellow' }}>
                        <Paper>
                            hehe
                        </Paper>
                    </Grid>

                    <Grid item lg={3} style={{ background: 'yellow' }}>
                        <Paper>
                            hehe
                        </Paper>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>


    )
}