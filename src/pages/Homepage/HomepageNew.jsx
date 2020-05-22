import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paw from './paw.png';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	zoonations: {
		flexGrow: 1,
		fontFamily: 'Montserrat Subrayada, sans-serif',
		color: '#6C5434',
		textAlign: 'left'
	}
}));

export default function HomepageNew() {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Typography variant="h4" className={classes.zoonations}>
                    Z<img src={Paw} style={{ maxHeight: '26px' }} />ONATIONS
									</Typography>

            </AppBar>
        </div>
    )
}
