import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import MenuGenDon from '../Components/MenuGenDon'
import Paw from '../Components/paw.png';
import HomeIcon from '@material-ui/icons/Home';

import { useDispatch, useSelector } from 'react-redux';
import { getZoos } from '../../assets/redux/actions/zooActions';

const useStyles = makeStyles((theme) => ({
    root: {
        //CSS BODY
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        height: '100vh',
        width: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    ourAnimals: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '150px',
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    home: {
        display: 'flex',
        color: '#6C5434',
        fontSize: '100px',
    },
    margin: {
        margin: theme.spacing(3)
    },
}));

export default function BodyGenDon() {
    const classes = useStyles();
    // const dispatch = useDispatch();
    // const zooData = useSelector((state) => state.zooData);
    // if (zooData.length === 0) {
    //     dispatch(getZoos());
    // }
    

    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Link href="/" >
                <HomeIcon justify="center" className={classes.home} />
            </Link>
            <Grid container justify="center" /* spacing={1} */>
                <Typography className={classes.ourAnimals}>
                    Z<img src={Paw} style={{ maxHeight: '170px' }} />Odonations
                    </Typography>

                <Grid container justify="center" spacing={1} maxWidth="sm">
                    <MenuGenDon />
                </Grid>

                <Grid container className={classes.margin} justify="center" spacing={5}>
                    <Grid item>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
