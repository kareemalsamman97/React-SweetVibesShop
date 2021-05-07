import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid  } from '@material-ui/core';
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
const OrdersHome = () => {
  const orders = useSelector((state) => state.orders);
  const [AlretisVisible , AlretSetIsVisible] = useState(false);
  const [ListordersisVisible , ListordersSetIsVisible] = useState(true);
  const [EditOrderisVisible , EditOrderSetIsVisible] = useState(false);
  const [itemName, setItemName] = useState("");
  const [alret, setalret] = useState("");
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  var userName = user?.result.name;
  useEffect(() => {
    if(userName !==  "SweetVibes Admin"){
      history.push("/home");
    }
    dispatch(getOrder());
  }, [ dispatch]);
  const AlretDelete = () => {
    setItemName("Order Deleted Successfully");
    setalret("success")
    window.scrollTo(0, 0)
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const AlretReady = () => {
    setItemName("Ready to go");
    setalret("info")
   
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const AlretEdit = () => {
    setItemName("Order has been successfully saved");
    ListordersSetIsVisible(true);
    EditOrderSetIsVisible(false);
    setalret("success")
    window.scrollTo(0, 0)
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const AlretClosed = () => {
    setItemName("Order has been successfully closed");
    ListordersSetIsVisible(true);
    EditOrderSetIsVisible(false);
    setalret("info")
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const EditOrder = () => {
    ListordersSetIsVisible(false);
    EditOrderSetIsVisible(true);
    
  }
  
  const BackButton = () => {
    ListordersSetIsVisible(true);
    EditOrderSetIsVisible(false);
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
            <Grid   item xs={12} sm={7} >
              <EachOrder orders={orders}  order={order} AlretClosed={AlretClosed} AlretDelete={AlretDelete} AlretReady={AlretReady} EditOrder={EditOrder} currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
             ))}
          </Grid>
      </div>
      <div style={{ display: AlretisVisible ? "block" : "none" }}>
      <Alert className={classes.alret} severity={alret} >{itemName}</Alert>
      </div>
      
      <div style={{ display: EditOrderisVisible ? "block" : "none" }}>
            <EditOrders BackButton={BackButton}AlretEdit={AlretEdit} currentId={currentId}/>
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
