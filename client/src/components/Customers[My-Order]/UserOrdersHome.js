import React, { useState, useEffect } from 'react';
import {Container,  Grow, Grid , Typography} from '@material-ui/core';
import {Card }from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getOrder } from '../../actions/orders';
import UserOrder from './UserOrder';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//**********************************All*Importing*Imports*******************************************************//
const HomeCustomerOrder = () => {
    const orders = useSelector((state) => state.orders); // getting from the state database the orders
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user setting information
    var userName = user?.result.name; // geting the username 
    const userorder = useSelector((state) => ( state.orders.filter((CustomerName) => CustomerName.CustomerName === userName))); // getting from the orders database only the orders that with the name of the account
    const history = useHistory(); // using historyy to push if the user if entered with the path
    const classes = useStyles(); // using the material style
    const dispatch = useDispatch(); // using actions
    useEffect(() => { // running the code one timer
    if(userName ===  undefined){ // cheking if there is no user and entered with the path url
    history.push("/home"); // so it will kick hime out
    }
    dispatch(getOrder()); // and getting the orders
    }, [ dispatch]); // and action it
         
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
      <Container>
      <Card className={classes.HomeCard} >
      <Card.Header style={{paddingLeft  : '45%'}}>
      <Card.Text>My Orders</Card.Text>
      </Card.Header>
      <label className={classes.orderlabel}>You have [{ userorder.length }] orders </label>
      <div>
      <Grid container  className={classes.ColorsInfo}>
      <Grid container item xs >
      <div className={classes.Whitebox}></div>
      <Typography className={classes.whitelabel} >Order is not ready</Typography>
      </Grid>
      <Grid container xs >
      <div className={classes.Whitebox} style={{backgroundColor : '#50c878'}}></div>
      <Typography className={classes.whitelabel} >Ready to send</Typography>
      </Grid>
      <Grid container xs >
      <div className={classes.Whitebox} style={{backgroundColor : '#882d17'}}></div>
      <Typography className={classes.whitelabel} >Order is closed</Typography>
      </Grid>
      </Grid>
      </div>
      <Card.Body className={classes.mobile}>
      {userorder.map((order) => (
      <div>
      <UserOrder order={order} userorder={userorder} />
       {/* ---------here will send only the account orders to another page that show the all orders --------------------------------------------------- */}
      </div>
      ))}
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </Container>
      </Grow>
       )
    )}
export default HomeCustomerOrder;

//************************************************************************************************************//
//                                        Home Customer Page                                                  //
//                                                                                                            //
// Here the main page for the orders for the user                                                             //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//