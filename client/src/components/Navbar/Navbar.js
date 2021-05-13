
import LogoIcon from '../../images/SweetVibes_Logo.jpg';
import  './Navbar.scss';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar,IconButton  ,  Avatar, Button , Switch, Container , Backdrop, FormControlLabel , Grow , MenuList , MenuItem , Menu , Paper , useScrollTrigger , Slide  } from '@material-ui/core';
import { Link, useHistory, useLocation   } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Redirect } from 'react-router';
import BuildIcon from '@material-ui/icons/Build';
import { fetchNotification } from '../../actions/notification';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AdminMan from './../../images/man.png'
import RamadanLogo from '../../images/LogoRamdan.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InfoIcon from '@material-ui/icons/Info';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { render } from 'react-dom';
const Navbar = (props) => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const [MainLogo, SetMainLogo] = useState(LogoIcon);
  const classes = useStyles();
  const [AdminSettingsisVisible, AdminSettingsetIsVisible] = useState(false);
  const [MobileAdminSettingsisVisible, SetMobileAdminSettingsisVisible] = useState(true);
  const [AdminMenuisVisible, AdminMenusetIsVisible] = useState(false);
  const [MobileAdminIconisVisible, setMobileAdminIconisVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ButtonLogginVisible, setButtonLogginVisible] = useState(false);
  const [RamadanMode , SetRamadanMode] = useState(false);
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB');
  const [AppBarColor, SetAppBarColor] = useState('white');
  const [UserNameColor, SetUserNameColor] = useState('black');
  const [ButtonAdminMobile, SetButtonAdminMobile] = useState(false);
  const [AvatarLogginVisible, setAvatarLogginVisible] = useState(false);
  
  const [ProfileAdmin, SeProfileAdmin] = useState(false);
  const [SettingsisVisible, SettingssetIsVisible] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode'))
  var userName = user?.result.name;
  const OrderNowStatus = JSON.parse(localStorage.getItem('IsOrderNowButtonClciked'))
  const cartmount = JSON.parse(localStorage.getItem('cartstorage'))
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    AdminMenusetIsVisible(false)
    SettingssetIsVisible(false)
    AdminSettingsetIsVisible(false)
    localStorage.setItem('isLoggedIn' , JSON.stringify(false))
    localStorage.setItem('isSigninClicked' , JSON.stringify(false))
    history.push("/home");

    setUser(null);
  };

  useEffect(() => {
   
   
    if(userName ===  "SweetVibes Admin"){
      setMobileAdminIconisVisible(true)
      setIsVisible(true);
    
    
    } else if(userName !==  "SweetVibes Admin") {
      setMobileAdminIconisVisible(false)
      setIsVisible(false);

    }


    
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
 
  const handleToggle = () => {
  
    AdminMenusetIsVisible(false)
    SettingssetIsVisible(false)
    AdminSettingsetIsVisible(false)
  
    setOpen(!open);
    setTimeout(function(){
      logout();
      setMobileAdminIconisVisible(false)
      handleClose();
    }, 1500);
  };
  const settingsformclick =()=> {
    if ( SettingsisVisible === false && userName !== "SweetVibes Admin"){
      SettingssetIsVisible(true)
    }
    if ( SettingsisVisible === true && userName !==  "SweetVibes Admin"){
      SettingssetIsVisible(false)
    }
    if (AdminSettingsisVisible === false && userName ===  "SweetVibes Admin"){
      AdminSettingsetIsVisible(true)
  
 
    }
    if (AdminSettingsisVisible === true && userName ===  "SweetVibes Admin"){
      AdminSettingsetIsVisible(false)
 
    }
  }
 
  const closebuttonsettings =()=> {
    if(OrderNowStatus === true) {
      localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false))
      window.location.reload(true);
    }
    AdminMenusetIsVisible(false)
      SettingssetIsVisible(false)
   
  }
  const AdminButton = () => {
    if ( AdminMenuisVisible === false){
      AdminMenusetIsVisible(true)
      SettingssetIsVisible(false)
      AdminSettingsetIsVisible(false)
    }
    if ( AdminMenuisVisible === true){
      AdminMenusetIsVisible(false)
    }
  }
  const hideAdminMenu = () => {

    AdminMenusetIsVisible(false)
    SettingssetIsVisible(false)
    AdminSettingsetIsVisible(false)
  }

 
 
 const Ramadan = () => {

  if(RamadanMode === false){
    SetRamadanMode(true)
    localStorage.setItem('ramadanmode' , JSON.stringify(true))
    history.push('/home');
  }
  if(RamadanMode === true){
    SetRamadanMode(false)
    localStorage.setItem('ramadanmode' , JSON.stringify(false))
    history.push('/home');
  }
 
 }
 
 useEffect(() => {
  Checking();
  if(RamadanModeFromLocal === true){
    SetMainLogo(RamadanLogo)
    SetLabelLogo('#F7CC70')
    SetAppBarColor('#212121')
    SetUserNameColor('#BBBBBB')
  } else if(RamadanModeFromLocal === false){
    SetMainLogo(LogoIcon)
    SetLabelLogo('#A87DAB')
    SetAppBarColor('white')
    SetUserNameColor('black')
  }
});


const Checking = () => {
  if (userName === undefined){
    setButtonLogginVisible(true)
    setAvatarLogginVisible(false)
  }
  if (userName !== undefined){
    setButtonLogginVisible(false)
    setAvatarLogginVisible(true)
  }
}

const MobileSettings = () => {
  if (userName === undefined){
    setisLoggedin(false)
    history.push('/auth');

  }
   if (userName !== undefined && userName !==  "SweetVibes Admin"){
    setOpenMobile(!openMobile);
    setMobileAdminIconisVisible(false)
    setisLoggedin(true)
   }
 if (userName ===  "SweetVibes Admin"){
  setOpenMobileAdmin(!openMobileAdmim);
  setMobileAdminIconisVisible(true)
  setisLoggedin(true)
}
}

