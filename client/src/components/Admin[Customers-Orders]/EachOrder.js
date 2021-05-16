import React, { useState, useEffect } from 'react';
import { Grid, CardContent , Card , Typography  , DialogActions , DialogTitle , Dialog, Paper, DialogContentText , GridList, DialogContent , Avatar , Button  } from '@material-ui/core';
import useStyles from './styles';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { deleteOrder } from '../../actions/orders.js';
import { useDispatch , useSelector} from 'react-redux';
import { updateOrder } from '../../actions/orders';
import FiberNewIcon from '@material-ui/icons/FiberNew';
//**********************************All*Importing*Imports*******************************************************//
const EachOrder = ({ order , AlretDelete , EditOrder ,setCurrentId  , currentId, AlretReady , AlretClosed }) => { // getting all varible from order home
  const dispatch = useDispatch(); // using actions
  const [Backgroundcolor , setBackgroundcolor] = useState('white'); // this for the status order i will explain here ..
  // for order there is '3' type , the first time that the order is in progress so it will give the hackground color 
  // of the order paper with the white color , and the second type that the order ready to be delivered so this
  // will give the background color of the order paper the light gray color , and the third type is the order
  // has been finished and delivered to the customer so it will give it the purple color
  const [ReadyButtonisVisible , ReadyButtonSetIsVisible] = useState(true); // ready button if the order status is order in progress so it will be showed
  const [NewOrder , SetNewOrder] = useState(false); // if the order is new order , it will be knowen from the status
  const [OrderReadyToGo, setOrderReadyToGo] = useState(0); // if the order status is ready to be delivered to the customer
  const [Orders , setOrdersData] = useState ({  CustomerName: '', StatusOrder: 'Ready to be delivered to the customer', CustomerOrders: '', CustomerPhone: '', CustomerEmail: '', CustomerAddress: '', TotalPrice : '' , OrderImages: '',Quntity: '' ,createdAt: '' }); // changing the data orders
  const orderone = useSelector((state) => (currentId ? state.orders.find((_id) => _id._id === currentId) : null)); //getting all the orders with the id
  const classes = useStyles(); // using material style
  const [open, setOpen] = React.useState(false); // for deleting order dialog
  const [OrdersisVisible, OrderssetIsVisible ] = useState(false); // there is a list in each order that show what the customer buyed so it has ablity to hide the list or to show it
  useEffect(() => { // status settings
    if(order.StatusOrder === "Ready to be delivered to the customer"){ // if the order status is ...
      setBackgroundcolor('#BBBBBB'); // it will change the background color of the order page to the light gray color
      setOrderReadyToGo('1'); // and enable the order ready to go to the user
      SetNewOrder(false); // and tell the order varible that it is not a new order
    }
    if(order.StatusOrder === "Order has been submitted and closed"){  // if the order status is ...
      setBackgroundcolor('#A87DAB'); // it will change the background color of the order page to the purple color
      ReadyButtonSetIsVisible(false); // will hide the ready button and done button
      SetNewOrder(false); // and tell the order varible that it is not a new order
    }
    if(order.StatusOrder === "Order In Progress"){ // if the order is new
      SetNewOrder(true); // that a new order
    }
    if (orderone) setOrdersData(orderone); // getting all the orders in the action
    }, [orderone]);

  const ShowOrderTabel = () => { // to show the customer order list menu
    OrderssetIsVisible(true); // showing
  }

  const HideOrderTabel = () => { // to hide the customer order list menu
    OrderssetIsVisible(false); // hiding
  }

  const ReadyToGo = () => { // on ready button clicked
    if(OrderReadyToGo === '1') { // checking the button label is Done 'mean the order in the second type'so
      AlretClosed(); // it will tell the alret in the orders home page that to give that the order is submited
      dispatch(updateOrder(currentId, { ...Orders ,StatusOrder : 'Order has been submitted and closed' })); // and updating in the database that the order is been submitted
    }
    else {
      AlretReady(); // it will tell the alret in the orders home page that to give that the order is ready to go
      dispatch(updateOrder(currentId, { ...Orders ,StatusOrder : 'Ready to be delivered to the customer' })); // and updating in the database that the order is ready
    }
  }

  const handleClickOpen = () => {// to show the delete confirmation dialog
    setOpen(true); // it will open the dialog
  };

  const CloseDialog = () => { // to hide the delete confirmation dialog
    setOpen(false); // will hide
  };
 
  return (

    
    <div>
      <Card  square  elevation={3} className={classes.card}   style={{ backgroundColor: Backgroundcolor }}>
        <div  style={{ display: NewOrder ? "block" : "none" }}>
        <FiberNewIcon className={classes.NewOrder} />
        </div>
        <Paper variant="outlined" square className={classes.box} >
        <Typography className={classes.mainlabel}>#  {order.CustomerName}</Typography>
        </Paper>
        <CardContent className={classes.cardcontent}>
        <Grid container spacing={2}>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Customer Name : {order.CustomerName}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Customer Email : {order.CustomerEmail}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Customer Address : {order.CustomerAddress}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Customer Phone : {order.CustomerPhone}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Total Price : {order.TotalPrice}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Created At : {moment(order.createdAt).format("MMM Do YY")}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} style={{textDecoration: 'underline'}} >Status : {order.StatusOrder}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} style={{textDecoration: 'underline'}} >Order ID : {order._id}</Typography>
        </Grid>
        <Grid item xs={5} >
        <Typography className={classes.Labels} >Customer Order :</Typography>
        </Grid>
        <Grid item xs={5} >
        <Button variant="outlined" size="meduim" onClick={ShowOrderTabel}className={classes.margin}>Show</Button>
        <Button variant="outlined" size="meduim" onClick={HideOrderTabel}className={classes.margin}>Hide</Button>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.OrdersList} style={{ display: OrdersisVisible ? "block" : "none" }}>
        <Paper className={classes.imagepaperform} variant="outlined" style={{ transition: '1s;' , backgroundColor: Backgroundcolor}}>
        <GridList cellHeight={57} >
                    <div class="row">
                      <div class="col">
                      <Avatar alt="Remy Sharp" src={order.OrderImages[0]} className={classes.large} />
                      <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X{order.Quntity[0]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[1]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[1]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[2]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[2]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[3]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[3]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[4]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[4]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[5]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[5]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[6]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[6]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[7]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[7]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[8]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[8]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[9]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[9]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[10]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[10]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages[11]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[11]}</Typography>
                      </div>
                      </div>
                      {/* ------------------------------------for the customer order menu--------------------------------------------------- */}
                </GridList>
                </Paper>
                </div>
                </Grid>
            </Grid>
            </CardContent>
            <div>
              <Button variant="contained" color="secondary" onMouseEnter={ () =>{{setCurrentId(order._id)}}} onClick={EditOrder} className={classes.EditButton} startIcon={<EditIcon />}>Edit</Button>
              <Button variant="contained" style={{backgroundColor: '#c2a4c4'}} onClick={handleClickOpen} className={classes.Button} startIcon={<DeleteSweepIcon />}>Delete</Button>
              <div>
              <Dialog open={open} onClose={CloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Deleting customer order?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         You are trying to delete this order from your database and you cann't undo with this action , so are you sure you want to do that ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseDialog} color="primary">
         No
          </Button>
          <Button  onClick={() => {dispatch(deleteOrder(order._id)); AlretDelete(); CloseDialog();}} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        <Button variant="contained"   onMouseEnter={ () =>{{setCurrentId(order._id)}}}  onClick={ReadyToGo}  className={classes.ReadyButton} style={{display : ReadyButtonisVisible ? "block" : "none"}} >{OrderReadyToGo ? `Done` : 'Ready'}</Button>
            </div>
        </Card>
    </div>  
  );
};

export default EachOrder;

//************************************************************************************************************//
//                                        Each Order for admin orders                                         //
//                                                                                                            //
// This page for admin orders page                                                                            //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//
