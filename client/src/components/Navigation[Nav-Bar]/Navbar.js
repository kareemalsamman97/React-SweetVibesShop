import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar,IconButton ,  Avatar, Button , Switch, Container , Backdrop, FormControlLabel , Grow , MenuList , MenuItem , Paper  } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import  './Navbar.scss';
//**********************************All*Importing*Imports*******************************************************//
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LogoIcon from '../../images/SweetVibes_Logo.jpg';
import AdminMan from './../../images/man.png'
import RamadanLogo from '../../images/LogoRamdan.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//**********************************All*Pictures*Imports*********************************************************//
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting user information
  const dispatch = useDispatch(); // usinging dispatch to get actions
  const location = useLocation(); // getting location of the navigation url
  const history = useHistory(); // handling history to push the routs
  const classes = useStyles(); // using material style
  const userName = user?.result.name; // getting username of the user
  const token = user?.token; // getting the token of the user
  //[ All UseState Consting + LocalStorage
  const [openMobile, setOpenMobile] = React.useState(false); // nav bar for the mobile mode
  const [openMobileAdmim, setOpenMobileAdmin] = React.useState(false);
  const [openLoggingoutPage, setopenLoggingoutPage] = React.useState(false); // on logout button click it will open a grey page for loggin out
  const [MainLogo, SetMainLogo] = useState(LogoIcon); // changing the logo when ramdan mode is activated
  const [AdminSettingsisVisible, AdminSettingsetIsVisible] = useState(false); // Admin tools hide or show
  const [isVisible, setIsVisible] = useState(false); // Admin logo for desktop site
  const [ButtonLogginVisible, setButtonLogginVisible] = useState(false); // Sign In Button visiblity for mobile site
  const [RamadanMode , SetRamadanMode] = useState(false); // ramdan mode
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // label color when activing ramdan mode
  const [AppBarColor, SetAppBarColor] = useState('white'); // appbar backgroud color when activing ramdan mode
  const [UserNameColor, SetUserNameColor] = useState('black');// user name color when activing ramdan mode
  const [AvatarLogginVisible, setAvatarLogginVisible] = useState(false); // Avatar visiblity in mobile site
  const [SettingsisVisible, SettingssetIsVisible] = useState(false); // settings menu for the customer to logout or to see his order
  const [isLoggedin, setisLoggedin] = useState(false); // is logging in or no
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode')) // getting ramdan mode from local
  const OrderNowStatus = JSON.parse(localStorage.getItem('IsOrderNowButtonClciked')) // getting order now button is clicked or no
  //]

  useEffect(() => { // cheking for one time if the anything happend with account actions

    if(userName ===  "SweetVibes Admin"){ // cheking if the account is admin or no
      setIsVisible(true); // it will show admin logo
    } else if(userName !==  "SweetVibes Admin") {
      setIsVisible(false);// it will hide admin logo
    }
    if (token) { // if the user has been entered
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile'))); // saving account information in local storage
  }, [location]);

  useEffect(() => { // cheking if ramdan mode is activated
    CheckingUserSettingsForMobile();
    if(RamadanModeFromLocal === true){ // checking if ramdan mode is activated so
      SetMainLogo(RamadanLogo); // it will change the logo from regular to ramdan picture
      SetLabelLogo('#F7CC70'); // it will change the color from purple to orange
      SetAppBarColor('#212121'); // it will change the background color of the app bar from white to dim grey 
      SetUserNameColor('#BBBBBB'); // it will change the color of user name 
    } else if(RamadanModeFromLocal === false){ // if ramdan mode is not activated so 
      SetMainLogo(LogoIcon); // it will change the logo from ramdan logo to regular logo
      SetLabelLogo('#A87DAB'); // it will change the label logo from orange to purple
      SetAppBarColor('white'); // it will change the background color of the app  bar from dim grey to white
      SetUserNameColor('black'); // it will change the color of the user name label to black
    }
  }); 

  const logout = () => {
    dispatch({ type: actionType.LOGOUT }); // getting LogOut action
    SettingssetIsVisible(false) // hiding the user menu that can logout or see his order
    AdminSettingsetIsVisible(false) // hiding the admin menu
    localStorage.setItem('isLoggedIn' , JSON.stringify(false)) // saving in the local storage that is logged in or no
    localStorage.setItem('isSigninClicked' , JSON.stringify(false)) // save in the local storage if the button is clicked or no
    history.push("/home"); // sending the user to the home page
    setUser(null); // making the user is nothing
  };

  const CloseLoadingPage = () => { // to close the loading page
    setopenLoggingoutPage(false); // hiding the logout grey page
  };

   const ToggleLoadingPage = () => { // on logout button click
    SettingssetIsVisible(false); // hiding the user menu that can logout or see his orer
    AdminSettingsetIsVisible(false); // hiding the admin menu
    setopenLoggingoutPage(!openLoggingoutPage); // changing theloggingpage that it is not openned
    setTimeout(function(){ // starting timer
      logout(); // it will start logout action to logout from the user
      CloseLoadingPage(); // it will close the loading page
    }, 1500);
  };

  const settingsformclick =()=> { // on clicking on the profile picture or the name which will it will show
    if ( SettingsisVisible === false && userName !== "SweetVibes Admin"){ // it will show the User menu if the menu is not shown and the user is not admin name
      SettingssetIsVisible(true); // it will show the User menu
    }
    if ( SettingsisVisible === true && userName !==  "SweetVibes Admin"){  // it will hide the User menu if the menu is shown and the user is not admin name
      SettingssetIsVisible(false); // it will hide the User menu
    }
    if (AdminSettingsisVisible === false && userName ===  "SweetVibes Admin"){ // it will show the Admin menu if the menu is not shown and the account name is SweetVibes Admin
      AdminSettingsetIsVisible(true);// it will show the Admin menu
    }
    if (AdminSettingsisVisible === true && userName ===  "SweetVibes Admin"){  // it will hide the Admin menu if the menu is shown and the account name is SweetVibes Admin
      AdminSettingsetIsVisible(false);// it will hide the Admin menu
    }
  }
 
  const closebuttonsettings =()=> { // on clicking on the navgation buttons [ Home / Shop / AboutUs]
    if(OrderNowStatus === true) {  // here it is checking the order now button is clicked before or no , so if it clicked 
      localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false)) // it will make it false because the true and clicked on the shop button it will show for the the order page not the products
      window.location.reload(true); // it will reload the page
    }
      SettingssetIsVisible(false); // will hide the User menu
  }

  const hideAdminMenu = () => { // function that hiding the Admin Menu
    SettingssetIsVisible(false); // will close the User menu for more security
    AdminSettingsetIsVisible(false); // will close the Admin menu
  }

 const Ramadan = () => { // ramadn mode
  if(RamadanMode === false){ // if ramdan mode is not activated and the button on ramdan mode is clicked so 
    SetRamadanMode(true); // it will change the ramdan mode variable  from false to true to active it
    localStorage.setItem('ramadanmode' , JSON.stringify(true)); // saving in localstorage that ramdan mode is activated that will give to another pages the ramdan effects
    history.push('/home'); // here it will send the user to the home page to give all the effects for the user and that he can see what the changes
  }
  if(RamadanMode === true){ // if ramdan mode is activated and the button on ramdan mode is clicked so 
    SetRamadanMode(false); // it will change the ramdan mode variable  from true to false to disable it
    localStorage.setItem('ramadanmode' , JSON.stringify(false));  // saving in localstorage that ramdan mode is disabled so that will give to another pages the ramdan effects
    history.push('/home'); // here it will send the user to the home page to give all the effects for the user and that he can see what the changes
  }
 }
 