const [openMobile, setOpenMobile] = React.useState(false);
const [openMobileAdmim, setOpenMobileAdmin] = React.useState(false);
const handleCloseMobile = () => {
  setOpenMobile(false);
};
const AdminhandleCloseMobile = () => {
  setOpenMobileAdmin(false);

};
  return (
    <Container maxWidth="lg">
       <Grow in>
  
        <AppBar className = {classes.Bar} color="inherit" style = {{backgroundColor: AppBarColor}}>
          <Toolbar>
       

          <Avatar  className={classes.purple} style={{paddingLeft: '13px' , paddingTop: '8px' , backgroundColor: LabelLogo , display: AvatarLogginVisible ? "block" : "none" }}  onClick={MobileSettings} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
         <IconButton style={{marginLeft : '-10px', display: AvatarLogginVisible ? "block" : "none" }}>
              <ArrowDropDownIcon style={{color : '#696969'}} onClick={MobileSettings}/>
            </IconButton>
     
         
         <IconButton className={classes.navbarbuttons} >
         <div style={{ display: ButtonLogginVisible ? "block" : "none" }}>
         <Button component={Link} to="/auth" variant="contained" style={{backgroundColor: LabelLogo }} className={classes.mobileButton} startIcon={<PermIdentityIcon />} color="primary">Sign In</Button>
           </div>
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
       
          </Toolbar>
        </AppBar>
     
      </Grow>
    <AppBar className={classes.appBar} position="static" color="inherit" style = {{backgroundColor: AppBarColor}}>
      <div className={classes.brandContainer}>
      <img className={classes.image} src={MainLogo} alt="icon" height="60" />
      <Typography style={{color: LabelLogo}} className={classes.heading} variant="h6" align="center">SweetVibes</Typography>
      
      <FormControlLabel className={classes.Switch} style={{color : LabelLogo}}
        control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> }
          label="Ramadan Mode" 
      />

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
    <div style={{ display: AdminSettingsisVisible ? "block" : "none" }}>
    <Paper className={classes.AdminLogout} style={{backgroundColor : AppBarColor}}>
        <MenuList>
        <Link  to="/storage" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>Edit Storage</MenuItem></Link>
              <Link  to="/orderslist" style={{ textDecoration: 'none' , color: UserNameColor}}><MenuItem onClick={hideAdminMenu}>Orders Customers</MenuItem></Link>
              <Link  to="/admininbox" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>InBox</MenuItem></Link>
          <MenuItem style={{ textDecoration: 'none' , color: UserNameColor}} onClick={handleToggle}>Log Out</MenuItem>
        </MenuList>
      </Paper>
 
    </div>
  
   
    
    <div style={{ display: SettingsisVisible ? "block" : "none" }}>
    <Paper className={classes.AdminLogout} style={{backgroundColor : AppBarColor}}>
        <MenuList>
           <Link  to="/orders" style={{ textDecoration: 'none' , color: UserNameColor}}> <MenuItem onClick={hideAdminMenu}>My Orders</MenuItem></Link>
          <MenuItem style={{ textDecoration: 'none' , color: UserNameColor}} onClick={handleToggle}>Log Out</MenuItem>
        </MenuList>
      </Paper>
    </div>
    <div>
    <div>
   <Backdrop className={classes.mobilebackgrop} open={openMobileAdmim} onClick={AdminhandleCloseMobile} >
   <MenuList>
   <Typography className={classes.userName} style={{color : LabelLogo}}  onClick={MobileSettings} variant="h6">{user?.result.name}</Typography>
           
  
          
   <FormControlLabel style={{color : LabelLogo}}
        control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> }
          label="Ramadan Mode" 
      />
        <Link  to="/storage" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}> <MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>Edit Storage</MenuItem></Link>
              <Link  to="/orderslist" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}><MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>Orders Customers</MenuItem></Link>
              <Link  to="/admininbox" style={{ textDecoration: 'none' , color:  '#BBBBBB'}}> <MenuItem onClick={hideAdminMenu}  style={{  fontSize: '20px'}}>InBox</MenuItem></Link>
          <MenuItem style={{ textDecoration: 'none' , color:  '#BBBBBB' ,  fontSize: '20px'}} onClick={handleToggle}>Log Out</MenuItem>
        </MenuList>
   </Backdrop>
 </div>
 
 <div>
   
      
   <Backdrop className={classes.mobilebackgrop} open={openMobile} onClick={handleCloseMobile} >
   <MenuList>
   <Typography className={classes.userName} style={{color : LabelLogo}}  onClick={MobileSettings} variant="h6">{user?.result.name}</Typography>
   <FormControlLabel style={{color : LabelLogo}}
   
        control={<Switch  name="checkedB" style={{color: LabelLogo , backgroundColor: '#BBBBBB'}} checked = {RamadanModeFromLocal} onChange={Ramadan}  size="small" /> }
          label="Ramadan Mode" 
      />
      <Link  to="/orders" style={{ textDecoration: 'none' , color: '#BBBBBB'}}> <MenuItem  style={{  fontSize: '20px'}}>My Orders</MenuItem></Link>
       <MenuItem style={{ textDecoration: 'none' , color: '#BBBBBB' , fontSize: '20px'}} onClick={handleToggle} >Log Out</MenuItem>
     </MenuList>
   </Backdrop>
 </div>
 
      
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
        <label> &nbsp; Logging out ...</label>
      </Backdrop>
    </div>
    

   </Container>
   
  );
};

export default Navbar;