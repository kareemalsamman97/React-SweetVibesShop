import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import  './PostUserCss.css';
import { Grid,Container } from '@material-ui/core';
import Post from './EachProduct/EachProduct'; // each product view page
import Form from '../Customers[FullProduct-View]/FullProductView'; // full product view page
import Customer from '../Customers[Order-Cart]/CustomerCart'; // customers cart page 
import OrderForm from '../Customers[Order-Cart]/CustomerOrder'; // customers order page
import {Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import HomeIcon from '@material-ui/icons/Home';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
//**********************************All*Importing*Imports*******************************************************//
export const Posts = (value) => {
  //[ all importing variable
  const classes = useStyles(); // getting the material class 
  const [currentId, setCurrentId , ] = useState(0); // getting the id of the user
  const dispatch = useDispatch(); // getting all actions
  const history = useHistory(); // handling push to route
  //]
  //[ all localstorage varible
  const CurrentIDHome = JSON.parse(localStorage.getItem('ordercurrentidfromhome')); // getting from local storage the id product from the home page , if the user choosed to see one of the product 
  const OrderNowStatus = JSON.parse(localStorage.getItem('IsOrderNowButtonClciked')); // getting from local storage if order button is clicked from the cart becuase if clicked and the user is get out from the shop page and want to back it will show the complete order page
  const isSigninClicked = JSON.parse(localStorage.getItem('isSigninClicked')); // getting from local storage if siging in button in clicked in order page
  const fullproductview = JSON.parse(localStorage.getItem('fullproductview')); // getting from local storage if the user clicked on one of the orders and want to see detials
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')); // getting from local storage is the user is logged in
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartdata') || '[]'); // getting from local storage all cart data 
  const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0'); // getting from local storage the quantity number only when the user is choosing to use/buy a one product only 
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode')); // getting from local storage ramdan mode
  //]
  //[ All UseState Consting 
  const [cart , setCart] = useState(cartFromLocalStorage); // putting all cart data from local storage into cart varible
  const posts = useSelector((state) => state.posts); // getting from state all the data about products from database
  const [WholeProductsIsVisibile ,setWholeProductsIsVisibile] = useState(true); // it handling the whole product page to show or to hide
  const [ProductsIsVisibile ,setProductsIsVisibile] = useState(true); // it handling the product page to show or to hide
  const [FullProductViewPage ,setFullProductViewPage] = useState(true); // it will handling the full product view page
  const [CartPage ,setCartPage] = useState(false); // it handling the cart page
  const [OrderisVisible ,OrdersetIsVisible] = useState(false); // it handling the customer order page
  const [CartLabelisVisible ,CartLabelsetIsVisible] = useState(true); // it handling the cart of the label and the icon
  const [LabelEffectisVisible ,LabelEffectsetIsVisible] = useState(false); // it will handle the alret of the cart if the user is added or deleted an item so it will show the arlet
  const [ArletLabel, setArletLabel] = useState(""); // handling to change the alret label status if the user added or removed a product
  const [alret, setalret] = useState(""); // handling to change the alret type if it succed or info or danger
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // handling to change the label logo color if ramdan mode is on
  const [CartColor, SetCartColor] = useState('#121212'); // handling to change cart color if ramdan mode is on

  //]

  const StyledBadge = withStyles((theme) => ({ // styleing the badge count number that give me to change the background color with ramdan color 
    badge: {
      right: -3,
      top: 17,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: LabelLogo,
      color: 'black',
    },
  }))(Badge);
   
  useEffect(() => { // checking and running the code for one timer for ramdan mode and cart setting and if back button clicked
    if(CurrentIDHome !== '0') // here it will check if the user has been choised to see a product from home page
    {
      setCurrentId(CurrentIDHome); // it will set the id of product that the user want to see that the product whoes choosed from home page
      localStorage.setItem('ordercurrentidfromhome' , JSON.stringify('0')); // and then it will back it to 0 that it will not shown again if the shop clicked 
    }
    if(RamadanModeFromLocal === true){ // checking ramdan mode is on
      SetCartColor('#BBBBBB'); // chaning cart label color
      SetLabelLogo('#F7CC70'); // changing all labels color
    } else if(RamadanModeFromLocal === false){ // cheing if ramdan mode is off
      SetCartColor('#121212'); // changing cart label color
      SetLabelLogo('#A87DAB'); // changing all labels color
    }
    if(OrderNowStatus === true) //cheking if ordernow button from cart is clicked 
    { // it should to show the complete order page and hide all pages
      OrdersetIsVisible(true) // it will show the complete order page
      OrdersLIstVIsible(); // this function will hide the whole product page
      setProductsIsVisibile(false); // it will hide the product page
      CartLabelsetIsVisible(false); // it will hide the cart label and icon
      setFullProductViewPage(false); // it will hide full product view page
      setCartPage(false); // it will hide the  cart page
    }
    if(isSigninClicked === true && isLoggedIn === true){ // here it will check if the user is logged in and he clicked on order now in cart page so it will 
      OrdersetIsVisible(true); // it will show the complete order page
      CartLabelsetIsVisible(false); // and it will hide the cart icon that the user can't edit or add another products
    }
    if (currentId === 0) { // checking if there is product clicked on to see full product view page
    setProductsIsVisibile(true); // it will show product page
    }
    else {   
    setProductsIsVisibile(false) // it will hide product page
     }
    window.onpopstate = () => { // if back button is clicked and
    if(OrderNowStatus === true) { // and order now button clicked so
    setWholeProductsIsVisibile(true); // it will show the whole product page
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false)); // and will make in local storage order button clicked is zero
    localStorage.setItem('isSigninClicked' , JSON.stringify(false)); // and is not siging in button clicked
    CartLabelsetIsVisible(true); // and will show the cart label and icon
    OrdersetIsVisible(false); // and will hide the complete order page
    history.push('/shop'); // and will refresh and get complete the effects back
    }
    if(OrderNowStatus === false) { // if back button is clicked and the order now button in not clicked
    history.push('/shop'); // it will give and refresh the complete effects
    }
    if(fullproductview === true){ // if back button is clicked and full product view page is on so
    setFullProductViewPage(false); // it will hide the full product view page
    localStorage.setItem('fullproductview' , false); // it will set in local storage that the full product view is not shown
    setProductsIsVisibile(true); // and will show the products
    history.push('/shop'); // and will get the shop page 
    }}
  });

  useEffect(() => { // checking and running the code for one time to get all products and to get the id of the products
    dispatch(getPosts());
  }, [currentId, dispatch]);

  function Alert(props) { // here is getting the function of alert
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
 
  const HideCartIcon = () => { // here it will hide the cart icon when 'complete order page' is shown
   CartLabelsetIsVisible(false); // it will delete the cart icon and label
  }
 
  const OrdersLIstVIsible = () => { // on click it will hide the whole prodcut page
    setWholeProductsIsVisibile(false); // here will hide the product page
  }

  const addToCart = (post) => {  // here it will add the product to the cart page
    setArletLabel("Your Item Have Been Added"); // it will change the alret label that the user is added a product
    setalret("info"); // it will change the color and the type of the arlet
    LabelEffectsetIsVisible(true); // it will show the arlet
    window.scrollTo({top: 0, behavior: 'smooth'}); // it will scroll the page to the top
    setTimeout(function(){ // it will active timer
      LabelEffectsetIsVisible(false); // after a time it will hide the arlet
  }, 1000);

  const exist = cart.find((x) => x.title === post.title); // here it will check if the product that the user added is exit or no
     if(exist) { // if the product is exist so 
      setCart(cart.map((x) => x.title === post.title  ? { ... exist , qty: exist.qty + 1 } : x )); // it will incress the number for the product in the cart page
     } else { // if no
       setCart([ ...cart, {...post, qty: 1}]); // it will add a new product in the cart page
     }
  }

  const orderNowButton = (post) => { // if order now button in full product view page is clicked
      const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0'); // it will get the quantity number from local storage that cart page is adding to local storage
      setCart([ ...cart, { ...post, qty: qtyOrder}]); // and it will set the cart only the product that the user is clicked and watching it in full product view
      setFullProductViewPage(false); // so it will hide the full product view
      OrdersetIsVisible(true); // and showing the complete order page
      setCartPage(false); // and hiding the cart page
      setProductsIsVisibile(false); // and hinding the products
      CartLabelsetIsVisible(false); // and hiding cart label and icon
  }

  const RemoveFromToCart = (post) => { // if the user want to decrease one the product in the cart page
    LabelEffectsetIsVisible(true); // it will show the alret box in the shop page
    setArletLabel("Your Item Have Been Removed"); // it will set the arlet label that the user is decreasing the product in the cart page
    setalret("success"); // setting the arlet type and color
    setTimeout(function(){ // activing timer
      LabelEffectsetIsVisible(false); // after a time it will hide the alret box
    }, 1000);

  const exist = cart.find((x) => x.title === post.title); // here it will increase or decrease the quantity of the product
    if(exist.qty === 1) { // if the product quantity is one
    setCart(cart.filter((x) => x.title !== post.title)); // here it will increase the number
    } else { // if no
    setCart(cart.map((x) => 
    x.title === post.title ? { ...exist, qty: exist.qty - 1 } : x)) // it will decreasing the number
    }
  }

  const OrderNow =() => { // if the user clickd on the order now in cart page
    setProductsIsVisibile(false); // it will hide the products page
    window.location.reload(); // it will rfresh the page that all information will be shown
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(true)); // will save in local storage that button is clicked that if the user get out from the page he can get it back automatically
    if( currentId !== 0) { // now it will check if there a user logged in so if yes
      setFullProductViewPage(false); // it will hide the full view product page
      OrdersetIsVisible(true); // and show the complete order page
      setProductsIsVisibile(false); // and will hide the product page
      setCartPage(false); // and will hide the cart page
    } else { // if there is no user so
      OrdersetIsVisible(true); // it will show the complete order page
      setCartPage(false); // and will hide the cart page
      setProductsIsVisibile(false); // and will hide the product page
    }
  }

  const homebutton = () => { // on clicking home button in the shop page
    if(qtyOrder !== 0) // if the quantity number in local storage is not nothing / that the user is choosed to buy only one product
    {
      RemoveAllCartWithOutNotiy(); // so it will delete all the cart that the user can only see the one product that he choosed to buy
      localStorage.setItem('qtyorder' , JSON.stringify(0)); // and the it will make the quantity product is zero that it will back the normal mode
    }
    CartLabelsetIsVisible(true); // here it will show back the cart label and icon
    localStorage.setItem('fullproductview' , false); // it will save in local storage the the full product is disabled
    localStorage.setItem('isSigninClicked' , JSON.stringify(false)); // it will save in local storage that sign in clicked is disabled
    if(OrderisVisible === true) { // here it will check if the complete order page is shown so if shown it will
    OrdersetIsVisible(false); // it will hide the complete order page
    setProductsIsVisibile(true); // it will show the products
    setWholeProductsIsVisibile(true); // it will show the whole products page
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false));  // it will disable the order now button clicked in local storage
    }
    if( currentId !== 0) { // it will check if the users in full product page
    setFullProductViewPage(false); // so it will hide the full product view page
    setProductsIsVisibile(true); // and show the products
    setWholeProductsIsVisibile(true); // and show the whold product page
    }
  }
 