const CheckingUserSettingsForMobile = () => { // for mobile mode it will check if the user is logged it or no
  if (userName === undefined){ // if there is a no user so
    setButtonLogginVisible(true); // it will show a new sign in button only for mobile 
    setAvatarLogginVisible(false); // it will hide the profile picture
  }
  if (userName !== undefined){ // if the user has been logged in so 
    setButtonLogginVisible(false); // it will hide the sign in button
    setAvatarLogginVisible(true); // and it will show the profile picture 
  }
}

const MobileSettings = () => { // only  for mobile  that it will show an diffrent menu on clicking on the profile logo or the arrow
  if (userName === undefined){ // it will check if there is no user has been logged in
    setisLoggedin(false); // so it will change the variable of loggingin to true
    history.push('/auth'); // and it will send the user to logging in page
  }
   if (userName !== undefined && userName !==  "SweetVibes Admin"){ // it will check that the user is logged in but the user is not in admin name so 
    setOpenMobile(!openMobile); // it will open mobile menu that can logout or see his order
    setisLoggedin(true); // and it will tell the it is logged in a user
   }
  if (userName ===  "SweetVibes Admin"){ // if the user is an Admin so it
    setOpenMobileAdmin(!openMobileAdmim); // it will open the admin menu that can access to all the admin tools
    setisLoggedin(true); // and it will tell that the user is logged in
  }
}

