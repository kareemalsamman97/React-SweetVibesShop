import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartImage from '../../../src/images/carts.png';
import RamdanCartImage from '../../../src/images/cart.png';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid , Paper , Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import CustomerOrder from './CustomerOrder'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const CustomersOrder = ({cart , addToCart , RemoveFromToCart , OrderNow , RemoveAllCart , HideCartIcon}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '300px',

    position: 'absolute',
      
    top: '14.3%',
    right: '90px',
    zIndex: 1,
    backgroundcolor: 'white',
      maxWidth: 345,
      ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
        top: '8%',
        right: '5%',
      }
    },
    image: {
      height: "64px",
      width: "64px"
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: '80px',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: "100%",
      height: '90px',
      marginBottom: '20px',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
      
    },
    avatar: {
      backgroundColor: red[500],
    },
    Typography:{
      font: "20px",
    },
    button:{
      backgroundColor: "#A87DAB",
      marginTop: "10px",
      '&:hover': {
        backgroundColor : '#BBBBBB',
      }
    },
  }));
  const [AppBarColor, SetAppBarColor] = useState('white');
  const [UserNameColor, SetUserNameColor] = useState('black');
  const itemsPrice = cart.reduce((a,c) => a + c.tags * c.qty , 0);
  const ShippingPrice = itemsPrice > 50 ? 0 : 20;
  const totalPrice = itemsPrice + ShippingPrice;
  const [expanded, setExpanded] = React.useState(false);
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB');
  const [MainLogo, SetMainLogo] = useState(CartImage);
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode'))
  const classes = useStyles();
  useEffect(() => {

    localStorage.setItem('cartdata' , JSON.stringify(cart))
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length))
    localStorage.setItem('carttotalprice' , JSON.stringify(totalPrice))

  });
 
  console.log(cart)
  const onordernow = () => {
  
    localStorage.setItem('cartdata' , JSON.stringify(cart))
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length))
    localStorage.setItem('carttotalprice' , JSON.stringify(totalPrice))
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  useEffect(() => {
    if(RamadanModeFromLocal === true){
      SetMainLogo(RamdanCartImage)
      SetLabelLogo('#F7CC70')
      SetAppBarColor('#212121')
      SetUserNameColor('#BBBBBB')
    } else if(RamadanModeFromLocal === false){
      SetMainLogo(CartImage)
      SetLabelLogo('#A87DAB')
      SetAppBarColor('white')
      SetUserNameColor('black')
    }
  });

  return (
    

    <Card className={classes.root} style={{backgroundColor: AppBarColor}}>
      
    
     

       <Typography variant="body2" color="textSecondary" component="h2" className={classes.Typography}>
        {cart.length === 0 && <div>  <label style={{  color: LabelLogo}} className="cartlabelempty">Cart is empty </label> </div>}
       </Typography>
       <Typography variant="body2" color="textSecondary" component="h2" className={classes.Typography}>
        {cart.length !== 0 && <div>  <label style={{  color: LabelLogo}} className="cartlabelempty">Your Cart </label> </div>}
       </Typography>
     <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.image}
          image={MainLogo}
          
        />
     
    
    
    <CardActions disableSpacing>
    {cart.length === 0 && <div>  <label  style={{  color: UserNameColor}} className="labelcart">You have [0] in your cart </label></div>}
    {cart.length !== 0 && <div>  <label style={{  color: UserNameColor}} onChange={onordernow} className="labelcart">You have [{cart.length}] in your cart </label>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        style={{  color: UserNameColor}}
      >
        <ExpandMoreIcon />
      </IconButton>
      </div>}
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph style={{  color: UserNameColor}}>Orders:</Typography>
        <Typography paragraph style={{  color: UserNameColor}}>
        {cart.map((item) => (
     
        <div key={item.title}>
        <Grid container spacing={3}>
        <Paper className={classes.paper} elevation={3} style={{backgroundColor: AppBarColor}}>
        <div className="cartform"  style={{  color: UserNameColor}}>
         
      
          <label  style={{  color: UserNameColor}} className="titlelabel" >{item.title}</label> <br />
      
        <label className='qtylabel'>You Have {item.qty} x ₪ {item.tags}</label>
        <AddIcon style={{  color: LabelLogo}} className="addorder" onClick={()=> addToCart(item)}></AddIcon>
        <MinimizeIcon  style={{  color: LabelLogo}} className="removeorder" onClick={()=> RemoveFromToCart(item)}></MinimizeIcon>
        <Avatar className="Avatar" src = {item.selectedFile} />
        </div>
       </Paper>
       
       </Grid>
         </div>
        
      ))}

        <div>
        {cart.length !== 0 && (
          <>
          <hr></hr>
          <div>
            <div>Items Price</div>
            <div>₪{itemsPrice}</div>
          </div>
          <div>
            <div>Shipping Price</div>
            <div>₪{ShippingPrice} <label style = {{ fontWeight: '600'}}>/ Free shiping above 50₪ </label></div>
          </div>
          <div>
            <div><strong>Total</strong></div>
            <div>₪{totalPrice}</div>
            <div>
          
            </div>
          </div>
         <div>
         <Button  variant="contained" style={{  backgroundColor: LabelLogo}} className={classes.button} onClick={()=>  {OrderNow();   HideCartIcon();}} startIcon={<LocalMallIcon />} color="primary">Order Now</Button>
         <Button  variant="contained"style={{  backgroundColor: LabelLogo}}  className={classes.button}  onClick={() => { handleExpandClick(); RemoveAllCart();}} startIcon={<LocalMallIcon />} color="primary">Empty Cart</Button>
         </div>
          </>
        )}
      </div>
        </Typography>
      
      </CardContent>
    </Collapse>
  </Card>
    
  )}

export default CustomersOrder;