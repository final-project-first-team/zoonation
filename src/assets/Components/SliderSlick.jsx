import React from 'react';
import Slider from 'react-slick';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

export default function SliderSlick(props) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					dots: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	const useStyles = makeStyles((theme) => ({
		image: {
			margin: 'auto',
			display: 'block',
			maxWidth: '90%',
			width: '90%',
			maxHeight: '300px',
			height: '300px'
		},
		toHelp: {
			fontFamily: 'Lemonada',
			color: '#6C5434',
			cursor: 'pointer'
		}
	}));
	console.log(props.zoo.data);
	const zooData = props.zoo.data;
	const classes = useStyles();
	return (
		<div>
			<Slider {...settings}>
				{zooData !== undefined && zooData.length !== 0 ? (
					zooData.map((zoo) => {
						return (
							<div>
								<Link
									to={`/zoo-partner/${zoo._id}`}
									className={classes.toHelp}
									style={{ textDecoration: 'none' }}
								>
									<img className={classes.image} src={zoo.photo} />
									<Typography>
										<Button
											size="small"
											color="inherit"
											style={{ fontFamily: 'roboto', color: '#6C5434' }}
										>
											{zoo.zooName}
										</Button>
									</Typography>
								</Link>
							</div>
						);
					})
				) : null}
			</Slider>
		</div>
	);
}
