import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textcenter: {
   
    textAlign: 'center',
    minHeight: '750px',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      minHeight: '1120px',
     
  
    },
  },
 
  
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
 
  container: { 
    height: '100%',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: '100%',
     
  
    },
  
  },
}));

//************************************************************************************************************//
//                                         Material Style                                                     //
//                                                                                                            //
// this is the material style for product page                                                                //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//