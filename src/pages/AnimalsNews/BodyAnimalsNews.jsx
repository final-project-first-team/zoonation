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
		fontSize: '20px',
		lineHeight: '25px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
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
                    Animals News
                </Typography>
            </Grid>

            <Grid container justify="center">
					<Typography className={classes.adoptForBetter}>
                        Fresh news about animals, zoos and conservations too keep you updated
					</Typography>
			</Grid>

            <Grid container justify="center">
                <Grid item lg={5} md={5} sm={5} style={{ background: '#F3EFD5', margin: '20px', padding: '10px', borderRadius: '10px', height: '100%' }}>
                    <img src="https://i.pinimg.com/originals/dc/53/7d/dc537d9ba4b05ff85926aa98d9a3596f.jpg" style={{ width: '100%', height: '300px', borderRadius: '10px'}}/>
                    <Typography variant="h5" style={{ margin: '10px', fontFamily: 'Fredoka One', color: '#6C5434' }}>
                        WELCOME DINGO! OUR NEW BORN TIGER.
                    </Typography>
                    <p className={classes.p}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque eligendi rem quod quo deleniti vitae ad, esse omnis sit tenetur repellat officiis velit in, aliquid necessitatibus consectetur repudiandae iste?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis ab rerum facere aut illum sit dicta, nostrum nisi sed error veritatis optio dignissimos cupiditate alias deserunt debitis iusto laboriosam.
                    </p>
                    <Button variant="outlined" style={{fontFamily: 'Fredoka One', color: '#6C5434'}}>
                        <b>More</b>
                    </Button>
                </Grid>

                <Grid item lg={5} md={5} sm={5} style={{ background: '#F3EFD5', margin: '20px', padding: '10px', borderRadius: '10px', height: '100%' }}>
                    <img src="https://www.acehtoday.com/files/images/20200515-mei-15-makanan-kebun-binatang.jpeg" style={{ width: '100%', height: '300px', borderRadius: '10px'}} />
                    <Typography variant="h5" style={{ margin: '10px', fontFamily: 'Fredoka One', color: '#6C5434' }}>
                        A COUNSELING IN BAZOGA
                    </Typography>
                    <p className={classes.p}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque eligendi rem quod quo deleniti vitae ad, esse omnis sit tenetur repellat officiis velit in, aliquid necessitatibus consectetur repudiandae iste?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis ab rerum facere aut illum sit dicta, nostrum nisi sed error veritatis optio dignissimos cupiditate alias deserunt debitis iusto laboriosam.
                    </p>
                    <Button variant="outlined" style={{fontFamily: 'Fredoka One', color: '#6C5434'}}>
                        <b>More</b>
                    </Button>
                </Grid>              


                
            </Grid>
        </div>
    )
}