
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
   
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  Cricle: {
    position: "absolute",
    top: '40%',
    left: '48%',
    color: 'black',
  },
  OrderPaper: {
    position: "absolute",
    top: "25%",
    width: "84.5%",
    marginLeft : "20px",
    height : "77%",
    zIndex: 1,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    height: '100%',
    position: "absolute",
    top: '25%'
    },
    
  },
  mobilealert: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: '50px'
   
    },
  },
  paperorders: {
    margin: "10px",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "50px",
    paddingTop: "10px",
    paddingLeft: "10px",
    height: "550px",
  
   
  },
  textfield: {
    width: "80%",
    marginBottom: "15px",
  },
  textfieldProducts: {
    width: "30%",
    marginBottom: "20px",

  },
  imagepaperform: {
    height : "77%",
    width : '7%',
    position : 'absolute',
    top: '105px',
    right: '3%',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      position : 'absolute',
     top: '102%',
     right: '0',
     width: '100%',
     height: '110px',
    maxHeight: '100%',
    
    },
  },

  large: {
    marginLeft: "10px",
  },
  qty: {
    marginLeft: "20px",
    fontSize: "medium",
    color: '#A87DAB',

  },
  paperimage: {
    width: '65px',
    marginLeft: "10px",
    marginBottom: "10px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     height: '100px'
   
    },
  },
  cartlabel:{
    marginLeft: "15px",
  
  },
  gridList: {
    width: '100%',
    height: '100%',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     height: '62px'
      
    },
  },
  paymenntpaper: {
    width: '300px',
    height: 50,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     minWidth: '9%'
      
     },
  },
  paymentbutton:{
   width: '600px',
   marginLeft: '107.3%',
   marginTop : '-28%',
    height: 50,
    backgroundColor: "#BBBBBB",
 
  
   ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    width: '100%',
     marginLeft: '-5px',
     marginTop: '10%',
   
   },
  },
  buttonpayment:{
 
    height: 50,
    backgroundColor: "#A87DAB",
    width: '600px',
    marginLeft: '107.3%',
    marginTop : '-28%',
   ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
   width: '100%',
     marginLeft: '-5px',
     marginTop: '10%',
   
  },
  },
  confirmedorderform: {
    width: '1233px',
    backgroundColor: 'white',
    position : 'absolute',
    top: '22.5%',
    height:"675px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      top : '0',
      left: '0px',
      width: '100%',
      height: '1120px'

     },
  },
  cricularform:{
    width: '1233px',
    backgroundColor: 'white',
    position : 'absolute',
    top: '22.5%',
    height:"675px",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     top : '0',
     left: '1px',
     width: '100%',
     height: '1120px'
    },
  },
  blankpage: {
    width: '1233px',
    backgroundColor: 'white',
    position : 'absolute',
    top: '22.5%',
    height:"675px"
  },
    //********************************************Cart material style******************************************/
  Cartroot: {
    width: '300px',

  position: 'absolute',
    
  top: '14.3%',
  right: '90px',
  zIndex: 1,
  backgroundcolor: 'white',
    maxWidth: 345,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      top: '8%',
      right: '5%',
    }
  },
  Cartimage: {
    height: "64px",
    width: "64px"
  },
  Cartexpand: {
    transform: 'rotate(0deg)',
    marginLeft: '80px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  Cartpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "100%",
    height: '90px',
    marginBottom: '20px',
  },
  CartexpandOpen: {
    transform: 'rotate(180deg)',
    
  },
  Cartavatar: {
    backgroundColor: red[500],
  },
  CartTypography:{
    font: "20px",
  },
  Cartbutton:{
    backgroundColor: "#A87DAB",
    marginTop: "10px",
    '&:hover': {
      backgroundColor : '#BBBBBB',
    }
  },
}));

//************************************************************************************************************//
//                                         Material Style                                                     //
//                                                                                                            //
// this is the material style                                                                                 //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//