import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'
import Auth from '../Auth/Auth';
import {  Paper , TextField , Typography , GridList , Avatar, Button } from '@material-ui/core';
import {Alert , AlertTitle} from '@material-ui/lab';
import useStyles from './styles';
import  './CustomerOrderCss.css';
import moment from 'moment';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createOrderss } from '../../actions/orders';
import { createNotifications } from '../../actions/notification';
import { useSelector } from 'react-redux';
import * as emailjs from "emailjs-com";
import cartimage from '../../images/order.png';
import { useHistory } from "react-router-dom";
import bagicon from './../../images/shopping-bag.png'
const CustomerOrder = ({cart , CartisVisible }) => {
  const totalpricefromcart = JSON.parse(localStorage.getItem('carttotalprice'))

  const OrderNowStatus = JSON.parse(localStorage.getItem('IsOrderNowButtonClciked'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [Orders , setOrdersData] = useState ({ StatusOrder: 'Order In Progress', CustomerName: user?.result.name, CustomerOrders: [...cart.map(item =>({_id: item.title }))], CustomerPhone: '', CustomerEmail: user?.result.email, CustomerAddress: '', TotalPrice : totalpricefromcart , OrderImages: [...cart.map(item =>({_id: item.selectedFile }))],Quntity: [...cart.map(item =>({_id: item.qty }))],createdAt: moment().subtract(10, 'days').calendar() });
  const [Noity , setNoityData] = useState ({ NotificationTitle : 'New Order has been added', NotificationImages: "https://bl3302files.storage.live.com/y4mAMA8Y6vFnXX-fk97Sw2JJ2hR6Pb8Bvvl0idKmaIodo-h2T5Z4FKjyid7_G4Ear_Wy35KBMxgSKOdhNjdPZepdmi927ckS9h-pBlLfQD727T2tbSSF8DdYTBjActjA84ejkylLE0_L_InJUOr6PsUGplXxIct4piT1y_D2C8R5w1mmmZwCxafRNtLnwYG3KUw?width=128&height=128&cropmode=none" , NotificationType: 'NewOrder' , NotificationMessage: 'There a new order by the userName : [' + user?.result.name + '] has been created ' , NotificationSeenOrNot: 'No' , NotificationDate: moment().subtract(10, 'days').calendar() });
  const classes = useStyles();
  const [CreateTheOrder] = useState([]);
  const history = useHistory();
  const [ConfirmedisVisible, ConfirmedsetIsVisible ] = useState(false);  
  const [isVisible, setIsVisible ] = useState(false);
  const [NoUserisVisible, NoUsersetIsVisible ] = useState(true);
  const [AllFormisVisible, AllFormsetisVisible ] = useState(true);
  const [CriculisVisible, CriculsetisVisible ] = useState(false);
  var userName = user?.result.name;

  const date = new Date();
  const dispatch = useDispatch();
  var userEmail = user?.result.email;
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
  const cartmount = JSON.parse(localStorage.getItem('cartlength'))

  
   
  
  var data = {
    
    to_email:userEmail,
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
  useEffect(() => {

    console.log(Noity)
    console.log(cart)
  
    if( typeof user?.result.name == 'undefined'){

      setIsVisible(true);
      NoUsersetIsVisible(false);
    }else {
      setIsVisible(false);
      NoUsersetIsVisible(true);
     
    }
    
  });


  const LoginFromOrder =() =>{
    localStorage.setItem('isSigninClicked' , JSON.stringify(true))
  }
  const RemoveAllCart = () => {
      localStorage.removeItem("cartdata")
  }
  const SendOrder = () => {
    dispatch(createNotifications(Noity));
    dispatch(createOrderss(Orders));

    
  }
  const handleSubmit = (e) => {
    CriculsetisVisible(true);
    AllFormsetisVisible(false);
    ConfirmedsetIsVisible(false);
  
    setTimeout(function(){

      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      AllFormsetisVisible(false);
      ConfirmedsetIsVisible(true);
      CriculsetisVisible(false);
      localStorage.setItem('cart' , "0")
      localStorage.setItem('cartlength' , "0")
   
      emailjs.send('service_batyss7', 'template_7g4j58p', data, 'user_j09Q47mxMy4zHue2mw5lK')
  
      .then((result) => {
        localStorage.setItem('isLoggedIn' , JSON.stringify(false))
        localStorage.setItem('isSigninClicked' , JSON.stringify(false))
     
      localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(false))
          window.location.reload(true);
          RemoveAllCart();
      }, (error) => {
          console.log(error.text);
      });
  
    }, 10000);
    e.preventDefault();
  
  }
  return (
   <div>
          <div style={{ display: AllFormisVisible ? "block" : "none" }}>
      <Paper className={classes.OrderPaper}> 
   


      <div style={{ display: isVisible ? "block" : "none" }}>
        <Alert severity="warning" >
      <AlertTitle>Warning</AlertTitle> 
       You need to <strong><Link to="/auth" ><a onClick={LoginFromOrder}>Login To An Your User</a></Link></strong> — To make the order
      </Alert>
      <Paper variant="outlined" square className={classes.paperorders}> 
      <Typography className="orderlabel" component="h1" variant="h5">Your Orders</Typography>
      <TextField
          disabled
          label="Name Customer"
          defaultValue={userName}
          variant="outlined"
          className={classes.textfield}
        />
         <TextField
          disabled
          
          label="Email Customer"
          defaultValue=''
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          disabled
          label="Phone Customer"
          defaultValue=""
          variant="outlined"
          className={classes.textfield}
        />

           
        <TextField
          disabled
          label="Address Customer"
          defaultValue=""
          variant="outlined"
          className={classes.textfield}

        />
              
           

            <TextField
            disabled
            label="Order Date"
            defaultValue= {moment().subtract(10, 'days').calendar()}
            variant="outlined"
            className={classes.textfield}
          />
           <TextField
            disabled
            label="Total"
            value={totalpricefromcart + "₪"}
            variant="outlined"
            className={classes.textfield}
          />
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

        
       <div style={{ display: NoUserisVisible ? "block" : "none" }}>
      <form autoComplete="off" onSubmit={handleSubmit} noValidate  >
      <Alert severity="success" >
      <AlertTitle>Success</AlertTitle>
      You Have Been Logged In — <strong>Welcome [{userName}]</strong>
      </Alert>
      <Paper variant="outlined" square className={classes.paperorders}> 
      <Typography className="orderlabel" component="h1" variant="h5">Your Orders</Typography>
      <TextField
            InputProps={{
              readOnly: true,
            }}
            disabled
          label="Name Customer"
          defaultValue={userName}
          variant="outlined"
          className={classes.textfield}
       
        />
       
         <TextField
          InputProps={{
            readOnly: true,
          }}
          disabled
          label="Email Customer"
          defaultValue={userEmail}
          variant="outlined"
          className={classes.textfield}
         
        />
        <TextField
          required
          label="Phone Customer"
          type="number"
          variant="outlined"
          id="phonenumber"
          onChange={(e) => setOrdersData({ ...Orders, CustomerPhone: e.target.value })}
         
          className={classes.textfield}

  
        />
           
        <TextField
          required
          label="Address Customer"
          variant="outlined"
          onChange={(e) => setOrdersData({ ...Orders, CustomerAddress: e.target.value })}
          className={classes.textfield}

        />

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

            <TextField
            InputProps={{
              readOnly: true,
            }}
            disabled
            label="Order Date"
            defaultValue= {moment().subtract(10, 'days').calendar()}
            variant="outlined"
            className={classes.textfield}
            
           
          />
           <TextField
             InputProps={{
              readOnly: true,
            }}
            disabled
            label="Total"
            value={totalpricefromcart + "₪"}
            variant="outlined"
            className={classes.textfield}
          
          />
          
          <Paper variant="outlined"  className={classes.paymenntpaper}>
          <Typography className="orderlabel"  component="h3"  variant="h5">Payment Method : Cash</Typography>
          <Button variant="contained"  className={classes.buttonpayment} onClick={SendOrder} type="submit" >Submit Order</Button>
          </Paper>
          </Paper>
          </form>
      </div>

      
        </Paper>
      </div>

      <div>
      <div  style={{ display: CriculisVisible ? "block" : "none" }}>
      <Paper variant="outlined"  className={classes.cricularform}>
      <CircularProgress className={classes.Cricle} />
      <label  className="CricleLabel">Please Wait To Procress Your Orders</label>
        </Paper>
    
        </div>


      </div>
      <div  style={{ display: ConfirmedisVisible ? "block" : "none" }}>
          <Paper variant="outlined"  className={classes.confirmedorderform}>
          <img className="cartimage" src={cartimage} />
          <label component="h1" className ="thankyoumessage" variant="h5">THANK YOU !</label>
          <label  className="messagelabels">Your order has been Succesfully saved in our Database !,</label>
          <label  className="messagelabels">and we have been sent to your email , order confimed message </label>
          <label   className="messagelabels">Thank you for your kind :) </label>
        </Paper>
        </div>



        




      </div>
      
  )}

export default CustomerOrder;