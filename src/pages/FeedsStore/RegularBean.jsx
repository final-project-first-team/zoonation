import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
	image: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));

export default function RegularMeat() {
	const classes = useStyles();

	return (
		<Fragment>
			<Grid item>
				<Grid item>
					<Button variant="text" size="small" style={{ width: '100%', justifyContent: 'left' }}>
						<Avatar
							alt=""
							src="https://i.ibb.co/SB8X4d6/pngfind-com-peanut-png-756448.png"
							style={{ marginRight: '5%' }}
							className={classes.image}
						/>
						<Typography variant="caption" style={{ textAlign: 'left' }}>
							Regular Bean
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</Fragment>
	);
}
