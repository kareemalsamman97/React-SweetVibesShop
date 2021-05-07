import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(51),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    width: '30%',
    height: '500px',
    ['@media (max-width:768px)']: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(0),
      width : '100%',
      height: '100%',
    }
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  rootdialog: {
    margin: 0,
    padding: theme.spacing(2),
  },
 
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  label: {
    

    
  },
  
  avatar: {

    backgroundColor: 'white',
  },
  textbox: {
    color: 'white',
   },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#A87DAB',
  },
  card: {
    width: '2000px',

  },
  buttons: {
 
    marginRight: theme.spacing(6),
  },
 
}));
