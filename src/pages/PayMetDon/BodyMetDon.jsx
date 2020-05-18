import React from 'react'

import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Textarea from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Link from '@material-ui/core/Link'

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
        // marginTop: theme.spacing(10)
    },
    ourAnimalsSm: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '34px',
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        // marginTop: theme.spacing(10)
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
        // marginTop: theme.spacing(1)
    },
    giftText: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '21px',
        display: 'flex',
        alignItems: 'center',
        color: '#6C5434',
        // marginTop: theme.spacing(1)
    },
    margin: {
        // margin: theme.spacing(3)
    },
    text1: {
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        lineHeight: '65px',
        cursor: 'pointer',
        fontSize: '28px'
    },
    text2: {
        fontFamily: 'Fredoka One',
        color: '#6C5434',
        lineHeight: '32.5px',
        cursor: 'pointer',
        fontSize: '20px'
    }
}));

export default function BodyMetDon() {
    const classes = useStyle();

    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">

                <Typography className={classes.ourAnimals}>Donate for our Zoo Partner</Typography>

                <Typography className={classes.adoptForBetter}>Help them providing better place and facilities for animals</Typography>
            </Grid>
            <Grid container justify='center'>
                <Grid item md={7} style={{ background: 'red', height: '100%', margin: '20px,', padding: '20px' }}>
                    <Grid item md={12} style={{ padding: '10px' }}>
                        Secure Order Form
                    </Grid>
                    <Grid item md={12} style={{ background: 'blue', padding: '10px' }}>
                        <TextField label='Name' fullWidth style={{ background: '#C4C4C4' }} />
                    </Grid>
                    <Grid item md={12} style={{ background: 'blue', padding: '10px' }}>
                        <TextField label='Email' fullWidth style={{ background: '#C4C4C4' }} />
                    </Grid>
                    <Grid item md={12} style={{ background: 'blue', padding: '10px' }}>
                        <TextField label='Message for the Zookeepers' fullWidth style={{ background: '#C4C4C4' }} />
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <RadioGroup>
                                <FormControlLabel value='Anonymous' control={<Radio />} label='Use Anonymous'>
                                </FormControlLabel>
                                <Link style={{ textAlign: 'left' }}>Autofill with login data, click here to sign in.</Link>
                            </RadioGroup>
                        </Grid>
                        <Grid item md={12}>
                            <Button size='large' variant='outlined' style={{ margin: '10px' }}>Confirm</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} style={{ background: 'green' }} height='100%' margin='20px'>
                    <Grid item md={12} style={{ padding: '10px' }}>
                        Donate
                    </Grid>
                    <Grid item md={12} style={{background:'yellow'}}>
                        blabla
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}