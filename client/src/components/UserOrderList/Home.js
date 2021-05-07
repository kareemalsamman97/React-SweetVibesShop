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
const HomeCustomerOrder = () => {
    const orders = useSelector((state) => state.orders);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    var userName = user?.result.name;
    const userorder = useSelector((state) => ( state.orders.filter((CustomerName) => CustomerName.CustomerName === userName)));
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        if(userName ===  undefined){
            history.push("/home");
          }
            dispatch(getOrder());
          }, [ dispatch]);
         
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