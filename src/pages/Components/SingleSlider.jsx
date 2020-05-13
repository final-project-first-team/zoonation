import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';


import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import image from '../../assets/media/homepage.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { getAnimals } from '../../assets/redux/actions/animalsAction';

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        // minHeight: '400px'
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
		marginTop: theme.spacing(10)
	},
}));


// The example data is structured as follows:

const tileData = [
    {
        img: 'https://img.freepik.com/free-vector/zoo-petting-zoo-cartoon-design-open-zoo-wild-animals-visitors_33099-173.jpg?size=626&ext=jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://img.freepik.com/free-vector/animals-theme-template-vector-illustration_53876-56693.jpg?size=626&ext=jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
];

export default function SingleSlider(/* props */) {
    const classes = useStyles();
    // const currentZoo = props.zooData.data
    
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5} /* cellHeight='450' */>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} /* style={{maxHeight:'300px', minHeight:'150px', maxWidth:'350px', minWidth:'150px'}} */ />
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
