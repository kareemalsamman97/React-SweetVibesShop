import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid  } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import EditOrders from './EditOrder';
import { useSelector } from 'react-redux';
import { getOrder } from '../../actions/orders';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';
import {Card} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import EachOrder from './EachOrder';
import CircularProgress from '@material-ui/core/CircularProgress';
//**********************************All*Importing*Imports*******************************************************//
const OrdersHome = () => {
  const orders = useSelector((state) => state.orders); //getting from the orders data base all the data
  const [AlretisVisible , AlretSetIsVisible] = useState(false); // alret 
  const [ListordersisVisible , ListordersSetIsVisible] = useState(true); // the list orders 
  const [EditOrderisVisible , EditOrderSetIsVisible] = useState(false); // the edit form orders
  const [itemName, setItemName] = useState(""); // the alret label
  const [alret, setalret] = useState(""); // alret type
  const dispatch = useDispatch();  // actions
  const [currentId, setCurrentId] = useState(0); // the id for each order
  const classes = useStyles(); // material style
  const history = useHistory(); // history to push the user 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // user information data
  var userName = user?.result.name; // the user name from the account data
  useEffect(() => {
    if(userName !==  "SweetVibes Admin"){ // if the user is not admin
      history.push("/home"); // it will kick him
      }
      dispatch(getOrder()); // getting all the orders data
    }, [ dispatch]); // and using the actions

    const AlretDelete = () => { // alret delete
      setItemName("Order Deleted Successfully"); // will change the alret
      setalret("success"); // will change the alret type
      window.scrollTo(0, 0); // and getting the user to the up page
      AlretSetIsVisible(true); // and will show the alret
      setTimeout(function(){ // activing timer
      AlretSetIsVisible(false); // will hide the timer
      }, 1500);
    }
    const AlretReady = () => { // alret ready
      setItemName("Ready to go");// will change the alret
      setalret("info"); // will change the alret type
      AlretSetIsVisible(true);// and will show the alret
      setTimeout(function(){// activing timer
      AlretSetIsVisible(false); // will hide the timer
      }, 1500);
    }

  const AlretEdit = () => { // alret edit
      setItemName("Order has been successfully saved"); // will change the alret
      ListordersSetIsVisible(true); // will show the orders form
      EditOrderSetIsVisible(false); // will hide the edit order form
      setalret("success"); // will change the alret
      window.scrollTo(0, 0); // and getting the user to the up page
      AlretSetIsVisible(true); // and will show the alret
      setTimeout(function(){ // activing timer
      AlretSetIsVisible(false);// will hide the timer
    }, 1500);
  }

  const AlretClosed = () => { // alret closed
      setItemName("Order has been successfully closed"); // will change the alret
      ListordersSetIsVisible(true);  // will show the orders form
      EditOrderSetIsVisible(false); // will hide the edit order form
      setalret("info"); // will change the alret
      AlretSetIsVisible(true); // and will show the alret
      setTimeout(function(){ // activing timer
      AlretSetIsVisible(false); // will hide the timer
    }, 1500);
  }
  const EditOrder = () => { // edit order button
    ListordersSetIsVisible(false); // will hide the orders list
    EditOrderSetIsVisible(true); // will show the edit order form
  }
  
  const BackButton = () => { // back home button
      ListordersSetIsVisible(true); // will show the orders list
      EditOrderSetIsVisible(false); // will hide the edit form
  }

  return (
  !orders.length ? 
  <div>
      <Container >
      <Card className={classes.fetchingdata} >
      <Card.Body className="text-center" >
      <Card.Title>Fetcing your data ..</Card.Title>
      <CircularProgress disableShrink className={classes.CircularProgress}/>
      </Card.Body>
      </Card>
      </Container>
        {/* ------------------------------------ if the orders did not fetched --------------------------------------------------- */}
      </div> 
      : (
      <Grow in>
      <Container >
      <Card className={classes.mobileone}>
      <Card.Header className={classes.mobile}>
      Customers Order List
      <Grid container  className={classes.ColorsInfo} >
      <Grid container item xs >
      <div className={classes.Whitebox}></div>
      <Typography className={classes.whitelabel} >Order is not ready</Typography>
      </Grid>
      <Grid container xs >
      <div className={classes.Whitebox} style={{backgroundColor : '#BBBBBB'}}></div>
      <Typography className={classes.whitelabel} >Ready to send</Typography>
      </Grid>
      <Grid container xs >
      <div className={classes.Whitebox} style={{backgroundColor : '#A87DAB'}}></div>
      <Typography className={classes.whitelabel} >Order is closed</Typography>
      </Grid>
      </Grid>
      </Card.Header>
      <Card.Body  >
      <div style={{ display: ListordersisVisible ? "block" : "none" }}>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      {orders.map((order) => (
      <Grid item xs={12} sm={7} >
      <EachOrder orders={orders}  order={order} AlretClosed={AlretClosed} AlretDelete={AlretDelete} AlretReady={AlretReady} EditOrder={EditOrder} currentId={currentId} setCurrentId={setCurrentId}/>
 {/* ------------------------------------ to send the orders to each order to be shown--------------------------------------------------- */}
      </Grid>
      ))}
      </Grid>
      </div>
      <div style={{ display: AlretisVisible ? "block" : "none" }}>
      <Alert className={classes.alret} severity={alret} >{itemName}</Alert>
        {/* ------------------------------------ alret settings --------------------------------------------------- */}
      </div>
      <div style={{ display: EditOrderisVisible ? "block" : "none" }}>
      <EditOrders BackButton={BackButton}AlretEdit={AlretEdit} currentId={currentId}/>
        {/* ------------------------------------ to edit the order form--------------------------------------------------- */}
      </div>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </Container>
      </Grow>
     )
  );
};

export default OrdersHome;


//************************************************************************************************************//
//                                        Home Page for admin orders                                          //
//                                                                                                            //
// This page for admin orders page                                                                            //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//
