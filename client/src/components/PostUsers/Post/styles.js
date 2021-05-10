import { makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '80.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'screen',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      maxheight: '300px',
    }
  },
  border: {
    border: 'solid',
  },
  cart: {
    backgroundColor : '#BBBBBB',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      height: '40px'
    }
  },
  order: {
    backgroundColor : '#A87DAB',
    ['@media (max-width:768px)']: {
      height: '40px'
    }
  },
  root: {
    color : '#A87DAB',
    width : '50px',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    ['@media (max-width:768px)']: { 
      height: '450px'
    }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
