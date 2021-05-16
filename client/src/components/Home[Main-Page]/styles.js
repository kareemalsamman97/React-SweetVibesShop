import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: '768px'
    }
  },
  button: {
    width: '100px',
    height : '50px',
    left : '0px',
    position : 'absolute',
    right : '0px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: '100%'
    }
  },
  paperlast: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: '260px',
      width: '180px',
      padding: theme.spacing(1),
    }
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      zIndex : '-1',
    },
  },
}));

//************************************************************************************************************//
//                                         Material Style                                                     //
//                                                                                                            //
// this is the material style for home page                                                                   //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//