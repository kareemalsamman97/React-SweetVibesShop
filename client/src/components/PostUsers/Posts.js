import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid, LinearProgress ,Container, Grow  ,CardActionArea  ,CardActions ,CardContent ,CardMedia    } from '@material-ui/core';
import CardMaterial from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import  './PostUserCss.css';
import Form from '../FormUsers/Form';
import CustomersOrder from '../CustomersOrders/CustomerCart'
import {Card , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Customer from '../CustomersOrders/CustomerCart'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import OrderForm from '../CustomersOrders/CustomerOrder'
import HomeIcon from '@material-ui/icons/Home';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
export const Posts = (value) => {
  const OrderNowStatus = JSON.parse(localStorage.getItem('IsOrderNowButtonClciked'))
  const isSigninClicked = JSON.parse(localStorage.getItem('isSigninClicked'))
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartdata') || '[]')
  const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0')
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode'))
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB');
  const [CartColor, SetCartColor] = useState('#121212');
  const cartmount = JSON.parse(localStorage.getItem('cartstorage'))
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 17,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: LabelLogo,
      color: 'black'
    },
  }))(Badge);
  const [cart , setCart] = useState(cartFromLocalStorage);
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const refreshingpage = JSON.parse(localStorage.getItem('refreshingpage'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId , ] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isisisVisible ,isissetIsVisible] = useState(true);
  const [isVisible ,setIsVisible] = useState(true);
  const [FormisVisible ,FormsetIsVisible] = useState(false);
  const [OrderisVisible ,OrdersetIsVisible] = useState(false);
  const [UserFormisVisible ,UserFormsetIsVisible] = useState(true);
  const [CartLabelisVisible ,CartLabelsetIsVisible] = useState(true);
  const [LabelEffectisVisible ,LabelEffectsetIsVisible] = useState(false);
  const [itemName, setItemName] = useState("");
  const [alret, setalret] = useState("");
  const [sort , sortProducts] = useState();
  
  const HideCartIcon = () => {
   CartLabelsetIsVisible(false)
  }
  useEffect(() => {
    if(RamadanModeFromLocal === true){
      SetCartColor('#BBBBBB')
      SetLabelLogo('#F7CC70')
    } else if(RamadanModeFromLocal === false){
      SetCartColor('#121212')
      SetLabelLogo('#A87DAB')
    }
  });
  useEffect(() => {

    if(OrderNowStatus === true)
    {
      OrdersetIsVisible(true)
      OrdersLIstVIsible();
      setIsVisible(false)
      CartLabelsetIsVisible(false)
      UserFormsetIsVisible(false)
      FormsetIsVisible(false)
    }
  
    if(isSigninClicked === true && isLoggedIn === true){
      OrdersetIsVisible(true)
      CartLabelsetIsVisible(false)
    }
  
  if (currentId === 0) {
    setIsVisible(true)
   
  }
  else {   
    setIsVisible(false)
   

     }
    dispatch(getPosts());
  }, [currentId, dispatch]);

   const onAdd = () => {

   }
   const refreshingpages = () => {
   
   
   }
   
   const OrdersLIstVIsible = () => {
    isissetIsVisible(false)
   }
   const addToCart = (post) => { 
    setItemName("Your Item Have Been Added");
    setalret("info")
    LabelEffectsetIsVisible(true)
    console.log(value)
   
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(function(){

      LabelEffectsetIsVisible(false)
    }, 1000);

    
     const exist = cart.find((x) => x.title === post.title)
     if(exist) {
       
      setCart(cart.map((x) => x.title === post.title ? { ... exist , qty: exist.qty + 1 } : x ))


     } else {
       setCart([ ...cart, { ... post, qty: 1}])
  
     }
  }
  const orderNowButton = (post) => {
    const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0')
      setCart([ ...cart, { ... post, qty: qtyOrder}])
      UserFormsetIsVisible(false)
      OrdersetIsVisible(true)
      FormsetIsVisible(false)
      setIsVisible(false)
      CartLabelsetIsVisible(false)

  }
  const RemoveFromToCart = (post) => {
    LabelEffectsetIsVisible(true)
    setItemName("Your Item Have Been Removed");
    setalret("success")
    setTimeout(function(){
      LabelEffectsetIsVisible(false)
    }, 1000);

    const exist = cart.find((x) => x.title === post.title);
    if(exist.qty === 1) {
      setCart(cart.filter((x) => x.title !== post.title));
    } else {
      setCart(cart.map((x) => 
      x.title === post.title ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  const OrderNow =() => {
    setIsVisible(false)
    window.location.reload()
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(true))
    setIsVisible(false)

    if( currentId != 0) {
      UserFormsetIsVisible(false)
      OrdersetIsVisible(true)
      setIsVisible(false)
      FormsetIsVisible(false)
   

    } else {
      OrdersetIsVisible(true)
      FormsetIsVisible(false)
      setIsVisible(false)
    }
   
    
  }

  const homebutton = () => {
    if(qtyOrder !== 0)
    {
      RemoveAllCartWithOutNotiy()
      localStorage.setItem('qtyorder' , JSON.stringify(0))
    }
    CartLabelsetIsVisible(true)

    localStorage.setItem('isLoggedIn' , JSON.stringify(false))
    localStorage.setItem('isSigninClicked' , JSON.stringify(false))
    if(OrderisVisible === true) {
      OrdersetIsVisible(false)
      setIsVisible(true)
      isissetIsVisible(true)
      localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false))
    }
    if( currentId != 0) {
      UserFormsetIsVisible(false)
      setIsVisible(true)
      isissetIsVisible(true)
    }
  }
 
const showProductFullID = () => {
  UserFormsetIsVisible(true)
  localStorage.setItem('qtyorder' , JSON.stringify(0))
  setIsVisible(false)
}

  const CartForm = () => {

if(FormisVisible === false)
{
 
  FormsetIsVisible(true)

}

if(FormisVisible === true){

  FormsetIsVisible(false)

}
  }

  const RemoveAllCart = () => {
    setItemName("Your Cart Is Empty");
    setalret("success")
    LabelEffectsetIsVisible(true)
    setTimeout(function(){

      LabelEffectsetIsVisible(false)
    }, 1000);
    cart.length = "";
    FormsetIsVisible(false)
    console.log(cart.length)
    localStorage.setItem('cartdata' , JSON.stringify(cart))
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length))
    localStorage.setItem('carttotalprice' , JSON.stringify(20))
    return { setCart: [] }
  }
  const noQtyChoosed = () => {
    setItemName("Please Choose Your Quantity");
    setalret("error")
    LabelEffectsetIsVisible(true)
    setTimeout(function(){

      LabelEffectsetIsVisible(false)
    }, 1000);
  }
  const RemoveAllCartWithOutNotiy = () => {

    cart.length = "";
    FormsetIsVisible(false)
    console.log(cart.length)
    localStorage.setItem('cartdata' , JSON.stringify(cart))
    localStorage.setItem('cartstorage' , JSON.stringify(cart.length))
    localStorage.setItem('carttotalprice' , JSON.stringify(20))
    return { setCart: [] }
  }
  return (
 
   

     
      <Container  maxWidth="lg" className="allform">
        
      <Card className={classes.textcenter} >
         
      <Card.Header >Shop</Card.Header>
     
      <HomeIcon onClick={homebutton} className="homebuttonall" />
      
      <Card.Body >
        <Card.Title>Sweet Vibes Bites</Card.Title>
      
        <Card.Text>
        𝗜 𝗵𝗼𝗽𝗲 𝘆𝗼𝘂 𝗲𝗻𝗷𝗼𝘆 𝘆𝗼𝘂𝗿 𝘀𝘄𝗲𝗲𝘁 𝘃𝗶𝗯𝗲𝘀 𝗮𝘀 𝗺𝘂𝗰𝗵 𝗮𝘀 𝗜 𝗱𝗶𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘁𝗵𝗲𝗺!
        𝗛𝗼𝗺𝗲𝗺𝗮𝗱𝗲 𝗯𝗶𝘁𝗲𝘀 ❥
        </Card.Text>
        <br/><br/><br/>
        <div style={{ display: isisisVisible ? "block" : "none" }}>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={4} md={4}>
              <div style={{ display: isVisible ? "block" : "none" }}>
              <Post onAdd={onAdd} post={post} setCurrentId={setCurrentId}  addToCart={addToCart} showProductFullID={showProductFullID}/>
              </div>
      
          </Grid>
        ))}
      </Grid>
          </div>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>

    <Grid item xs={12} sm={4}>
      <div className="FormClass">
    <div style={{ display: UserFormisVisible ? "block" : "none" }}>
    <Form currentId={currentId} setCurrentId={setCurrentId} noQtyChoosed={noQtyChoosed} orderNowButton={orderNowButton} addToCart={addToCart} RemoveAllCartWithOutNotiy={RemoveAllCartWithOutNotiy}/>
    </div>
    </div>
   
    
  <div className="cartForm">
  <div style={{ display: CartLabelisVisible ? "block" : "none" }}>
  <div style={{ display: LabelEffectisVisible ? "block" : "none" }}>
          <Alert severity={alret} className="Notiy">{itemName}</Alert>
          </div>

          <IconButton  onClick = {CartForm} className="ShopCartIcon"  aria-label="cart" style={{color: CartColor}} >
              <StyledBadge badgeContent={cart.length} >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
         
  </div>

    

    <div style={{ display: OrderisVisible ? "block" : "none" }} >
    <OrderForm cart={cart}   RemoveAllCart={RemoveAllCart}  addToCart={addToCart} setCart={setCart}/>
    </div>

    </Grid>
    <div style={{ display: FormisVisible ? "block" : "none" }}>
    <Customer cart={cart}  RemoveAllCart={RemoveAllCart} addToCart={addToCart}  HideCartIcon={HideCartIcon}   RemoveFromToCart={RemoveFromToCart} OrderNow={OrderNow} />
    </div>

       
 
      </Container>
    
    
  );
};

export default Posts;
