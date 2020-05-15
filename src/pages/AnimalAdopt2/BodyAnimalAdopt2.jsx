import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
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
    imageHidden: {
        margin: 'auto',
		display: 'block',
		maxWidth: '100%',
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
    forP: {
        textAlign: 'left',
        fontSize:'20px',
        fontFamily: 'Raleway',
        color: '#6C5434',
        padding: '15px',
    },
    img: {
        width: '250px',
        height: '200px',
        alignItems: 'center',
        padding: '5px',
        margin: '3px',
    }
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
                <Hidden smDown>
                <Grid item lg={8} style={{ background: '#ECE4BA', padding: '10px' }}>
                    <Paper> 
                        <img className={classes.image} alt="animals" src="https://wallpaperaccess.com/full/2136603.jpg" />
                    </Paper>
                </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid item sm={12} style={{ background: '#ECE4BA', padding: '10px' }}>
                    <Paper> 
                        <img className={classes.imageHidden} alt="animals" src="https://wallpaperaccess.com/full/2136603.jpg" />
                    </Paper>
                </Grid>
                </Hidden>
                

            <Hidden smDown>
                <Grid item lg={4} sm={4} style={{ background: '#ECE4BA', padding: '10px'}}>
                    <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin: '3px'}}>
                        <Button style={{margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One'}} variant="contained" disableElevation>
                            IDR 150.000
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin:'3px'}}>
                        <Button style={{margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One'}} variant="contained" disableElevation>
                            IDR 200.000
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin: '3px'}}>
                        <Button style={{margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One'}} variant="contained" disableElevation>
                            IDR 250.000
                        </Button>
                    </Paper>
                </Grid>

                <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin: '3px'}}>
                        <Button style={{margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One'}} variant="contained" disableElevation>
                            ADOPT
                        </Button>
                    </Paper>
                </Grid>
                </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid container justify="center">
                    <Grid item sm={3}>
                        <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One'}} variant="contained">
                            IDR 150.000
                        </Button>
                    </Grid>
                    <Grid item sm={3}>
                    <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One'}} variant="contained">
                            IDR 200.000
                        </Button>
                    </Grid>
                    <Grid item sm={3}>
                    <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One'}} variant="contained">
                            IDR 250.000
                        </Button>
                    </Grid>
                    <Grid item sm={3}>
                    <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One'}} variant="contained">
                            ADOPT
                        </Button>
                    </Grid>
                </Grid>
                </Hidden>
                
                <Grid item lg={12} sm={12} style={{ background: '#ECE4BA', margin: '5px' }}>
                    <Paper elevation={0}>
                        <p className={classes.forP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia ut, voluptate voluptatum adipisci culpa? Molestiae nostrum est adipisci! Quae distinctio maiores placeat perferendis rerum debitis exercitationem, tenetur maxime impedit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam suscipit quae officiis voluptas commodi nostrum, facere rem consectetur saepe modi asperiores placeat nihil illum laborum magnam, alias dignissimos accusamus?
                        </p>
                    </Paper>
                </Grid>

                <Grid container justify="center" style={{ background: '#AAE787' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography style={{ fontFamily: 'Fredoka One', fontSize: '28px', color: '#6C5434', lineHeight: '52px' }}>
                        PROTECT THIS INCREDIBLE ANIMALS, AND RECIEVE
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{margin: '30px'}}>
                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px'}}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://i.ebayimg.com/images/g/4vMAAOSwW7ddh6OK/s-l1600.jpg" />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                PLUSH TOY
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://image.freepik.com/free-vector/set-animals-sticker_1308-23424.jpg"/>
                            </div>
                                <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                    ANIMAL STICKERS SET
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square> 
                            <div>
                                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyzaXKdnLeqqGqAbkAw-ewfrgsfv17ZvA7R4mX_yrS51XfJALY&usqp=CAU"/>
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                    MONTHLY MAGAZINE
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRgupHw2ae5Nhimt6VSv1dapHiUiYE2UjdiJmliUQPiCkr2rve&usqp=CAU"/>
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                    CERTIFICATE
                                </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>


    )
}