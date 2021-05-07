import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

export default makeStyles((theme) => ({
    Card : {
        height: '650px',
        width: '100%',
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
          minHeight: '6400px',
     
        }
    },
    mobileheader: {
      ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      
        width: '100px'
      }
    },
    Label: {
        paddingLeft: '47%'
    },
    mobileone: {
      ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
       marginTop: '560px',
       marginLeft: '-165px'
      }
    },
    mainpaper: {
        height: 540,
        width: '550px',
       marginLeft: 25,
       ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    
       maxWidth: '300px',
       
        marginLeft: '-15px'
      }
      },
      root: {
        flexGrow: 1,
      
      },
      Logo: {
        width: 200,
        height: 200,
       marginLeft : '33%',
       ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft : '10%',
       }
      },
      LogoAfter: {
        width: 200,
        height: 200,
       marginLeft : '42%',
      },
      TextField : {
        marginTop : 13,
        width: '97%',
        paddingLeft: 10,
        
      },
      typography: {
        fontFamily: 'Raleway',
        fontDisplay: 'swap',
        fontWeight: '300',
      },
      typographyFilter: {
        fontFamily: 'Raleway',
        fontDisplay: 'swap',
        fontWeight: '500',
        paddingLeft: '30%',
      },
      button: {
        width: '95%',
        height: 50,
        marginLeft: 10,
       marginTop : 20,
       backgroundColor : '#A87DAB',
      },
     
}));