const showProductFullID = () => { // if the user clicked on the product to see the full product
  setFullProductViewPage(true); // it will show the full product view page
  localStorage.setItem('fullproductview' , true); // and will set in local storage that the full product view page is on
  localStorage.setItem('qtyorder' , JSON.stringify(0)); // and will set the quantity number to zero that if the user want to choose a new product to buy it only
  setProductsIsVisibile(false); // and then it will hide the products
}

const CartForm = () => { // if the user checked the icon or the label cart in navbar so 
  if(CartPage === false) // if the cart page is not show so
  {
  setCartPage(true); // it will show the cart page
  }
  if(CartPage === true){ // if the cart page is shown so
  setCartPage(false); // it will hide the cart page
  }
}

const RemoveAllCart = () => { // here if the user clicked empty cart in cart page so
  setArletLabel("Your Cart Is Empty"); // it will change the alret label to the cart is empty
  setalret("success"); // and will change the color and the type of the arlet
  LabelEffectsetIsVisible(true); // and will show the alret
  setTimeout(function(){ // and actving the timer that after a time
  LabelEffectsetIsVisible(false); // it will hide the alret
  }, 1000);
  cart.length = ""; // and it will make the cart label counting bagdet to zero
  setCartPage(false); // it will hide the cart page that give effects
  localStorage.setItem('cartdata' , JSON.stringify(cart)); // it will delete the cart data from local storage
  localStorage.setItem('cartstorage' , JSON.stringify(cart.length)); // it will delete the cart count bagdet and set it to zero
  localStorage.setItem('carttotalprice' , JSON.stringify(20)); // it will setting the cart total price to 20 that it mean only shipping cost
  return { setCart: [] } // and setting the cart to nothing
}

