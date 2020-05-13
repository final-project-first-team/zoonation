import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import image from '../../assets/media/homepage.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../../assets/redux/actions/animalsAction';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    serachAndButton: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        textAlign: 'left',
        margin: theme.spacing(3)
    },
}));


// The example data is structured as follows:

const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
];

export default function BodyZooCons() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const animalsData = useSelector((state) => state.animalsData);
    if (animalsData.length === 0) {
        dispatch(getAnimals());
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.serachAndButton}>
                <Grid item lg={6} md={6} sm={6}>
                    <Button>Search Box</Button>
                </Grid>
                <Grid item lg={6} md={6} sm={6} style={{ textAlign: 'right' }}>
                    <Button
                        style={{
                            background: '#C4C4C4',
                            borderRadius: '10px',
                            fontFamily: 'Fredoka One',
                            color: '#6C5434'
                        }}
                    >
                        To help the animals and the zoos,
							<br />
							click here!
						</Button>
                </Grid>
            </div>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