const handleCloseMobile = () => { // on clicking on the menu page for the regular user so
  setOpenMobile(false); // it will hide the menu
};

const AdminhandleCloseMobile = () => { // on clicking on the admin menu for the admin user so
  setOpenMobileAdmin(false); // it will hide the admin menu
};

  return (
    <Container maxWidth="lg">
      <Grow in>
        <AppBar className = {classes.Bar} color="inherit" style = {{backgroundColor: AppBarColor}}>
          <Toolbar>
          {AvatarLogginVisible && <Avatar  className={classes.purple} style={{ backgroundColor: LabelLogo , }}  onClick={MobileSettings} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>}
          <IconButton style={{marginLeft : '-10px', display: AvatarLogginVisible ? "block" : "none" }}>
          <ArrowDropDownIcon style={{color : '#696969'}} onClick={MobileSettings}/>
          </IconButton>
          <IconButton className={classes.navbarbuttons} >
          <Link  to="/home" > < HomeIcon  onClick={closebuttonsettings} className={classes.mobileincons} style={{color: LabelLogo }}  /></Link>
          <Link  to="/home" className={classes.mobilelabel} onClick={closebuttonsettings} style={{color: UserNameColor,  textDecoration: 'none'}}><a>Home</a></Link>
          </IconButton>
          <IconButton className={classes.navbarbuttons} >
          <Link  to="/shop" > <StorefrontIcon  onClick={closebuttonsettings} className={classes.mobileincons} style={{color: LabelLogo }}  /></Link>
          <Link  to="/shop" className={classes.mobilelabel} onClick={closebuttonsettings} style={{color: UserNameColor,  textDecoration: 'none'}}><a>Shop</a></Link>
          </IconButton>
          <IconButton className={classes.navbarbuttons} >
          <Link  to="/aboutus" > <InfoIcon  onClick={closebuttonsettings} className={classes.mobileincons} style={{color: LabelLogo }}  /></Link>
          <Link  to="/aboutus" className={classes.mobilelabel} onClick={closebuttonsettings} style={{color: UserNameColor,  textDecoration: 'none'}}><a>About Us</a></Link>
          </IconButton>
          {ButtonLogginVisible && <Button component={Link} to="/auth" variant="contained" style={{ backgroundColor: LabelLogo  }} className={classes.mobileButton}>Sign In</Button>}
          </Toolbar>
        </AppBar>
      </Grow>
      {/***************************************************This for the mobile app bar settings******************************************/}
    <AppBar className={classes.appBar} position="static" color="inherit" style = {{backgroundColor: AppBarColor}}>
        <div className={classes.brandContainer}>
          <img className={classes.image} src={MainLogo} alt="icon" height="60" />
          <Typography style={{color: LabelLogo}} className={classes.heading} variant="h6" align="center">SweetVibes</Typography>
          <FormControlLabel className={classes.Switch} style={{color : LabelLogo}}
          control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> } label="Ramadan Mode"  />
          <nav>
			    <Link  to="/home"  onClick={closebuttonsettings} style={{ textDecoration: 'none'}}><a>Home</a></Link>
			    <Link  to="/shop"  onClick={closebuttonsettings} style={{ textDecoration: 'none' }}><a >Shop</a></Link>
			    <Link  to="/aboutus" onClick={closebuttonsettings}  style={{ textDecoration: 'none'}}><a>About Us</a></Link>
			    </nav>
        </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
            <div className={classes.profile}>
            <Avatar className={classes.purple} style={{backgroundColor: LabelLogo}} onClick={settingsformclick} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} style={{color : UserNameColor}} onClick={settingsformclick} variant="h6">{user?.result.name}</Typography>
            <div style={{ display: isVisible ? "block" : "none" }}>
            <img src ={AdminMan} className={classes.AdminButton} />
            </div>
            </div>
             ) :(
            <Button component={Link} to="/auth" variant="contained" style={{backgroundColor: LabelLogo }} className={classes.root} startIcon={<PermIdentityIcon />} color="primary">Sign In</Button>
            )}
      </Toolbar>
    </AppBar>
    {/***************************************************This for the desktop app bar settings******************************************/}
    <div style={{ display: AdminSettingsisVisible ? "block" : "none" }}>
      <Paper className={classes.AdminLogout} style={{backgroundColor : AppBarColor}}>
        <MenuList>
            <Link  to="/storage" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>Edit Storage</MenuItem></Link>
            <Link  to="/orderslist" style={{ textDecoration: 'none' , color: UserNameColor}}><MenuItem onClick={hideAdminMenu}>Orders Customers</MenuItem></Link>
            <Link  to="/admininbox" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>InBox</MenuItem></Link>
            <MenuItem style={{ textDecoration: 'none' , color: UserNameColor}} onClick={ToggleLoadingPage}>Log Out</MenuItem>
        </MenuList>
      </Paper>
    </div>
    {/***************************************************This for the admin menu to be shown or not******************************************/}
    <div style={{ display: SettingsisVisible ? "block" : "none" }}>
      <Paper className={classes.AdminLogout} style={{backgroundColor : AppBarColor}}>
        <MenuList>
              <Link  to="/orders" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>My Orders</MenuItem></Link>
              <MenuItem style={{ textDecoration: 'none' , color: UserNameColor}} onClick={ToggleLoadingPage}>Log Out</MenuItem>
        </MenuList>
      </Paper>
    </div>
    {/***************************************************This for the user menu to be shown or not******************************************/}
    <div>
    <div>
      <Backdrop className={classes.mobilebackgrop} open={openMobileAdmim} onClick={AdminhandleCloseMobile} >
        <MenuList>
              <Typography className={classes.userName} style={{color : LabelLogo}}  onClick={MobileSettings} variant="h6">{user?.result.name}</Typography>
              <FormControlLabel style={{color : LabelLogo}} control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> } label="Ramadan Mode" />
              <Link  to="/storage" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}> <MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>Edit Storage</MenuItem></Link>
              <Link  to="/orderslist" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}><MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>Orders Customers</MenuItem></Link>
              <Link  to="/admininbox" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}> <MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>InBox</MenuItem></Link>
              <MenuItem style={{ textDecoration: 'none' , color:  '#BBBBBB' ,  fontSize: '20px'}} onClick={ToggleLoadingPage}>Log Out</MenuItem>
        </MenuList>
      </Backdrop>
    </div>
    {/***************************************************This for the Admin menu for mobile site to be shown or not******************************************/}
    <div>
      <Backdrop className={classes.mobilebackgrop} open={openMobile} onClick={handleCloseMobile} >
        <MenuList>
              <Typography className={classes.userName} style={{color : LabelLogo}}  onClick={MobileSettings} variant="h6">{user?.result.name}</Typography>
              <FormControlLabel style={{color : LabelLogo}} control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> } label="Ramadan Mode" />
              <Link  to="/orders" style={{ textDecoration: 'none' , color: '#BBBBBB'}}> <MenuItem  style={{  fontSize: '20px'}}>My Orders</MenuItem></Link>
              <MenuItem style={{ textDecoration: 'none' , color: '#BBBBBB' , fontSize: '20px'}} onClick={ToggleLoadingPage} >Log Out</MenuItem>
        </MenuList>
      </Backdrop>
    </div>
    {/***************************************************This for the user menu for mobile site to be shown or not******************************************/}        
    <Backdrop className={classes.backdrop} open={openLoggingoutPage} >
            <CircularProgress color="inherit" />
            <label> &nbsp; Logging out ...</label>
    </Backdrop>
         {/***************************************************This for the logging out for each mobile site and desktop site******************************************/}
    </div>
   </Container>
  );
};

export default Navbar;

//************************************************************************************************************//
//                                        NavBar Page                                                         //
//                                                                                                            //
// This page for the navbar and all settings                                                                  //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//