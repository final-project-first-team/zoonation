import React from 'react';
import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
		// CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
        flexDirection: 'row',
	},
	ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
    },
    adoptForBetter: {
		fontFamily: 'Lemonada',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '18px',
		lineHeight: '25px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
        marginTop: theme.spacing(1),
	},
    p: {
        fontFamily: 'Raleway',
        fontSize: '18px',
        textAlign: 'justify'
    }
}));

export default function AnimalsNews() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    ANIMAL AND ZOO NEWS
                </Typography>
            </Grid>

            <Grid container justify="center">
					<Typography className={classes.adoptForBetter}>
                        Fresh news about animals, zoos and conservations too keep you updated
					</Typography>
			</Grid>

            <Grid container justify="center">
                <Grid item lg={5} md={5} sm={12} xs={12} style={{ background: '#91BD78', margin: '20px', padding: '10px', minHeight: '100%' }}>
                        <img src="https://i.pinimg.com/originals/dc/53/7d/dc537d9ba4b05ff85926aa98d9a3596f.jpg" style={{ width: '100%', height: 'auto', padding: '5px' }}/>
                            <Typography variant="h5" style={{ margin: '10px', fontFamily: 'Fredoka One', color: '#6C5434' }}>
                                WELCOME DINGO! OUR NEW BORN TIGER
                            </Typography>
                    <p className={classes.p}>
                        Taman Safari Indonesia has welcomed a tiger cub. The zoo director Dr. Kevin Lazarus said the cub were birthed on April 12.
                        <br /><br />"The cub and their 11-year-old mother are doing fine and in stable conditions. The cub weigh between 700g and 900g. The zoo now has eight tigers in total," he said in a statement.
                        <br /><br />Dr. Lazarus said the cub would stay with their mother, whom the zookeepers called "Baby", for 18 months.
                        "They are being kept 'safe and comfortably' in isolation and monitored regularly," he said, adding that the mother was also born at the zoo. 
                    </p>
                </Grid>

                <Grid item lg={5} md={5} sm={12} xs={12} style={{ background: '#91BD78', margin: '20px', padding: '10px', minHeight: '100%' }}>
                    <Typography variant="h5" style={{ margin: '10px', fontFamily: 'Fredoka One', color: '#6C5434' }}>
                            A RENOVATION AT SURABAYA ZOO
                        </Typography>
                    <p className={classes.p}>
                        From the planning of a new continent full of habitats to general upkeep, there are dozens of projects going on at the Surabaya Zoo.
                        <br /><br />But the work is more than repairing what's broken. They want to make sure that each area is safe and in the best shape for both visitors and animals. For example, the grizzly exhibit is expanding and instead of a moat acting as a barrier, there will be a glass wall so visitors can get closer to the animal.
                        <br /><br />"Two years ago when this habitat was built, we didn't have as much understanding and knowledge of what it takes to take care of a grizzly bear the proper way as we do now. So as we gained more knowledge we want to make sure we're utilizing the best techniques," Animal Management Supervisor Mr. Danu said. 
                    </p>
                        <img src="https://statik.tempo.co/data/2016/05/14/id_506357/506357_620.jpg" style={{ width: '100%', height: 'auto', padding: '5px' }} />
                </Grid>              


                
            </Grid>
        </div>
    )
}