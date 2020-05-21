import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificAnimals } from '../../assets/redux/actions/spAnimalsAction';
import { saveAmount } from '../../assets/redux/actions/adoptRateAction';

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
    image: {
		margin: 'auto',
		display: 'block',
        width: '100%',
        alignItems: 'center',
        height: '250px',   
    },
    imageHidden: {
        margin: 'auto',
		display: 'block',
        width: '100%',
        alignItems: 'center',
        height: 'auto',
          
    },
    ourAnimals: {
		display: 'flex',
		textAlign: 'center',
		fontSize: '44px',
		fontFamily: 'Fredoka One',
		color: '#6C5434',
        marginTop: theme.spacing(10)
    },
    forP: {
        textAlign: 'left',
        fontSize:'20px',
        fontFamily: 'Raleway',
        color: '#6C5434',
        padding: '15px',
    },
    img: {
        width: 'auto',
        height: '200px',
        alignItems: 'center',
        padding: '5px',
        margin: '3px',
    }
}))

export default function AnimalAdopt2() {
    const classes = useStyle();
    const { id } = useParams();
	const dispatch = useDispatch();
    const currentAnimal = useSelector((state) => state.currentAnimal);
    const status = useSelector((state) => state.isLoggedIn);
    
    if (currentAnimal.length === 0) {
		dispatch(getSpecificAnimals(id));
	} else {
		if (currentAnimal.data._id !== id) {
            dispatch(getSpecificAnimals(id));

		}
    }
    
    const handleClick = (amount) => {
        dispatch(saveAmount(amount))
    }
    return (
        <div className={classes.root} style={{ background: '#ECE4BA' }}>
            <Grid container justify="center">
                <Typography className={classes.ourAnimals}>
                    Adopt a {currentAnimal.data !== undefined ? currentAnimal.data.name : null}
                </Typography>
            </Grid>


            <Grid container>
                <Hidden smDown>
                    <Grid item xl= {4} lg={4} md={4} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Paper square> 
                            <img className={classes.image} alt="animal" src={currentAnimal.data !== undefined ? currentAnimal.data.image1 : null} />
                        </Paper>
                    </Grid>

                    <Grid item xl={4} lg={4} md={4} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Paper square> 
                            <img className={classes.image} alt="animal" src={currentAnimal.data !== undefined ? currentAnimal.data.image2 : null} />
                        </Paper>
                    </Grid>

                    <Grid item xl={4} lg={4} md={4} style={{ background: '#ECE4BA', padding: '10px' }}>
                        <Paper square> 
                            <img className={classes.image} alt="animal" src={currentAnimal.data !== undefined ? currentAnimal.data.image3 : null} />
                        </Paper>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid item sm={12} xs={12} style={{ background: '#ECE4BA', padding: '10px' }}>
                    <Paper square> 
                        <img className={classes.imageHidden} alt="animal" src={currentAnimal.data !== undefined ? currentAnimal.data.image1 : null} />
                    </Paper>
                </Grid>
                </Hidden>
                

            {/* <Hidden smDown>
                <Grid item lg={4} sm={4} style={{ background: '#', padding: '10px'}}>
                    <Grid item lg={12}>
                        <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434'}}>
                            Choose your adoption rate!
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin: '3px'}}>
                            <Button style={{margin: '5px', width: '80%', fontSize: '20px', fontFamily: 'Fredoka One'}} disableElevation
                            onClick={ () => handleClick('150000')}
                            disabled = { status === true ? false : true }>
                                <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 150.000
                                </Link>
                            </Button>
                    </Paper>
                </Grid>

                <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin:'3px'}}>
                            <Button style={{margin: '5px', width: '80%', fontSize: '20px', fontFamily: 'Fredoka One'}} disableElevation
                            onClick={ () => handleClick('200000')}
                            disabled = { status === true ? false : true }>
                                 <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                 style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 200.000
                                </Link>
                            </Button>
                    </Paper>
                </Grid>

                <Grid item lg={12}>
                    <Paper elevation={0} style={{background: '#6C5434', margin: '3px'}}>
                            <Button type="submit" style={{margin: '5px', width: '80%', fontSize: '20px', fontFamily: 'Fredoka One'}} variant="contained" disableElevation
                            onClick={ () => handleClick('250000')}
                            disabled = { status === true ? false : true }>
                                <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 250.000
                            </Link>
                            </Button>
                    </Paper>
                </Grid>

                </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid container justify="center">
                <Grid item sm={12}>
                        <Typography style={{ fontFamily: 'Fredoka One', fontSize: '18px', color: '#6C5434', margin: '10px'}}>
                            Choose your adoption rate!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item sm={3}>
                            <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One', background: '#6C5434' }}
                            onClick={ () => handleClick('150000')}
                            disabled = { status === true ? false : true }>
                                <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 150.000
                                </Link>
                            </Button>
                    </Grid>
                    <Grid item sm={3}>
                            <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One', background: '#6C5434'}}
                            onClick={ () => handleClick('200000')}
                            disabled = { status === true ? false : true }>
                                <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 200.000
                                </Link>
                            </Button>
                    </Grid>
                    <Grid item sm={3}>
                            <Button style={{margin: '2px', fontSize: '16px', fontFamily: 'Fredoka One', background: '#6C5434'}}
                            onClick={ () => handleClick('250000')}
                            disabled = { status === true ? false : true }>
                                <Link to={currentAnimal.data !== undefined ? (`/animal-adopt-3/${currentAnimal.data._id}`): '' }
                                style={{ textDecoration:'none', color: '#F6F4E4'}}>
                                IDR 250.000
                                </Link>
                            </Button>
                    </Grid>
                    
                </Grid>
                </Hidden> */}

                <Grid container justify='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='contained' color="inherit" style={{ fontFamily: 'Fredoka One', padding: '10px', marginTop: '15px', fontSize: '16px', background:'#60B6D1'}}>
                            <Link to="/animal-adopt-3/:id"
                                style={{ textDecoration: 'none', color: '#6C5434'}}>
                                BECOME AN ADOPTER
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                
                <Grid item lg={12} sm={12} style={{ background: '#ECE4BA', margin: '5px' }}>
                    <Paper elevation={0} square>
                        <p className={classes.forP}>
                        {currentAnimal.data !== undefined ? currentAnimal.data.caption : null} 
                        </p>
                    </Paper>
                </Grid>

                <Grid container justify="center" style={{ background: '#AAE787' }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography style={{ fontFamily: 'Fredoka One', fontSize: '20px', color: '#6C5434', lineHeight: '40px' }}>
                        PROTECT THIS INCREDIBLE ANIMALS, AND RECIEVE
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justify="center" style={{ margin: '30px'}}>
                    <Grid item sm={12} xs={12} lg={3} style={{ background: 'transparent', margin: '0px'}}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://images-na.ssl-images-amazon.com/images/I/91Oc19qjgyL._AC_SX425_.jpg" />
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '14px', color: '#6C5434', padding: '10px' }}>
                                Plush Toy
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={12} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://dbdzm869oupei.cloudfront.net/img/sticker/large/7599.jpg"/>
                            </div>
                                <Typography style={{ fontFamily: 'Fredoka One', fontSize: '14px', color: '#6C5434', padding: '10px' }}>
                                    Animal Sticker Set
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={12} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square> 
                            <div>
                                <img className={classes.img} src="https://covers.magazinecloner.com/covers/157365.jpg"/>
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '14px', color: '#6C5434', padding: '10px' }}>
                                    Monthly Magazine
                                </Typography>
                        </Paper>
                    </Grid>

                    <Grid item sm={12} xs={12} lg={3} style={{ background: 'transparent', margin: '0px' }}>
                        <Paper square>
                            <div>
                                <img className={classes.img} src="https://cdn.cp.adobe.io/content/2/rendition/3901fe78-2416-4023-84a5-0ed4eb282c5f/artwork/5fa3a90a-2b08-43f0-82ef-cff446f38ff1/version/0/format/jpg/dimension/width/size/300"/>
                            </div>
                            <Typography style={{ fontFamily: 'Fredoka One', fontSize: '14px', color: '#6C5434', padding: '10px' }}>
                                    Personalized Certificate
                                </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>


    )
}