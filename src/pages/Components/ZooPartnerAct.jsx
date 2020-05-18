import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';

// import ProfilePartner from '../../component/ProfilePartner'
// import { Link } from 'react-router-dom';
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
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '20vh',
        margin: theme.spacing(3),
        fontFamily: 'Fredoka One',
    }
}));

export default function ZooPartnerAct() {
    const classes = useStyle();
    const preventDefault = (event) => event.preventDefault();
    // const dispatch = useDispatch();
    // const animalsData = useSelector((state) => state.animalsData);
    // if (animalsData.length === 0) {
    //     dispatch(getAnimals());
    // }

    return (
        <div>
            <Grid container spacing={3} justify='spaceAround' className={classes.navLink}>
                <Grid /* className={classes.navLink} */ item container /* justify='space-around' */ lg={3} md={3} sm={6} xs={12}>
                    <Paper>
                        Tiger Breeding
                </Paper>
                </Grid>
                <Grid /* className={classes.navLink} */ item container /* justify='space-around' */ lg={3} md={3} sm={6} xs={12}>
                    <Paper>
                        Reforestation
                </Paper>
                </Grid>
                <Grid /* className={classes.navLink} */ item container /* justify='space-around' */ lg={3} md={3} sm={6} xs={12}>
                    <Paper>
                        Feeds Plantation
                </Paper>
                </Grid>
                <Grid /* className={classes.navLink} */ item container /* justify='space-around' */ lg={3} md={3} sm={6} xs={12}>
                    <Paper>
                        Rhino Sanctuary
                </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
