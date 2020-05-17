import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
// import Link from '@material-ui/core/Link';

import CardDonation from '../Components/CardDonation'
import { Link } from 'react-router-dom';
// import CardMapping from '../Components/CardMapping';

// import { useDispatch, useSelector } from 'react-redux';
// import { getAnimals } from '../../assets/redux/actions/animalsAction';

const useStyle = makeStyles((theme) => ({
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
    roots: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
    ourAnimals: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '44px',
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    margin: {
        margin: theme.spacing(3)
    },
    toHelp: {
        fontFamily: 'Lemonada',
        color: '#6C5434',
        cursor: 'pointer'
    },
    navLink: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '20vh',
        marginTop: '30px',
        marginBottom: '30px',
        fontFamily: 'Fredoka One',
    }
}));

export default function BodyDonation() {
    const classes = useStyle();
    const preventDefault = (event) => event.preventDefault();
    // const dispatch = useDispatch();
    // const animalsData = useSelector((state) => state.animalsData);
    // if (animalsData.length === 0) {
    //     dispatch(getAnimals());
    // }

    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    Donate to our zoo partners
                    </Typography>

                <Grid container justify="center" maxWidth="sm">
                    <Typography className={classes.toHelp}>
                        <h3>Help them providing better place and facilities for animals</h3>
                    </Typography>
                </Grid>

                <Grid container justify="center">
                    <Typography className={classes.toHelp}>
                        <h4>There are also various proeject to help animals that also need your help</h4>
                    </Typography>
                </Grid>

                <Grid container className={classes.margin} justify="center" spacing={2}>
                    <CardDonation />
                    {/* {animalsData.length !== 0 ? (
                        animalsData.data.map((_animals) => {
                            return <CardMapping animals={_animals} />;
                        })
                    ) : null} */}
                </Grid>
                <Grid className={classes.navLink} item container justify="center" lg={6} md={6} sm={6} xs={12} style={{ backgroundColor: '#AAE787' }}>
                    <Typography>
                        <Link href="#" onClick={preventDefault}>
                            {'Adopt our animals'}
                        </Link>
                    </Typography>
                </Grid>
                <Grid className={classes.navLink} item container justify="center" lg={6} md={6} sm={6} xs={12} style={{ backgroundColor: '#91BD78' }}>
                    <Typography>
                        <Link href="#" onClick={preventDefault}>
                            {'Feed our animals'}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
