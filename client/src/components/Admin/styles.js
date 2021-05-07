
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
   
  },
  
  buttonSubmit: {
    marginBottom: 10,
  },
  table: {
    minWidth: 700,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    minHeight: '600px'
         }
  },
  delete: {
    color: '#A87DAB',
  },
  fetchingdata: {
    width: '100%',
    height: '600px',
  },
  edit: {
    color: '#BBBBBB',
  },
  
}));
