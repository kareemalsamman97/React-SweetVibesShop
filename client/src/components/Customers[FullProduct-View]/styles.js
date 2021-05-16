
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '98.9%',
    marginTop: -8,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    width: '100%'
        
      }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
   
  },
  content: {
    flex: '1 0 auto',
  
  },
 
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
    backgroundColor : '#A87DAB',
    marginLeft : 20,
    width: 200,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    marginTop: '20px',
    minWidth: '280px'
      
    }
  },
  formControl: {

    minWidth: 630,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: '1%',
    minWidth: '280px',
    maxWidth: '500px',
    }
  },
}));

//************************************************************************************************************//
//                                         Material Style                                                     //
//                                                                                                            //
// this is the material style for full product view page                                                      //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//