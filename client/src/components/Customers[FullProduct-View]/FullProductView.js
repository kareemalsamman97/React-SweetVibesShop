import React, { useState, useEffect } from 'react';
import {  Button, Typography, Card, CardContent, CardMedia , FormControl ,Select  , MenuItem , InputLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import  './FullProductView.css';
//**********************************All*Importing*Imports*******************************************************//
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
//**********************************All*Pictures*Imports*********************************************************//
const Form = ({ currentId, setCurrentId , orderNowButton , addToCart , RemoveAllCartWithOutNotiy , noQtyChoosed}) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '', shopNow: '' }); //getting the products data
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null)); // getting only the product that the user want to see it in full product view mode
  const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0'); // will get the quntity order to know if chosed or no
  const classes = useStyles(); // will use material style
  const [value, setValue] = React.useState(''); // this for the value for the selected box for the quntity orders
  const [isVisible, setIsVisible] = useState(true); // this for whole page

  useEffect(() => { // here it will check if there a product to be viewd , how it work ? if the user clicked on a product to see full view of it will , so it will chage the current id of the products from zero to the id of the product
  if (post) setPostData(post); // if there an information about the product so it will fill it
  if (currentId === 0) { // if there is no product to full view product
  setIsVisible(false); // so it will hide the whole page 
  }
  else {  // if there a full product to full view 
  setIsVisible(true); // it wil show the whole page
  }
  }, [post]); // and then it will fill all the product information into varible

  const clear = () => { // on back home button clicked
  setCurrentId(0); // it will back the current id to default to not vewing this page again
  setIsVisible(false); // and hiding this page
  setPostData({ title: '', message: '', tags: '', selectedFile: '' }); // and to resting all the varible data
  };

  const BackButton = () => { // if back button is clicked
  setIsVisible(false); // it will hide the form
  clear(); // and actving the clear function to reset and set all to the default
  }
  
  const onChange = event => { // if the user choosed to buy quntity numbers of the product
    localStorage.setItem('qtyorder' , JSON.stringify(event.target.value)); // so it will set in local storage that can restore it in the order page and cart page
    setValue(event.target.value); // and save it in the varible settings
  }

  const checkingQty = () => { // if the user clicked on order now button and there is no selected quntity so
  if(qtyOrder === 0){ // it will check if the user didn't choosed how many he want
  noQtyChoosed(); // so it will send to the products page to the alret there to give an alret that the user need to choose how many items he want from this product
  } else { // if the user already choosed
  RemoveAllCartWithOutNotiy(); // so it will give orders to the product page to delete the cart but without alret
  orderNowButton(post); // and will access the complete order page with this order only
  window.location.reload(); // and will make rest to effect all the settings
  localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(true)); // and will give to the local storage that the order button is clicked
  }} 
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
    <Card className={classes.root}>
      <div className={classes.details}>
      <CardMedia
        className="Image"
        image={postData.selectedFile}/>
      </div>
      <CardContent className="contant">
          <Typography component="h5" variant="h5">
          {postData.title} 
          </Typography>
         
          <Typography variant="subtitle1" color="textSecondary">
          {postData.message}
          </Typography>
          <br />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">How Many Piece</InputLabel>
            <Select
              labelId="qtypeice"
              id="qtytextbox"
              value={value}
              onChange={onChange}
              label="How Many Piece"
            >
              <MenuItem value="">
                <em value={0}>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Typography variant="subtitle1" color="textSecondary">
          {postData.tags}  ₪ Per One Piece
          </Typography>
          
      </CardContent>

      <CardContent className="ButtonsBorder">
      <Button
        variant="contained"
        onClick={BackButton}
        className={classes.button}
        startIcon={<HomeIcon />}
      >
        Back To Home
      </Button>
      <Button
        variant="contained"
        onClick={()=> addToCart(post) }
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add To Cart
      </Button>
      <Button
        variant="contained"
        onClick={checkingQty }
        className={classes.button}
        startIcon={<StorefrontIcon />}
      >
        Order Now
      </Button>
      </CardContent>

    </Card>
 
    </div>
  );
};

export default Form;

//************************************************************************************************************//
//                                        Full Product View Page                                              //
//                                                                                                            //
// Here it will show full product view page                                                                   //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//