const noQtyChoosed = () => { // if the user want to order only one of the product and the user didn't choosed the quantity
  setArletLabel("Please Choose Your Quantity"); // it wil set the arlet label to choose quantity
  setalret("error"); // and will set the type to error and change the color
  LabelEffectsetIsVisible(true); // and showing the alret label
  setTimeout(function(){ // and activing the timer
  LabelEffectsetIsVisible(false); // and hiding the alret label
  }, 1000);
}

const RemoveAllCartWithOutNotiy = () => { // here it will remove all the cart because the user is choosed to only buy one prodcut so it will active this function without notfication that the cart is deleted
  cart.length = ""; // will make the cart is zero
  setCartPage(false); // will hide the cart page
  localStorage.setItem('cartdata' , JSON.stringify(cart)); // will delete the cart data in local storage
  localStorage.setItem('cartstorage' , JSON.stringify(cart.length)); // will delete the cart count bagdet in local storage
  localStorage.setItem('carttotalprice' , JSON.stringify(20)); // will set the cart total price is 20 , it mean the regular shipping price
  return { setCart: [] } // will making the cart is nothing
}

  return (
    <Container  maxWidth="lg" className="allform">
      <Card className={classes.textcenter}  >
      <Card.Header >Shop</Card.Header>
      <HomeIcon onClick={homebutton} className="homebuttonall" />
      <Card.Body>
      <Card.Title>Sweet Vibes Bites</Card.Title>
      <Card.Text>
        𝗜 𝗵𝗼𝗽𝗲 𝘆𝗼𝘂 𝗲𝗻𝗷𝗼𝘆 𝘆𝗼𝘂𝗿 𝘀𝘄𝗲𝗲𝘁 𝘃𝗶𝗯𝗲𝘀 𝗮𝘀 𝗺𝘂𝗰𝗵 𝗮𝘀 𝗜 𝗱𝗶𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝘁𝗵𝗲𝗺!
        𝗛𝗼𝗺𝗲𝗺𝗮𝗱𝗲 𝗯𝗶𝘁𝗲𝘀 ❥
        </Card.Text>
        <br/><br/><br/>
        <div style={{ display: WholeProductsIsVisibile ? "block" : "none" }}>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={4} md={4}>
        <div style={{ display: ProductsIsVisibile ? "block" : "none" }}>
        <Post post={post} setCurrentId={setCurrentId}   addToCart={addToCart} showProductFullID={showProductFullID}/>
        </div>
        {/***************************************************This for products page******************************************/}
        </Grid>
        ))}
        </Grid>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <Grid item xs={12} sm={4}>
        <div className="FormClass">
        <div style={{ display: FullProductViewPage ? "block" : "none" }}>
        <Form currentId={currentId} setCurrentId={setCurrentId} noQtyChoosed={noQtyChoosed} orderNowButton={orderNowButton} addToCart={addToCart} RemoveAllCartWithOutNotiy={RemoveAllCartWithOutNotiy}/>
        </div>
        </div>
        {/***************************************************This for the full product page******************************************/}
        <div className="cartForm">
        <div style={{ display: CartLabelisVisible ? "block" : "none" }}>
        <div style={{ display: LabelEffectisVisible ? "block" : "none" }}>
        <Alert severity={alret} className="Notiy">{ArletLabel}</Alert>
        </div>
        {/***************************************************This for alret******************************************/}
        <IconButton  onClick = {CartForm} className="ShopCartIcon"  aria-label="cart" style={{color: CartColor}} >
        <StyledBadge badgeContent={cart.length} >
        <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
        </div>
        </div>
        {/***************************************************This for the cart image and logo******************************************/}
        <div style={{ display: OrderisVisible ? "block" : "none" }} >
        <OrderForm cart={cart}   RemoveAllCart={RemoveAllCart}  addToCart={addToCart} setCart={setCart} />
        </div>
        {/***************************************************This for the complete order page******************************************/}
      </Grid>
        <div style={{ display: CartPage ? "block" : "none" }}>
        <Customer cart={cart}  RemoveAllCart={RemoveAllCart} addToCart={addToCart}  HideCartIcon={HideCartIcon}   RemoveFromToCart={RemoveFromToCart} OrderNow={OrderNow} />
        </div>
        {/***************************************************This for the cart page******************************************/}
    </Container>
  );
};

export default Posts;

//************************************************************************************************************//
//                                        Product Page                                                        //
//                                                                                                            //
// This page for the products page                                                                            //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//