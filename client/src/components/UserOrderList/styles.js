import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

export default makeStyles((theme) => ({
    
    MainLabel: {
        position: 'absolute',
        top: 12,
        fontSize: 14,
    },
    
      row: {
       paddingLeft: 200,
       paddingBottom: 200,
       display: 'inline',
      },
      root: {
    width: '100%',
    flexGrow: 1,
    paddingTop: 20,
   
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    
      width: '100%'
         }
  },
  expandmobile: {
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     
      
         }
  },
  fetchingdata: {
    width: '100%',
    height: '600px',
  },
  ordername: {
    fontSize: theme.typography.pxToRem(15),
  
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     display: 'none',
   
     }
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'left',
   
  },
  column: {
    flexBasis: '33.33%',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      flexBasis: '50%',
      minWidth: '100px'
         }
  },
  helperone: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
         }
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    NameList: { 
      width: '80%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
      
    },
  },
  list: {
    flexGrow: 1,
    maxWidth: 300,
    
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  listroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  rootss: {
    display: 'flex',
    flexWrap: 'wrap',
    
    overflow: 'hidden',
   
  },
  label: {
    paddingTop: 10
  },
  gridList: {
    height: 80,
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  main: {
    width: 300,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
   maxWidth: '150px'
         }
  },
  HomeCard: {
    minHeight: '650px',
  },
  DeleteButton: {
    color: '#A87DAB',
  },
  orderlabel: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
  Whitebox: {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    border: '1px black solid',
   
    },
    whitelabel: {
    fontSize: 12,
    marginLeft: 5,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    width: '100%'
     }
    },
    ColorsInfo: {
    position: 'absolute',
    left: '69%',
    top: 13,
    width: 380,
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
     top: '55px',
     left: '10px',
     width: '100%'
    }
    },
    mobile: {
     
      ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      paddingTop: '50px'
      }
    },
}));
