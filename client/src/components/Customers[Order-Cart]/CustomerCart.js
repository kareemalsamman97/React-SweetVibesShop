import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartImage from '../../../src/images/carts.png';
import RamdanCartImage from '../../../src/images/cart.png';
import useStyles from './styles';
import clsx from 'clsx';
import { Grid , Avatar , Typography , IconButton , Paper , Button , Card ,  CardMedia , CardContent , CardActions , Collapse} from '@material-ui/core';
//**********************************All*Importing*Imports*******************************************************//
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import LocalMallIcon from '@material-ui/icons/LocalMall';
//**********************************All*Pictures*Imports*********************************************************//
const CustomersOrder = ({cart , addToCart , RemoveFromToCart , OrderNow , RemoveAllCart , HideCartIcon}) => {

  const itemsPrice = cart.reduce((a,c) => a + c.tags * c.qty , 0); // making the varible to make the tootal price that the price of the product with the quntity of the products that has been choosed
  const ShippingPrice = itemsPrice > 50 ? 0 : 20; // if the the item that has been choosed more than 50 shekel so it will be with out shiping
  const totalPrice = itemsPrice + ShippingPrice; // it will give the total price with the items and the shiping
  const [AppBarColor, SetAppBarColor] = useState('white'); // changing the app bar color if ramdan mode is activated
  const [UserNameColor, SetUserNameColor] = useState('black'); // changeing the labels color if ramdan mode is on
  const [expanded, setExpanded] = React.useState(false); // to expand the cart or no
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // changing the label color if ramdan is on
  const [MainLogo, SetMainLogo] = useState(CartImage); // changing the logo color if ramdan mode is on
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode')); // cheking if ramdan mode is on
  const classes = useStyles(); // using the material style
  useEffect(() => {
    localStorage.setItem('cartdata' , JSON.stringify(cart)); // saving the cart data into localstorage that can be easy to back to the cart
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length)); // saving the cart bagdet length into localstorage
    localStorage.setItem('carttotalprice' , JSON.stringify(totalPrice)); // saving the total price of the products that the user can reset them
    if(RamadanModeFromLocal === true){ // cheking if ramdan mode is on
    SetMainLogo(RamdanCartImage); // changing the logo
    SetLabelLogo('#F7CC70'); // the labels color
    SetAppBarColor('#212121'); // the app background color
    SetUserNameColor('#BBBBBB'); // the labels color
    } else if(RamadanModeFromLocal === false){ // cheking if ramdan mode is off
    SetMainLogo(CartImage); // changing the logo  
    SetLabelLogo('#A87DAB'); // cheking the label color
    SetAppBarColor('white'); // chaning the app background color
    SetUserNameColor('black'); // chaning the labels color
    } 
  });
 
  const onordernow = () => { // order now button
    localStorage.setItem('cartdata' , JSON.stringify(cart)) // will save the cart data in local storage
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length)) // will save the cart length in local storage
    localStorage.setItem('carttotalprice' , JSON.stringify(totalPrice)) // will save the total price in local storage
  }
  const handleExpandClick = () => { // expand the cart 
    setExpanded(!expanded); // here will expand the cart
  };
  

  return (
    
    <Card className={classes.Cartroot} style={{backgroundColor: AppBarColor}}>
      <Typography variant="body2" color="textSecondary" component="h2" className={classes.CartTypography}>
      {cart.length === 0 && <div>  <label style={{  color: LabelLogo}} className="cartlabelempty">Cart is empty </label> </div>}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="h2" className={classes.CartTypography}>
      {cart.length !== 0 && <div>  <label style={{  color: LabelLogo}} className="cartlabelempty">Your Cart </label> </div>}
      </Typography>
      <CardMedia component="img" alt="Contemplative Reptile" className={classes.Cartimage} image={MainLogo}/>
      <CardActions disableSpacing>
      {cart.length === 0 && <div>  <label  style={{  color: UserNameColor}} className="labelcart">You have [0] in your cart </label></div>}
      {cart.length !== 0 && <div>  <label style={{  color: UserNameColor}} onChange={onordernow} className="labelcart">You have [{cart.length}] in your cart </label>
      <IconButton className={clsx(classes.Cartexpand, {[classes.CartexpandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" style={{  color: UserNameColor}}>
      <ExpandMoreIcon />
      </IconButton>
      </div>}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <Typography paragraph style={{  color: UserNameColor}}>Orders:</Typography>
      <Typography paragraph style={{  color: UserNameColor}}>{cart.map((item) => (
      <div key={item.title}>
      <Grid container spacing={3}>
      <Paper className={classes.Cartpaper} elevation={3} style={{backgroundColor: AppBarColor}}>
      <div className="cartform"  style={{  color: UserNameColor}}>
      <label  style={{  color: UserNameColor}} className="titlelabel" >{item.title}</label> <br />
      <label className='qtylabel'>You Have {item.qty} x ₪ {item.tags}</label>
      <AddIcon style={{  color: LabelLogo , cursor : 'pointer'}} className="addorder" onClick={()=> addToCart(item)}></AddIcon>
      <MinimizeIcon  style={{  color: LabelLogo  , cursor : 'pointer'}} className="removeorder" onClick={()=> RemoveFromToCart(item)}></MinimizeIcon>
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
      <Button  variant="contained" style={{  backgroundColor: LabelLogo}} className={classes.Cartbutton} onClick={()=>  {OrderNow();   HideCartIcon();}} startIcon={<LocalMallIcon />} color="primary">Order Now</Button>
      <Button  variant="contained"style={{  backgroundColor: LabelLogo}}  className={classes.Cartbutton}  onClick={() => { handleExpandClick(); RemoveAllCart();}} startIcon={<LocalMallIcon />} color="primary">Empty Cart</Button>
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

//************************************************************************************************************//
//                                        Cart Page                                                           //
//                                                                                                            //
// this is the page will show the cart for the user                                                           //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//