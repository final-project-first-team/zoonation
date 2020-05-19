import React from 'react';
import { makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

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
}));

export default function AboutUs() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ background: '#ECE4BA', padding: '5px' }}>
             <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    About Us
                </Typography>
            </Grid>   

            <Grid container justify="center">
                <Typography className={classes.adoptForBetter}>
                    Greetings! people behind Zoonations
                </Typography>
			</Grid>

            <Grid item md={12} sm={12} xs={12} lg={12} xl={12} style={{ textAlign:'center', background: '#6C5434', height:'5px'}}></Grid>
           
            {/* Targhib */}
            <Grid container style={{ padding: '5px', background: 'transparent'}}>
                <Grid item md={8} style={{background: 'transparent'}}>
                    <Typography variant="h3" style={{ fontFamily: 'Damion'}}>
                        Targhib Ibrahim
                    </Typography>
                    <Typography>
                        <p style={{border: 'dotted #6C5434', fontFamily: 'Raleway', borderRadius: '10px', margin: '10px', padding:'10px', height: '220px', textAlign: 'right'}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sed aliquid doloribus quo perspiciatis eveniet autem iure ipsa vitae libero aut obcaecati commodi amet, odio magnam molestias ipsam a.
                        </p>
                    </Typography>
                </Grid>

                <Hidden mdDown>
                    <Grid item md={4} style={{background: 'transparent'}}>
                        <img src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/340?cb=20170716092103"
                        style={{ width: '100%', height: '300px', padding: '10px', borderRadius: '50%' }} />
                    </Grid>
                </Hidden>
            </Grid>

            < br/>

            {/* Azil */}
            <Grid container style={{ padding: '5px', background: 'transparent'}}>
                <Hidden mdDown>
                    <Grid item md={4} style={{background: 'transparent'}}>
                            <img src="https://cdn1-production-images-kly.akamaized.net/P85Ddv6JF2FbVJeoCgCelmhtt4U=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg"
                            style={{ width: '100%', height: '300px', padding: '10px', borderRadius: '50%'}} />
                        </Grid>
                    </Hidden>

                    <Grid item md={8} style={{background: 'transparent'}}>
                        <Typography variant="h3" style={{ fontFamily: 'Damion'}}>
                            Azil 
                        </Typography>
                        <Typography>
                            <p style={{border: 'dotted #6C5434', fontFamily: 'Raleway', borderRadius: '10px', margin: '10px', padding:'10px', height: '220px', textAlign: 'left'}}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sed aliquid doloribus quo perspiciatis eveniet autem iure ipsa vitae libero aut obcaecati commodi amet, odio magnam molestias ipsam a.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>

                < br/>

                {/* Yvonne */}
                <Grid container style={{ padding: '5px', background:'transparent'}}>
                <Grid item md={8} style={{background: 'transparent'}}>
                    <Typography variant="h3" style={{ fontFamily: 'Damion'}}>
                        Yvonne Armelia
                    </Typography>
                    <Typography>
                        <p style={{border: 'dotted #6C5434', fontFamily: 'Raleway', borderRadius: '10px', margin: '10px', padding:'10px', height: '220px', textAlign: 'right'}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt sed aliquid doloribus quo perspiciatis eveniet autem iure ipsa vitae libero aut obcaecati commodi amet, odio magnam molestias ipsam a.
                        </p>
                    </Typography>
                </Grid>

                <Hidden mdDown>
                    <Grid item md={4} style={{background: 'transparent'}}>
                        <img src="https://cdn.idntimes.com/content-images/duniaku/post/20191227/prestasi-sakura-0-f72d3b9a3c8134260a7b68718263b1f4_600x400.jpg"
                        style={{ width: '100%', height: '300px', padding: '10px', borderRadius: '50%'}} />
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item md={12} sm={12} xs={12} lg={12} xl={12} style={{ width: '100%', background: '#6C5434', height:'5px', marginBottom: '8px'}}></Grid>
        </div>
    )
}