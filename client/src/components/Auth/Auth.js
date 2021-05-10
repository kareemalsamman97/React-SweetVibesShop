import React, { useState , useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Backdrop ,CircularProgress , Button, Paper, Grid, Typography, Container , Dialog , DialogActions , DialogTitle , DialogContent , DialogContentText ,TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card } from 'react-bootstrap';
import LogoIcon from '../../images/SweetVibes_Logo.jpg';
import Alert from '@material-ui/lab/Alert';
import RamadanLogo from '../../images/LogoRamdan.jpg';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const SignUp = () => {
  const [MainLogo, SetMainLogo] = useState(LogoIcon);
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB');
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [AdminFormShow, setAdminFormShow] = useState(false);
  const [AdminChangeemail, setAdminChangeemail] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  var userName = user?.result.name;
  const [Admincode, setAdmincode] = useState()
  const [showPassword, setShowPassword] = useState(false);
  const [AdminPassword, setAdminPassword] = useState();
  const [AdminEmail, setAdminEmail] = useState();

  const [buttonsignclicked, setbuttonsignclicked] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [openbackdrop, setopenbackdrop] = React.useState(false);
  const handleClosebackgrop = () => {
    setopenbackdrop(false);
  };
  const handleTogglebackgrop = () => {
   
    setopenbackdrop(!open);
  };

  const givingtimerforsign = () => {
    handleTogglebackgrop();
    setbuttonsignclicked(true)
 
   
 
  };
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
 
  
  const handleSubmit = (e) => {
    setbuttonsignclicked(true);
    e.preventDefault();

    if (isSignup) {
      handleClickOpen();
   
      dispatch(signup(form, history));
    } else {
   
    
        dispatch(signin(form, history));
        givingtimerforsign();
     
    } 
    
  };

  useEffect(() => {
  
    if (buttonsignclicked === true){
      setTimeout(function(){
        if( typeof userName === 'undefined'){
          handleClosebackgrop()
        }
      }, 5000);
    }
      if( typeof userName !== 'undefined'){
      history.push('/home');
    }
  });
  function refreshPage() {
    window.location.reload(false);
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    handleTogglebackgrop();
    try {
      dispatch({ type: AUTH, data: { result, token } });
    
      history.push('/home');
    } catch(error) {
    
    
    }
  };
  const [openAdminSetEmail, setopenAdminSetEmail] = React.useState(false);

  const handleClickOpenAdminFormEmail = () => {
    setopenAdminSetEmail(true);
  };

  const handleCloseAdminFormEmail = () => {
    setopenAdminSetEmail(false);
  };
  const [openAdmin, setOpenAdmin] = React.useState(false);

  const handleClickOpenAdminForm = () => {
    setOpenAdmin(true);
  };

  const handleCloseAdminForm = () => {
    setOpenAdmin(false);
  };
  useEffect(() => {
    
    if(Admincode === '$$'){
      handleClickOpenAdminForm();
    }
    if(RamadanModeFromLocal === true){
      SetMainLogo(RamadanLogo)
      SetLabelLogo('#F7CC70')
    } else if(RamadanModeFromLocal === false){
      SetMainLogo(LogoIcon)
      SetLabelLogo('#A87DAB')
    }
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(function(){

      handleClose();
    }, 1700);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => {
setAdmincode(e.target.value)
  setForm({
     ...form, [e.target.name]: e.target.value
     
     });
    }
  const AdminFormPassword = (e) => {

    setAdminPassword(e.target.value)
    console.log(AdminPassword)
  }
  const CheckPassword = () => {
    if(AdminPassword === '1918171615141312'){
      handleCloseAdminForm();
      handleClickOpenAdminFormEmail();
    }
  }
  const savingAdminAccount = (e) => {
    setAdminEmail(e.target.value);
  }
  const SaveAdmingAccount = () => {
    handleCloseAdminFormEmail();
    handleCloseAdminForm();
  
    localStorage.setItem('AdminAccount' , JSON.stringify(AdminEmail))
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
          <GoogleLogin
            clientId="864954500724-5v60lela7q3oi64rv3qccbge1t76ma9h.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton}style={{backgroundColor : LabelLogo}} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}

            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
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
      <div>
      <div style={{ display: setAdminFormShow ? "block" : "none" }}>
      <div>
     
      <Dialog open={openAdmin} onClose={handleCloseAdminForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Admin Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please write the password to access to this page
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="text"
            onChange={AdminFormPassword}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdminForm} color="primary">
            Cancel
          </Button>
          <Button onClick={CheckPassword} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
      <div style={{ display: setAdminChangeemail ? "block" : "none" }}>
      <div>
     
      <Dialog open={openAdminSetEmail} onClose={handleCloseAdminFormEmail} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Set / Change Admin Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please write the Admin email that you want to set , and to use to 
           get access to all admin tools and to get emails to your account.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="Email"
            onChange={savingAdminAccount}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdminFormEmail} color="primary">
            Cancel
          </Button>
          <Button onClick={SaveAdmingAccount} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
          
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
        <DialogActions>
        
        </DialogActions>
      </Dialog>
    </div>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>


    </Container>
  );
};

export default SignUp;


