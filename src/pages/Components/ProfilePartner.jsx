import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import tileData from './tileData';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        direction: "row",
        justify: "spaceAround",
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperStories:{
        padding: theme.spacing(5),
    }
}));
const tileData = [
    {
        img: 'https://www.arenawisata.co.id/wp-content/uploads/2018/12/kepoan.com-10-tempat-wisata-kebun-binatang-terbaik-yang-ada-di-dunia-765x510-660x405.jpg',
        title: 'Image',
        author: 'Zoo',
    },
]

export default function ProfilePartner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify='center' spacing={3}>

                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Paper className={classes.paper}>
                        <GridList>
                            {tileData.map((tile) => (
                                <GridListTile key={tile.img}>
                                    <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Paper>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="contained"
                    >
                        <Button>Donate Now</Button>
                        <Button>Change Zoo</Button>
                    </ButtonGroup>
                </Grid>

            </Grid>

            <Grid container className={classes.paperStories} justify='center' /* spacing={5} */>
                <Paper>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus facere debitis sit consequatur suscipit similique dolores accusantium ipsa unde! Dolorem, voluptates asperiores! Sunt nesciunt neque quibusdam? Adipisci, ipsum expedita!
                </Typography>
                </Paper>
            </Grid>
        </div >
    );
}
