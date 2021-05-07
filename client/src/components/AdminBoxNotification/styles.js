import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

export default makeStyles((theme) => ({
    HomeCard: {
        minHeight: '650px',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      inline: {
        display: 'inline',
      },
      TitleTag: {
        paddingTop: 10,
        paddingLeft: 10,
      },
      root: {
        width: '100%',
      marginTop: 7
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
       paddingLeft: '12px',
       paddingTop: 10,
     

      },
      
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      marginlalbel: {
        paddingTop: 10,
       
      },
      mobile: {
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
          minWidth: '100%',
          maxWidth: '500px',
          marginLeft: '-20px',
           },
      },
      margin: {
  
     
       marginTop: '-7px',
       marginRight: 7,
       color: '#BBBBBB',
      },
     
}));
