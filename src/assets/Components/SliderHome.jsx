import React from "react";
import Slider from "react-slick";
// import { Grid } from "@material-ui/core";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

export default function SliderSlick(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };
    const useStyles = makeStyles((theme) => ({
        image: {
            margin: 'auto',
            display: 'block',
            maxWidth: '600px',
            // maxHeight: '',
            height: '100%'
        },
        toHelp: {
            fontFamily: 'Lemonada',
            color: '#6C5434',
            cursor: 'pointer'
        }
    }));
    // console.log(props.zoo.data);
    // const zooData = props.zoo.data;
    const classes = useStyles();
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className={classes.image}
                        src='https://www.indianapoliszoo.com/wp-content/uploads/2020/02/Sophi-and-Zahara-Carla-Knapp.jpg' /* {zoo.photo} */ />                 
                </div>      
            </Slider>
        </div>
    );
}
