import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    width : '1180px',
    marginLeft: 10,
    marginBottom: 20,
    minHeight: 170,
    maxHeight: 500,
    marginTop : 10,
   
  },
  CircularProgress: {
  color: 'black',
 
  },
  NewOrder: {
    marginTop: '100px',
    
   
  },
  fetchingdata: {
    width: '100%',
    height: '600px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardcontent: {
    flex: '1 0 auto',
    flexGrow: 1,
    width : 900,

  },
  mobile: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: '1230px'
    }
  },
  mobileone: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: '1230px',
      height: '100%'
    }
  },
  Labels: {
    paddingLeft: theme.spacing(10),
    textAlign: 'left',
  },
  cover: {
    width: 151,
  },
  qty: {
    marginLeft: "20px",
    fontSize: "medium",
    color: '#252525',

  },
  large: {
    marginLeft: "10px",
  },
  box: {
    width: '40%',
   backgroundColor: "#F8F8F8",
  },


  paperimage: {
    width: '100%',
   
   
  
  },
  media: {
    width: 200,
    height: 200
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bottom: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  mainlabel: {
   marginTop: 100
  },
  imagepaperform: {
  
    width : '85%',
    textAlign: 'left',
    paddingTop: 5,


  },
  Button: { 
    width: '130px',
    height: '29%',
    boxShadow: 'none',
    marginRight: 1,
    textTransform: 'none',
    marginBottom: 10,
    marginTop: 3,
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    fontFamily: [
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#BBBBBB',
     
    },
    '&:active': {
     
      backgroundColor: '#BBBBBB',
    },
  },
  EditButton: { 
    width: '130px',
    height: '29%',
    boxShadow: 'none',
    marginRight: 1,
    textTransform: 'none',
    marginBottom: 10,
    marginTop: 3,
    fontSize: 16,
    padding: '6px 12px',
    backgroundColor: '#BBBBBB',
    color: 'black',
    border : '1px solid #707070',
    lineHeight: 1.5,
    fontFamily: [
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#A87DAB',
    },
    '&:active': {
      backgroundColor: '#A87DAB',
     
    },
  },
  ReadyButton: { 
    width: '130px',
    height: '29%',
    boxShadow: 'none',
    marginRight: 1,
    textTransform: 'none',
    marginBottom: 10,
    marginTop: 3,
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid #755777',
    lineHeight: 1.5,
    backgroundColor: '#A87DAB',
    fontFamily: [
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      borderColor: '#A87DAB',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#A87DAB',
    },
  },
  margin: {
    marginRight: theme.spacing(3),
  },
  OrdersList: {
    paddingLeft: 80
    

  },
  MainPaper: {
    width: "97%",
    height: 150,
    marginLeft: '1%',
    backgroundColor: '#F8F8F8',
  },
  alret : {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
},
MainLabel: {
paddingTop: 50
},
Container: {
  paddingLeft: 10,
  paddingTop: 50,
}, 
Main: {
width: '1200px',
},
TextField: {
width: '98%'
},
buttonClear: {
  width: 200,
  backgroundColor: '#BBBBBB',
  marginLeft: 30,
},
buttonBack: {
  width: 200,
  backgroundColor: '#BBBBBB',
},
buttonSave : {
  width: 200,
  backgroundColor: '#A87DAB',
  marginLeft: 30,
},
Whitebox: {
width: '20px',
height: '20px',
backgroundColor: 'white',
border: '1px black solid'
},
whitelabel: {
fontSize: 12,
marginLeft: 5,
},
ColorsInfo: {
position: 'absolute',
left: '65%',
top: 13,
width: 405,
},
GreenColorsInfo: {
  position: 'absolute',
  left: '40%',
  top: 13,
  },
Greenlabel: {
  fontSize: 12,
  paddingLeft: '300px',
  marginTop: -19
  },
}));
