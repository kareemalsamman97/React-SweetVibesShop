import React, { useState , useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Backdrop ,CircularProgress , Button, Paper, Grid, Typography, Container , Dialog  , DialogTitle , DialogContent} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
import {Card } from 'react-bootstrap';
//**********************************All*Importing*Imports*******************************************************//
import Icon from './icon';
import LogoIcon from '../../images/SweetVibes_Logo.jpg';
import Alert from '@material-ui/lab/Alert';
import RamadanLogo from '../../images/LogoRamdan.jpg';
//**********************************All*Pictures*Imports*********************************************************//
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }; // getting varible to save all the data
const SignUp = () => {
  const [MainLogo, SetMainLogo] = useState(LogoIcon); // chaning the logo picture in ramdan mode
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode')); // cheking if ramdan mode is on
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user information
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // chaning for ramdan mode 
  const [form, setForm] = useState(initialState); // this will give the accesbility to switch in the same page between the sign in form or sign up form
  const [isSignup, setIsSignup] = useState(false); // checking if is signup form
  const dispatch = useDispatch(); // working with actions
  const history = useHistory(); // using history to push the user
  const classes = useStyles(); // using material style
  var userName = user?.result.name; // getting the user name
  const [open, setOpen] = React.useState(false); // this for the sign up dialog
  const [showPassword, setShowPassword] = useState(false); // showing password varible
  const [buttonsignclicked, setbuttonsignclicked] = useState(false); // checking if sign in button is clicked to show the loggin in dialog
  const handleShowPassword = () => setShowPassword(!showPassword); // the handle to show the password
  const [openbackdrop, setopenbackdrop] = React.useState(false); // to open the backgrop for loggin in dialog
  useEffect(() => { // for user settings
    if (buttonsignclicked === true){ // checking if button sign in is clicked to open the loggin in dialog
    setTimeout(function(){ // activing timer
    if( typeof userName === 'undefined'){ // checking after sign in button and there is no user is entred because wrong email or password
    handleClosebackgrop(); // so it will close the dialog
    }
    }, 5000);
    }
    if( typeof userName !== 'undefined'){// checking if there an account is entered so it will push the user to the 
    history.push('/home'); // home page
    }
  });
 
  useEffect(() => { // for ramdan mode
    if(RamadanModeFromLocal === true){
    SetMainLogo(RamadanLogo)
    SetLabelLogo('#F7CC70')
    } else if(RamadanModeFromLocal === false){
    SetMainLogo(LogoIcon)
    SetLabelLogo('#A87DAB')
    }
  });

  const handleClosebackgrop = () => { // closing the loggin in dialog
    setopenbackdrop(false); // close it
  };
  const handleTogglebackgrop = () => { // openning the loggin in dialog
    setopenbackdrop(!open); // open it
  };

  const givingtimerforsign = () => { // for the siging in dialog
    handleTogglebackgrop(); // it will give a timer to open the siggn in dialog
    setbuttonsignclicked(true); // it will inform the varible that the user is clicked on the sign in gutton
  };

  const switchMode = () => { // the swtich mode from sign in to sign up
    setForm(initialState); // it will add all the initialState to the form
    setIsSignup((prevIsSignup) => !prevIsSignup); // it will check if the in the form it show to make email so it will show the sign up form if no it will show the sign in form
    setShowPassword(false); // and it will make the password textbox is not  visiblity to see the password
  };
 
  const handleSubmit = (e) => { // here after the user is submiting so
    setbuttonsignclicked(true); // it will give that the user clicked the button to open the dialog
    e.preventDefault();
    if (isSignup) { // so it will check if the form was sign up so
    handleClickOpen(); // it will open the sign up succesfully form 
    dispatch(signup(form, history)); // and it will make the sign up action working
    } else { // if it is sign in form
    dispatch(signin(form, history)); // it will make the sign in action and checking the email and password from data base
    givingtimerforsign(); // and it will open the sign in dialog
    }  
  };

  

  const googleSuccess = async (res) => { // if google sign in button
    const result = res?.profileObj; // it will take the profile picture
    const token = res?.tokenId; // it will take the token id
    handleTogglebackgrop(); // it will open the sign in dialog
    try {
    dispatch({ type: AUTH, data: { result, token } }); // and it will make the dispatch action from google sign in
    history.push('/home'); // and if it is ok it will send the user to the home
    } catch(error) {
    // do nothing
    }
  };

  const handleClickOpen = () => { // here for the sign up dialog after the user is signed up
    setOpen(true); // it will make the form to open
    setTimeout(function(){ // activing timer
    handleClose(); // and after a time it will close the sign up dialog
    }, 1700);
  };

  const handleClose = () => { // it will close the sign up dialog
    setOpen(false); // will close it
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later'); // google error problem

  const handleChange = (e) => { // if changing / clicking on the sign up or sign in button
  setForm({
     ...form, [e.target.name]: e.target.value
     });
    }
  return (
    <Container maxWidth="lg">
      <Card className="text-center">
      <Card.Header>Login</Card.Header>
      <Card.Body>
      <Card.Text>
      𝗜 𝗵𝗼𝗽𝗲 𝘆𝗼𝘂 𝗲𝗻𝗷𝗼𝘆 𝘆𝗼𝘂𝗿 𝘀𝘄𝗲𝗲𝘁 𝘃𝗶𝗯𝗲𝘀 𝗮𝘀 𝗺𝘂𝗰𝗵 𝗮𝘀 𝗜 𝗱𝗶𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘁𝗵𝗲𝗺!
      𝗛𝗼𝗺𝗲𝗺𝗮𝗱𝗲 𝗯𝗶𝘁𝗲𝘀 ❥
      </Card.Text>
      <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
      <img  src={MainLogo} alt="icon" height="60" />
      </Avatar>
      <Typography style={{color : LabelLogo}} component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
      { isSignup && (
      <>
      <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half />
      <Input name="lastName" label="Last Name" handleChange={handleChange} half />
      </>
      )} 
      <Input  name="email"  label="Email Address"   handleChange={handleChange}   type="email"  />
      <Input  name="password"  label="Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
      { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
      </Grid>
      <Button type="submit" fullWidth variant="contained"    className={classes.submit}>
      { isSignup ? 'Sign Up' : 'Sign In' }
      </Button>
      <GoogleLogin clientId="864954500724-5v60lela7q3oi64rv3qccbge1t76ma9h.apps.googleusercontent.com" render={(renderProps) => (
      <Button className={classes.googleButton}style={{backgroundColor : LabelLogo}} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
      Google Sign In
      </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy="single_host_origin" />
      <Grid container justify="flex-end">
      <Grid item>
      <Button className={classes.buttons} onClick={switchMode}>
      { isSignup ? 'have an account? Sign in' : "Don't have an account? Sign Up" }
      </Button>
      </Grid>
      </Grid>
      </form>
      </Paper>
      </Card.Body>
    
      <Backdrop className={classes.backdrop} open={openbackdrop} >
      <CircularProgress color="inherit" />
      <label> &nbsp;Checking / logging in ...</label>
      </Backdrop>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      <Alert  severity="success">Your Account has been succesfully created!</Alert>
      </DialogTitle>
      <DialogContent dividers>
      <Typography gutterBottom>
      Your Account  has been succressfully created
      </Typography>  
      </DialogContent>

      </Dialog>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>

    </Container>
  );
};

export default SignUp;

//************************************************************************************************************//
//                                        Auth Page                                                           //
//                                                                                                            //
// This page for login or sign up page                                                                        //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//

