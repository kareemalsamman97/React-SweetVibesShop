import React, { useState, useEffect } from 'react';
import { Grid, CardContent , Card , Typography  , DialogTitle, DialogActions , Dialog, Paper, DialogContentText , GridList, DialogContent , Avatar , Button , Tooltip , ListItem , ListItemText} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import clsx from 'clsx';
import moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import CheckIcon from '@material-ui/icons/Check';
import { deleteOrder } from '../../actions/orders.js';
import { useDispatch , useSelector} from 'react-redux';
import { updateOrder } from '../../actions/orders';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import FiberNewIcon from '@material-ui/icons/FiberNew';
const EachOrder = ({orders , order , AlretDelete , EditOrder ,setCurrentId  , currentId, AlretReady , AlretClosed }) => {
  const dispatch = useDispatch();
  const [Backgroundcolor , setBackgroundcolor] = useState('white');
  const [ReadyButtonisVisible , ReadyButtonSetIsVisible] = useState(true);
  const [NewOrder , SetNewOrder] = useState(false);
  const [OrderReadyToGo, setOrderReadyToGo] = useState(0);
  const [Orders , setOrdersData] = useState ({  CustomerName: '', StatusOrder: 'Ready to be delivered to the customer', CustomerOrders: '', CustomerPhone: '', CustomerEmail: '', CustomerAddress: '', TotalPrice : '' , OrderImages: '',Quntity: '' ,createdAt: '' });
  const orderone = useSelector((state) => (currentId ? state.orders.find((_id) => _id._id === currentId) : null));
  const classes = useStyles();
  const [OrdersisVisible, OrderssetIsVisible ] = useState(false);
  useEffect(() => {
   
    if(order.StatusOrder === "Ready to be delivered to the customer"){
      setBackgroundcolor('#BBBBBB')
      setOrderReadyToGo('1')
      SetNewOrder(false)
    }
    if(order.StatusOrder === "Order has been submitted and closed"){
      setBackgroundcolor('#A87DAB')
      ReadyButtonSetIsVisible(false)
      SetNewOrder(false)
    }
    if(order.StatusOrder === "Order In Progress"){
     
      SetNewOrder(true)
    }
    if (orderone) setOrdersData(orderone);
    }, [orderone]);
  const ShowOrderTabel = () => {
    OrderssetIsVisible(true);
  }
  const HideOrderTabel = () => {
    OrderssetIsVisible(false);
  }
  const ReadyToGo = () => {
    if(OrderReadyToGo === '1') {
      AlretClosed();
        dispatch(updateOrder(currentId, { ...Orders ,StatusOrder : 'Order has been submitted and closed' }));
    
    }
    else {
    AlretReady();
      dispatch(updateOrder(currentId, { ...Orders ,StatusOrder : 'Ready to be delivered to the customer' }));
    
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const CloseDialog = () => {
    setOpen(false);
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
                      <Avatar alt="Remy Sharp" src={order.OrderImages [0]} className={classes.large} />
                      <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity [0]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [1]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[1]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [2]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[2]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [3]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[3]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [4]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[4]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [5]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[5]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [6]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[6]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [7]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[7]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [8]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[8]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [9]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[8]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [10]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[8]}</Typography>
                      </div>
                      <div class="col">
                       <Avatar alt="Remy Sharp" src={order.OrderImages [11]} className={classes.large} />
                       <Typography className="orderlabel" component="h1" className={classes.qty} variant="h5">X {order.Quntity[8]}</Typography>
                      </div>
                      </div>
                     
                </GridList>
                </Paper>
                </div>
                </Grid>
               
            </Grid>
           
            
            </CardContent>
        
            <div>
              <Button variant="contained" color="secondary" onClick={() => {setCurrentId(order._id); EditOrder(); }} className={classes.EditButton} startIcon={<EditIcon />}>Edit</Button>
              <Button variant="contained" style={{backgroundColor: '#c2a4c4'}} onClick={handleClickOpen} className={classes.Button} startIcon={<DeleteSweepIcon />}>Delete</Button>
              <div>
              <Dialog
        open={open}
        onClose={CloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
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
       
              <Tooltip title="Please click the button 2 clicks" arrow>
              <Button variant="contained"   onClick={() => {setCurrentId(order._id); ReadyToGo(); }}  className={classes.ReadyButton} style={{display : ReadyButtonisVisible ? "block" : "none"}} >{OrderReadyToGo ? `Done` : 'Ready'}</Button>
              </Tooltip>
            </div>


        </Card>
      
    </div>
    
  );
};

export default EachOrder;
