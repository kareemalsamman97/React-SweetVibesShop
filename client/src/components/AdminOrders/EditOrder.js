import React, { useState, useEffect } from 'react';
import { Paper,Typography , Button , Grid  , TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../../actions/orders';
import useStyles from './styles';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const EditOrders = ({currentId , BackButton , AlretEdit}) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [Orders , setOrdersData] = useState ({  CustomerName: '', StatusOrder: '', CustomerOrders: '', CustomerPhone: '', CustomerEmail: '', CustomerAddress: '', TotalPrice : '' , OrderImages: '',Quntity: '' ,createdAt: '' });
  const order = useSelector((state) => (currentId ? state.orders.find((_id) => _id._id === currentId) : null));
  useEffect(() => {

  if (order) setOrdersData(order);
  }, [order]);
  const clear = () => {
    setOrdersData({ StatusOrder: '', CustomerName: '', CustomerOrders: '', CustomerPhone: '', CustomerEmail: '', CustomerAddress: '', TotalPrice : '' , OrderImages: '',Quntity: '' ,createdAt: '' });
  }
  const SaveData = () => {
    AlretEdit();
    dispatch(updateOrder(currentId, { ...Orders }));
    clear();
  }

  return (
      <div className={classes.Main}>
            
           <Paper className={classes.MainPaper} variant="outlined" square>
           <Typography className={classes.MainLabel} variant="h6">{currentId ? `Order #${order.CustomerName}` : ''}</Typography>
           <Typography className={classes.MainLabel1} variant="h6">{currentId ? `ID #${order._id}` : ''}</Typography>
           </Paper>
           <Grid container spacing={3} className={classes.Container}>
            <Grid container item xs={12} >
            <TextField className={classes.TextField} name="CustomerName" variant="outlined" label="Customer Name" value={Orders.CustomerName} onChange={(e) => setOrdersData({ ...Orders, CustomerName: e.target.value })} />
            </Grid>
            <Grid container item xs={12} >
            <TextField className={classes.TextField} name="CustomerPhone" variant="outlined" label="Customer Phone" value={Orders.CustomerPhone} onChange={(e) => setOrdersData({ ...Orders, CustomerPhone: e.target.value })} />
            </Grid>
            <Grid container item xs={12} >
            <TextField className={classes.TextField} name="CustomerAddress" variant="outlined" label="Customer Address" value={Orders.CustomerAddress} onChange={(e) => setOrdersData({ ...Orders, CustomerAddress: e.target.value })} />
            </Grid>
            <Grid container item xs={12} >
            <Button variant="contained"  className={classes.buttonBack} onClick={BackButton} size="large"  startIcon={<ArrowBackIcon />}  >Back</Button>
            <Button variant="contained"  className={classes.buttonClear} onClick={clear} startIcon={<DeleteIcon />}size="large" >Clear</Button>
            <Button variant="contained"  className={classes.buttonSave} size="large" onClick={SaveData}  startIcon={<SaveIcon />}  >Save</Button>
            </Grid>
       
          </Grid>
       
   
    </div>
  );
};

export default EditOrders;