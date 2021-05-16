import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
import {  Paper , TextField , Typography , GridList , Avatar, Button } from '@material-ui/core';
import {Alert , AlertTitle} from '@material-ui/lab';
import useStyles from './styles';
import  './CustomerOrderCss.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createOrderss } from '../../actions/orders';
import { createNotifications } from '../../actions/notification';
import * as emailjs from "emailjs-com";
import cartimage from '../../images/order.png';

const CustomerOrder = ({cart  }) => {
  const totalpricefromcart = JSON.parse(localStorage.getItem('carttotalprice')); // getting the total price
  const [user] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user account data
  const [Orders , setOrdersData] = useState ({ StatusOrder: 'Order In Progress', CustomerName: user?.result.name, CustomerOrders: [...cart.map(item =>({_id: item.title }))], CustomerPhone: '', CustomerEmail: user?.result.email, CustomerAddress: '', TotalPrice : totalpricefromcart , OrderImages: [...cart.map(item =>({_id: item.selectedFile }))],Quntity: [...cart.map(item =>({_id: item.qty }))],createdAt: moment().format('L')}); // when adding  a new order it will send all the data to inbox for the admin 
  const [Noity ] = useState ({ NotificationTitle : 'New Order has been added', NotificationImages: "https://bl3302files.storage.live.com/y4mAMA8Y6vFnXX-fk97Sw2JJ2hR6Pb8Bvvl0idKmaIodo-h2T5Z4FKjyid7_G4Ear_Wy35KBMxgSKOdhNjdPZepdmi927ckS9h-pBlLfQD727T2tbSSF8DdYTBjActjA84ejkylLE0_L_InJUOr6PsUGplXxIct4piT1y_D2C8R5w1mmmZwCxafRNtLnwYG3KUw?width=128&height=128&cropmode=none" , NotificationType: 'NewOrder' , NotificationMessage: 'There a new order by the userName : [' + user?.result.name + '] has been created ' , NotificationSeenOrNot: 'No' , NotificationDate: moment().subtract(10, 'days').calendar() }); // will make these data into the order database
  const classes = useStyles(); // using material style
  var userName = user?.result.name; // getting the user name to put it into the order page
  var userEmail = user?.result.email; // getting the email user to put into the order page
  const dispatch = useDispatch(); // using the actions
  const [ConfirmedisVisible, ConfirmedsetIsVisible ] = useState(false); // this for the order is confirmed and accepted
  const [NoUserAvalible, setNoUserAvalible ] = useState(false); // it will show the no user is logged in form
  const [ThereaUserAvalibe, setThereaUserAvalibe ] = useState(true); // it will show if there a user logged in with the user data
  const [AllFormisVisible, AllFormsetisVisible ] = useState(true); // this for the whole page to hide or show it
  const [CriculisVisible, CriculsetisVisible ] = useState(false); // this for the crirule in the end ' when the user is confirming his order '

  var data = {
    to_email:'morhed500@gmail.com',
    to_email: 'mai.mw.1990@gmail.com',
    to_email: userEmail,
    to_name: userName,
    from_name: "Sweet Vibes",
    message: [
      "Name of the customer : " + userName ,
      " Email of the customer : " +  userEmail,
      " Phone of the customer : " +  Orders.CustomerPhone,
      " Address of the customer : " +  Orders.CustomerAddress,
      " Created At : " + Orders.createdAt,
      " Total Price : " + totalpricefromcart + "₪",
      " THANK YOU , We will Contact you as soon as we can :)"
    ]
  };
//**********************************this for sending message to the user*******************************************************//
  useEffect(() => { // this to run the code one time if there an user is logged in or no , so it will show choose which form to use
    if( typeof user?.result.name == 'undefined'){ // if there is no user logged in it will 
    setNoUserAvalible(true); // show the no user form
    setThereaUserAvalibe(false); // will hide the user form
    }else { // if there is a user
    setNoUserAvalible(false); // will hide no user form
    setThereaUserAvalibe(true); // will show the user form
    }
  });

  const LoginFromOrder =() =>{ // if the user clicked on logging from the no user form
    localStorage.setItem('isSigninClicked' , JSON.stringify(true)); // it will give true in local storage that if the user get out from this page and backed it will backed him to this page
  }

  const RemoveAllCart = () => { // after the user is completing his order so it will active to delete the cart
      localStorage.removeItem("cartdata"); // deleting the cart
  }

  const SendOrder = () => { // if the user is choosing to complete his order and activing the timer so 
    dispatch(createNotifications(Noity)); // it will send the notfication messages to the admin
    dispatch(createOrderss(Orders)); // it will send all data of the order to the database
  } 

  const handleSubmit = (e) => { // on submit button in this page
    CriculsetisVisible(true); // it will show the cricle progress
    AllFormsetisVisible(false); // and will hide the whole page
    ConfirmedsetIsVisible(false); // and will hide the confirmed message page
    setTimeout(function(){ // will activing timer
    AllFormsetisVisible(false); // will hide the whole form
    ConfirmedsetIsVisible(true); // and showing the confirmation page
    CriculsetisVisible(false); // and will hide the cricle procress
    localStorage.setItem('cart' , "0"); // and then it will make the cart data is nothing
    localStorage.setItem('cartlength' , "0"); // and the cart length is nothing
    emailjs.send('service_batyss7', 'template_7g4j58p', data, 'user_j09Q47mxMy4zHue2mw5lK') // and sending the email to the user with email js
    .then((result) => { // after is all thing is okay with the email and the email is sent so it will reset all the settings
    localStorage.setItem('isLoggedIn' , JSON.stringify(false)); // it will make that there is no user logged in
    localStorage.setItem('isSigninClicked' , JSON.stringify(false)); // and will make the signin clicked button is not enabled that it will not take the user again to this page
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false)); // and will make the order now button clicked is false because it was true before
    window.location.reload(true); // will refreshing the page to take all the effects
    RemoveAllCart(); // and it will empty the cart
    }, (error) => {
    // do  nothing
    });
    }, 10000);
    e.preventDefault();
  }


  return (
  <div>
  <div style={{ display: AllFormisVisible ? "block" : "none" }}>
  <Paper className={classes.OrderPaper}> 
      <div style={{ display: NoUserAvalible ? "block" : "none" }}>
      <Alert severity="warning" >
      <AlertTitle>Warning</AlertTitle> 
       You need to <strong><Link to="/auth" ><a onClick={LoginFromOrder}>Login To An Your User</a></Link></strong> — To make the order
      </Alert>
      <Paper variant="outlined" square className={classes.paperorders}> 
      <Typography className="orderlabel" component="h1" variant="h5">Your Orders</Typography>
      <TextField disabled label="Name Customer" defaultValue={userName} variant="outlined" className={classes.textfield}/>
      <TextField disabled label="Email Customer" defaultValue='' variant="outlined" className={classes.textfield}/>
      <TextField disabled label="Phone Customer" defaultValue="" variant="outlined" className={classes.textfield}/>   
      <TextField disabled label="Address Customer" defaultValue="" variant="outlined" className={classes.textfield}/>
      <TextField disabled label="Order Date" defaultValue= {moment().format('L')} variant="outlined" className={classes.textfield}/>
      <TextField disabled label="Total" value={totalpricefromcart + "₪"} variant="outlined" className={classes.textfield}/>
      <Paper className={classes.imagepaperform} variant="outlined">
      <Typography className="orderlabel" className={classes.cartlabel} component="h2"  variant="h5">Cart</Typography>
      <GridList cellHeight={400} className={classes.gridList}>
      <div class="row">
      <div>
      {cart.map((item) =>
      <div>
      <div class="col">
      <Paper variant="outlined"  className={classes.paperimage}>
      <Avatar alt="Remy Sharp" src={item.selectedFile} className={classes.large} />
      <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {item.qty}</Typography>
      </Paper>
      </div>
      </div>)}
      </div>
      </div>
      </GridList>
      </Paper>
      <Paper variant="outlined"  className={classes.paymenntpaper}>
      <Typography className="orderlabel"  component="h3"  variant="h5">Payment Method : Cash</Typography>
      <Button variant="contained" className={classes.paymentbutton} disabled>Submit Order</Button>
      </Paper>
  </Paper>
  </div>
       {/* ------------------------------------ The no user form --------------------------------------------------- */}
  <div style={{ display: ThereaUserAvalibe ? "block" : "none" }}>
  <form autoComplete="off" onSubmit={handleSubmit} noValidate  >
      <Alert severity="success" >
      <AlertTitle>Success</AlertTitle>
      You Have Been Logged In — <strong>Welcome [{userName}]</strong>
      </Alert>
      <Paper variant="outlined" square className={classes.paperorders}> 
      <Typography className="orderlabel" component="h1" variant="h5">Your Orders</Typography>
      <TextField InputProps={{ readOnly: true,}} disable label="Name Customer" defaultValue={userName} variant="outlined" className={classes.textfield}/>
      <TextField InputProps={{ readOnly: true,}} disabled label="Email Customer" defaultValue={userEmail} variant="outlined" className={classes.textfield}/>
      <TextField required label="Phone Customer" type="number" variant="outlined" id="phonenumber" onChange={(e) => setOrdersData({ ...Orders, CustomerPhone: e.target.value })} className={classes.textfield} />
      <TextField required label="Address Customer" variant="outlined" onChange={(e) => setOrdersData({ ...Orders, CustomerAddress: e.target.value })} className={classes.textfield}/>
      <Paper className={classes.imagepaperform} variant="outlined">
      <Typography className="orderlabel" className={classes.cartlabel} component="h2"  variant="h5">Cart</Typography>
      <GridList cellHeight={400} className={classes.gridList}>
      <div class="row">
      <div>
      {cart.map((item) =>
      <div>
      <div class="col">
      <Paper variant="outlined"  className={classes.paperimage}>
      <Avatar alt="Remy Sharp" src={item.selectedFile} className={classes.large} value={item.selectedFile} />
      <Typography className="orderlabel" component="h1"  className={classes.qty} variant="h5">X {item.qty}</Typography>
      </Paper>
      </div>
      </div>)}
      </div>
      </div>
      </GridList>
      </Paper>
      <TextField InputProps={{readOnly: true,}} disabled label="Order Date" defaultValue=  {moment().format('L')} variant="outlined" className={classes.textfield}/>
      <TextField InputProps={{ readOnly: true, }} disabled label="Total" value={totalpricefromcart + "₪"} variant="outlined" className={classes.textfield}/> 
      <Paper variant="outlined"  className={classes.paymenntpaper}>
      <Typography className="orderlabel"  component="h3"  variant="h5">Payment Method : Cash</Typography>
      <Button variant="contained"  className={classes.buttonpayment} onClick={SendOrder} type="submit" >Submit Order</Button>
      </Paper>
      </Paper>
      </form>
      </div>
  </Paper>
  </div>
{/* ------------------------------------ The  user form --------------------------------------------------- */}
  <div>
  <div style={{ display: CriculisVisible ? "block" : "none" }}>
      <Paper variant="outlined"  className={classes.cricularform}>
      <CircularProgress className={classes.Cricle} />
      <label  className="CricleLabel">Please Wait To Procress Your Orders</label>
  </Paper>
  </div>
  </div>
{/* ------------------------------------ cricle proess --------------------------------------------------- */}
  <div  style={{ display: ConfirmedisVisible ? "block" : "none" }}>
  <Paper variant="outlined"  className={classes.confirmedorderform}>
        <img className="cartimage" src={cartimage} />
        <label component="h1" className ="thankyoumessage" variant="h5">THANK YOU !</label>
        <label className="messagelabels">Your order has been Succesfully saved in our Database !,</label>
        <label className="messagelabels">and we have been sent to your email , order confimed message </label>
        <label className="messagelabels">Thank you for your kind :) </label>
  </Paper>
  </div>
  </div>
  )}
{/* ------------------------------------ confirmation page --------------------------------------------------- */}
export default CustomerOrder;

//************************************************************************************************************//
//                                        Customer Order Page                                                 //
//                                                                                                            //
// this will show for the user his order that made from the shop and want to buy them                         //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//