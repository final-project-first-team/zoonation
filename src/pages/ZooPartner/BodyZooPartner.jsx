import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';

import ProfilePartner from '../Components/ProfilePartner'
// import { Link } from 'react-router-dom';
// import ZooPartnerAct from '../Components/ZooPartnerAct';
import SingleSlider from '../Components/SingleSlider'
// import CardMapping from '../Components/CardMapping';

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
        fontSize: '20px',
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

export default function ZooPartner() {
    const classes = useStyle();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    Donate to Our Zoo Partner
                </Typography>
            </Grid>


            <Grid container>
                <Hidden smDown>
                    <Grid item lg={8} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Paper>
                            <img className={classes.image} alt="animals" src='https://dolanyok.com/wp-content/uploads/Kebun-Binatang-Ragunan-dEPAN.jpg' />
                        </Paper>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid item sm={12} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Paper>
                            <img className={classes.imageHidden} alt="animals" src='https://dolanyok.com/wp-content/uploads/Kebun-Binatang-Ragunan-dEPAN.jpg' />
                        </Paper>
                    </Grid>
                </Hidden>


                <Hidden smDown>
                    <Grid item lg={4} sm={4} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Grid item lg={12}>
                            <Paper elevation={0} style={{ background: '#6C5434', margin: '3px' }}>
                                <Button style={{ margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One' }} variant="contained" disableElevation>
                                    Donate Now
                        </Button>
                            </Paper>
                        </Grid>

                        <Grid item lg={12}>
                            <Paper elevation={0} style={{ background: '#6C5434', margin: '3px' }}>
                                <Button style={{ margin: '5px', width: '80%', fontSize: '24px', fontFamily: 'Fredoka One' }} variant="contained" disableElevation>
                                    Change Zoo
                        </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid container justify="center">
                        <Grid item sm={3}>
                            <Button style={{ margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One' }} variant="contained">
                                Donate Now
                        </Button>
                        </Grid>
                        <Grid item sm={3}>
                            <Button style={{ margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One' }} variant="contained">
                                Change Zoo
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
                            PROJECT AND ACTIVITIES IN THIS ZOO
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ margin: '30px' }}>
                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src='https://previews.123rf.com/images/chyball/chyball1604/chyball160400032/56188211-the-tigers-breeding-on-the-lawn-in-the-zoo-.jpg' />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                TIGER BREEDING
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src='https://img.freepik.com/free-photo/young-man-planting-tree-garden-as-earth-day-save-world-concept_28283-293.jpg?size=626&ext=jpg' />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                REFORESTATION
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src='https://www.nutreco.com/globalassets/nutreco-corporate1/homepage/video-block/still.jpg' />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                FEEDS PLANTATION
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={6} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://www.nationalparks-worldwide.com/images/animals/eaf/rhino-sunset.jpg" />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', padding: '10px' }}>
                                RHINO SANCTUARY
                                </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </div>


    )
}