
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    
      margin: theme.spacing(1),
      width: 500,
    },
  },
  paper: {
    position: "absolute",
    top: "25%",
    width: "84.5%",
    marginLeft : "20px",
    height : "77%",
    zIndex: 1,
  
  },
 
 
  buttonSubmit: {
   
    backgroundColor: '#A87DAB',
    width: 600,
    height: 40,
    '&:hover': {
      backgroundColor : '#BBBBBB',
    }
  },
 buttonClear: {
  
  width: 600,
  height: 40,
  '&:hover': {
    backgroundColor : '#A87DAB',
  }
 },
}));
