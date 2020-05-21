import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextArea from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Link from '@material-ui/core/Link'

import { Formik } from 'formik'
import { useDispatch } from 'react-redux'

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
        fontSize: '18px',
        lineHeight: '25px',
        display: 'flex',
        alignItems: 'center',
        color: '#6C5434',
        marginTop: theme.spacing(1)
    },
}));

export default function BodyMetDon() {
    const classes = useStyle();
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const submitData = (values)=>{
        console.log(value, value2, values.name);
        
    }
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    PAYMENT METHOD
                    </Typography>
            </Grid>

            <Grid container justify="center">
                <Typography className={classes.adoptForBetter}>
                    Support. Provide them a better place
                    </Typography>
            </Grid>

            <Grid container justify='center' style={{ padding: '10px'}}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }} onSubmit={async (values) => {
                        submitData(values)
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => {
                        return (


                            <Grid item md={7} style={{ background: '#6C5434', height: '100%', width:'100%', margin: '20px', padding: '20px' }}>
                                <Grid item md={12} style={{ background: '#C4C4C4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px', color: '#6C5434' }}>
                                    Secure Payment Form
                                </Grid>
                                <form noValidate onSubmit={handleSubmit}>

                                    <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px' }}>
                                        <TextField id='name' name='name' values={values.name} onChange={handleChange} label='Name' fullWidth style={{ background: '#C4C4C4', textAlign: 'center' }} />
                                    </Grid>

                                    <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px' }}>
                                        <TextField id='email' name='email' values={values.email} onChange={handleChange} label='Email' fullWidth style={{ background: '#C4C4C4', textAlign: 'center' }} />
                                    </Grid>

                                    <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px' }}>
                                        <TextArea
                                            id='message' name='message' values={values.message} onChange={handleChange}
                                            placeholder="Message for the zookeeper"
                                            style={{
                                                background: '#C4C4C4',
                                                textAlign: 'left',
                                                fontFamily: 'Raleway', fontSize: '14px',
                                                width: '100%', height: '25vh'
                                            }}></TextArea>
                                    </Grid>

                                    <Grid item md={12} style={{ background: '#F6F4E4', fontFamily: 'Raleway', fontSize: '14px', padding: '10px' }}>
                                        <RadioGroup>
                                            <FormControlLabel value='Anonymous' control={<Radio />} label='Use Anonymous'>
                                            </FormControlLabel>
                                            <Link style={{ textAlign: 'left', color: '#6C5434' }}><i>Autofill with login data, click here to sign in.</i></Link>
                                        </RadioGroup>
                                        <Grid item md={12}>
                                            <Button type='submit' size="large" variant="outlined"
                                                style={{ margin: '20px', color: '#6C5434' }}>
                                                SUBMIT
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>

                        )
                    }
                    }
                </Formik>
                <Grid item md={4} xs={12} sm={12} style={{ background: '#6C5434', minHeight: '100%', margin: '20px', padding: '20px' }}>
                    <Grid item md={12} style={{ background: '#C4C4C4', fontFamily: 'Fredoka One', fontSize: '18px', padding: '10px', color: '#6C5434' }}>
                        Choose The Amount
                    </Grid>
                    <Grid item md={12} style={{ background: '#F6F4E4', paddingBottom: '52px' }}>
                        <FormControl component="fieldset" style={{ margin: '10px' }}>
                            <FormLabel component="legend" style={{ fontFamily: 'Raleway' }}>Your help means a lot</FormLabel>
                            <RadioGroup aria-label="payment" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="harga1" control={<Radio />} label="IDR 10,000" />
                                <FormControlLabel value="harga2" control={<Radio />} label="IDR 15,000" />
                                <FormControlLabel value="harga3" control={<Radio />} label="IDR 20,000" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid
						item
						md={12}
						style={{
							background: '#C4C4C4',
							fontFamily: 'Fredoka One',
							fontSize: '18px',
							padding: '10px',
							color: '#6C5434'
						}}
					>
						Choose Your Payment Method
					</Grid>
                    <Grid item md={12} style={{ background: '#F6F4E4' }}>
                        <FormControl component="fieldset" style={{ margin: '10px' }}>
                            <FormLabel component="legend" style={{ fontFamily: 'Raleway' }}>Your payment is secured</FormLabel>
                            <RadioGroup aria-label="payment" name="gender1" value={value2} onChange={handleChange2}>
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