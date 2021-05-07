import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper , Grid , Container} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Card, CardActions, CardContent, CardMedia , FormControl ,Select  , MenuItem , InputLabel } from '@material-ui/core/';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles.js';
import Image from 'material-ui-image'
import  './UserFormCss.css';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';
const Form = ({ currentId, setCurrentId , orderNowButton , addToCart , RemoveAllCartWithOutNotiy , noQtyChoosed}) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '', shopNow: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const qtyOrder = JSON.parse(localStorage.getItem('qtyorder') || '0')
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (post) setPostData(post);
    console.log(currentId)
    if (currentId === 0) {
      
      setIsVisible(false);
    }
    else {   
      setIsVisible(true);
       }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setIsVisible(false);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
    
      setIsVisible(true);
      
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
     
      setIsVisible(true);
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  const BackButton = () => {
    setIsVisible(false);
    dispatch(createPost({ ...postData, name: user?.result?.name }));
    clear();
  }
  const HomeButton = () => {

    setIsVisible(false);
    dispatch(createPost({ ...postData, name: user?.result?.name }));
    clear();
  }
  const onChange = event => {
    localStorage.setItem('qtyorder' , JSON.stringify(event.target.value))
    setValue(event.target.value);
  }
  const checkingQty = () => {
   if(qtyOrder === 0){
    noQtyChoosed()
     
   } else {
    RemoveAllCartWithOutNotiy()
    orderNowButton(post)
    window.location.reload()
    localStorage.setItem('IsOrderNowButtonClciked' , JSON.stringify(true))
   }
}
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