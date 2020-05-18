import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextArea from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyle = makeStyles((theme) => ({
    root: {
		// CSS BODY
		display: 'flex',
		flexWrap: 'wrap',
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row'
    },
    ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    adoptForBetter: {
		fontFamily: 'Lemonada',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '20px',
		lineHeight: '25px',
		display: 'flex',
		alignItems: 'center',
		color: '#6C5434',
		marginTop: theme.spacing(1)
	},
}))

export default function AnimalAdopt3() {
    const classes = useStyle();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
             <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    Payment Method
                </Typography>
            </Grid>

            <Grid container justify="center">
					<Typography className={classes.adoptForBetter}>
					    Adopt. Together We Save Lives.
					</Typography>
			</Grid>

            <Grid container justify="center">
                    <Grid item md={7} style={{ background: '#6C5434', height: '100%', margin: '20px', padding: '20px'}}>
                        <Grid item md={12} style={{ background: '#C4C4C4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px', color: '#6C5434'}}>
                            Secure Form Payment
                        </Grid>

                        <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px'}}>
                            <TextField 
                            label="Name"
                            fullWidth
                            style={{background: '#C4C4C4', textAlign: 'center'}}></TextField>
                        </Grid>

                        <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px'}}>
                            <TextField 
                            label="Email"
                            fullWidth
                            style={{background: '#C4C4C4', textAlign: 'center'}}></TextField>
                        </Grid>

                        <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px'}}>
                            <TextField 
                            label="Phone"
                            fullWidth
                            style={{background: '#C4C4C4', textAlign: 'center'}}></TextField>
                        </Grid>

                        <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px'}}>
                            <TextArea 
                            placeholder="Send a personal message to your animal keeper:"
                            style={{background: '#C4C4C4', 
                            textAlign: 'left',
                            fontFamily: 'Raleway', fontSize: '14px', 
                            width: '50vw', height: '25vh'}}></TextArea>
                        <Grid item md={12}>
                            <Button size="large" variant="outlined"
                            style={{margin: '10px', color: '#6C5434'}}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
  
                    </Grid>
                    
                    <Grid item md={4} style={{ background: '#6C5434', height: '100%', margin: '20px', padding: '20px'}}>
                        <Grid item md={12} style={{ background: '#C4C4C4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px', color: '#6C5434'}}>
                                Choose Your Payment Method
                            </Grid>

                        <Grid item md={12} style={{ background: '#F6F4E4' }}>
                        <FormControl component="fieldset" style={{ margin: '10px'}}>
                            <FormLabel component="legend">Your payment is secured</FormLabel>
                            <RadioGroup aria-label="payment" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="ATM" control={<Radio />} label="ATM Transfer" />
                                <FormControlLabel value="CC" control={<Radio />} label="MasterCard / VISA" />
                                <FormControlLabel value="OVO" control={<Radio />} label="OVO" />
                                <FormControlLabel value="gopay" control={<Radio />} label="GoPay" /> 
                            </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
}