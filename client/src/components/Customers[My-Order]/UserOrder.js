import React, { useState, useEffect } from 'react';
import { ListItem ,List, Typography, Tooltip, Divider , Slide   , Accordion ,Grid  , AccordionSummary , AccordionActions , Button, ListItemText ,AccordionDetails, Dialog  , DialogTitle, DialogActions , DialogContentText ,  DialogContent , ListItemAvatar ,  Avatar} from '@material-ui/core';
import clsx from 'clsx';
import GridList from '@material-ui/core/GridList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { deleteOrder } from '../../actions/orders.js';
import { useDispatch } from 'react-redux';
import { createNotifications } from '../../actions/notification';
//**********************************All*Importing*Imports*******************************************************//
  const UserOrder = ({order , userorder}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user name
  const [Noity , setNoityData] = useState ({NotificationTitle : 'An Order has been deleted' , NotificationImages: 'https://bl3302files.storage.live.com/y4mmNDMmFyVB3wFbiEHCq0C25mVP4OH-vseXu1jMisOFJbjE3UReY1znTJnlnjRZMR-0y41Pslds1nbgNcrEVrynIFDrtm5ep72pzBUTwxP4mRb1dhGaXxwN6ER43YVqcC-6WfbO7hhYLs4VR9HZkON9kVtsd1al_0REaSdu4fGGzRQVJ7zKMOkd2uDkqnh_HQi?width=128&height=128&cropmode=none', NotificationType: 'DeletedOrder' , NotificationMessage: 'A UserName With : [' + user?.result.name + '] has been deleted his order'  ,NotificationSeenOrNot: 'No' , NotificationDate: moment().subtract(10, 'days').calendar() }); // getting the data for the admin notfication to update the message that if the user deleted his order it will send from here a message that the user with his name deleted the order
  const classes = useStyles(); // using material style
  var Dateoftheday =  moment().format('l'); // getting the today date that to get able to delete the order for user or no
  const dispatch = useDispatch(); // getting the update action
  const [ColorOfStatus , setColorOfStatus] = useState('black'); // changing the status color for the order
  const [DeleteButtonDisable , setDeleteButtonDisable] =  useState(true); // enabling or disabling the delete button only if the admin did not statred with the user order and the order is pased on the order a day
  const [DeleteNoAllawed , setDeleteNoAllawed] =  useState(true); // disabling the button or no
  const [DeleteText , setDeleteText] =  useState(' '); // will be shown only if the order is able to be deleted
  const [openDialog, setOpenDialog] = React.useState(false); // will open the dialog of the order
  const history = useHistory(); // will using history to push if trying to enter without logged in user
  var userName = user?.result.name; // getting the username to send it to the admin if he deleted the order
  const Transition = React.forwardRef(function Transition(props, ref) { // to show or hide the order
  return <Slide direction="up" ref={ref} {...props} />;
  });

  function generate(element) { // fetching the table data
  return [userorder].map((order) =>
  React.cloneElement(element, {
  key: order,
  }),);}

  useEffect(() => {
  if(userName ===  undefined){ // if there is no user and tryed to enter with url so it will kick him
    history.push("/home"); // to the home
  }
        
  if(order.StatusOrder === "Ready to be delivered to the customer"){ // if the status order is ready
    setColorOfStatus('#50c878');  // will change the color of the label
  }
  if(order.StatusOrder === "Order has been submitted and closed"){ // if the status is submited
    setColorOfStatus('#882d17'); // will change thye label color
  }
  if(order.StatusOrder === "Order In Progress" && moment(order.createdAt).format('l') === Dateoftheday){ // if not pasted a day and the admin did not started in his order
  setDeleteButtonDisable(false); // will not disable the delete button
  setDeleteNoAllawed(false); // will not disable the delete button noty
  setDeleteText('DELETE ORDER');   // will set the button text that can be deleted
  }
  });

  const DeleteButtonClicked = () => { // if delete button is clicked
  setOpenDialog(true); // will open the dialog question to confirm the user
  };
  const CloseDialog = () => { // will close the dialog
  dispatch(createNotifications(Noity)); // and after that will make to the admin the notifcation
  setOpenDialog(false); // and will close the dialog
  };
      
  return (
    
     
         <div className={classes.root}>
         <Accordion  elevation={3}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1c-content"
             id="panel1c-header"
             className={classes.expandmobile}
           >
             <div className={classes.column}>
               <Typography className={classes.heading}>Order Date : {moment(order.createdAt).format("MMM Do YY")}</Typography>
             </div>
             <div className={classes.column}>
               <Typography className={classes.secondaryHeading}>ID Order: {order._id}</Typography>
             </div>
             <div className={classes.column}>
               <Typography className={classes.secondaryHeading}>Total Order: {order.TotalPrice}₪</Typography>
             </div>
          
           </AccordionSummary>
           <Divider />
           <AccordionDetails className={classes.details}>
       
             <div className={classes.column }>
             <Typography className={classes.ordername}>Quntity Products :  {'[ ' + order.Quntity + ' ]'}</Typography>
             
             <Typography className={classes.ordername}>Total Price : {order.TotalPrice}</Typography>
             
             <Typography className={classes.ordername}>Customer Address : {order.CustomerAddress}</Typography>
             
             <Typography className={classes.ordername}  style={{ textDecoration: 'underline'  , color: ColorOfStatus}} >Order Status : {order.StatusOrder}</Typography>
           
    
            </div>
             <div className={clsx(classes.column, classes.helper)}>
             <Typography className={classes.ordername}>Products Name :  </Typography>
             <Grid container spacing={2} className={classes.list}>
              <Grid item xs={12} md={12}>
                <div className={classes.demo}>
                  <List >
                    {generate(
                      <ListItem>
                        <ListItemText   
                        />
                        {'[ ' + order.CustomerOrders + ' ]'}
                       
                      </ListItem>,
                    )}
                  </List>
          </div>
        </Grid>
        </Grid>
             </div>
             <div className={clsx(classes.column, classes.helperone)}>
             <div className={classes.rootss}>
             <GridList cellHeight={100} className={classes.gridList}>
                    <div class="row">
                      <div class="col">
     
     <div className={classes.main}>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" >
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[0]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[0] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[1]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[1] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[2]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[2] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[3]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[3] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[4]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[4] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[5]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[5] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[6]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[6] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[7]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[7] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[8]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[8] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[9]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[9] + ' of this SweetVibes'}/>
        </ListItem>
        <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar><Avatar alt="Travis Howard" src={order.OrderImages[10]} /></ListItemAvatar>
        <ListItemText className={classes.label} primary={order.Quntity[10] + ' of this SweetVibes'}/>
        </ListItem>
        </div>
        </div>
        </div>
        </GridList>
        </div>
             {/* ------------------------------------ for the user products image and names  --------------------------------------------------- */}
             </div>
           </AccordionDetails>
           <Divider />
        <AccordionActions>
        
        <Tooltip title="You can delete the order" arrow>
        <Button size="meduim" className={classes.DeleteButton} onClick={DeleteButtonClicked} disabled={DeleteButtonDisable}>
        <Typography style={{ display: DeleteNoAllawed ? "block" : "none" }} >
          You can't delete this order , only if the Admin didn't submited you order and in the same day  &nbsp;
        </Typography>
         {DeleteText}
        </Button>
       
          </Tooltip>
          <div>
      <Dialog
            open={openDialog}
            onClose={CloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deleting this order?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You are trying to delete your order that you been submitted in &nbsp;
           { order.createdAt} , and you can't undo after you delete the order
            , so are you agree to delete the order ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={CloseDialog} color="primary">
            Disagree
          </Button>
          <Button onClick={() => {dispatch(deleteOrder(order._id)); CloseDialog();}}  color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
          {/* ------------------------------------ for the dialog confirmation --------------------------------------------------- */}
        </AccordionActions>
          
         </Accordion>
       </div>
    
  );

};

export default UserOrder;

//************************************************************************************************************//
//                                        Each Order Page                                                     //
//                                                                                                            //
// Here for the each order avaliblity for the user                                                            //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//