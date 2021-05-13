import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
    }
  
   
  },
  mobilelabel: {
    marginTop: '-7px',
    marginLeft: 5,
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      color : '#BBBBBB',
    }
  },
  mobileincons: {
    '&:hover': {
      color : '#BBBBBB',
    },
  marginLeft: '15px',
  marginTop: '-10px'
 
  },
  Bar: {
    top: 'auto',
    bottom: 0,
    borderRadius: 15,
      
    backgroundColor: 'white',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'block',
     
  
    },
    ['@media (min-width: 1281px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
    }
  },
  root: {
    backgroundColor : '#A87DAB',
    '&:hover': {
      backgroundColor : '#BBBBBB',
      
    }
  },
  mobileButton: {
    marginTop: '-10px',
    width: '115px',
    backgroundColor : '#A87DAB',
    '&:hover': {
      backgroundColor : '#BBBBBB',
      
    }
  },
  navbarbuttons: {
    marginLeft: '-20px',
    marginTop: '3px',
  },
  labelsettings: {
 
    cursor: 'pointer',
    paddingLeft: 35,
    position: 'absolute',
    fontSize: 'large',
    top: 6,
    color: 'black',
    '&:hover': {
      color : '#A87DAB',
    }
  },
  settingicon: {
    position: 'absolute',
    top: 7,
  },
  closeicon: {
    cursor: 'pointer',
    right: 40,
    marginLeft: 150,
    position: 'absolute',
    
    top: 9,
    '&:hover': {
      color : '#A87DAB',
    }
  },
  settingsform: {
    width: 220,
    height: 40,
    position: 'absolute',
    left: '65%',
    top: 100,
    zIndex: +1,
    boxSizing: 'border-box',
  },
  adminbutton: {

   height : '45px',
   padding: "10px",

    backgroundColor : '#A87DAB',
    '&:hover': {
      backgroundColor : '#BBBBBB',
    }
  },
  heading: {
   
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
   
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  

  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  mobilebackgrop:{
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#282828',
   
  },
  Switch: {
   position: 'absolute',
   left: '220px',
   top: '82px',
  fontSize: '10px',
  
  },
  AdminLogout: {
    zIndex: '+2',
    position: 'absolute',
   marginLeft: '68.6%',
   marginTop: -55,
   width: 200
  },
  MobileAdminLogout: {
    zIndex: '+2', 
   
    position: '-webkit-sticky',
    position: 'sticky',
  
    left: 3,
   width: 200
  },
 
  userName: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingLeft: 10,
    '&:hover': {
      color : '#A87DAB',
    },
     ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    fontSize: '26px',
    position: 'absolute',
    top: '-200px',
    minWidth: '300px',
    left: '-35px'

    }
    
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
   
  },
  logout:{
    backgroundColor : '#BBBBBB',
    '&:hover': {
      backgroundColor : '#A87DAB',
    }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[600]),
    backgroundColor: '#A87DAB',
    cursor: 'pointer',
   
    
  },

  AdminButton: {
    color: '#A87DAB',
    width: '20px',
    marginTop: '5px'
    

  },
  MobileAdminButton:{
    color: '#A87DAB',
    width: '20px',
    marginTop: '-10px'
    
  },
}));
