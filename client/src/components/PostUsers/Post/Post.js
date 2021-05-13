import React, { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography , Grow} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import './styling.scss'
import hide, { Posts } from "../Posts";
import { useDispatch } from 'react-redux';
import  '../PostUserCss.css';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import props from 'prop-types';
import Customer from '../../CustomersOrders/CustomerCart'
import navbar from '../../Navbar/Navbar'
import PostForm from '../Posts'
import SearchIcon from '@material-ui/icons/Search';
const Post = ({  post, setCurrentId , onAdd , addToCart , showProductFullID  }) => {
  const [cart , setCart] = useState([]);
  const [page , setPage] = useState('post')
  const [FullProductisVisible, FullProductsetIsVisible ] = useState(true);
  const history = useHistory()
  const classes = useStyles();
  const MenuClciked = () =>{
    FullProductsetIsVisible(false);
    
  }
  
 
  
  return (
    <Grow in>
    <div style={{ display: FullProductisVisible ? "block" : "none" }}>



      <Card className={classes.card}>
     



      <figure class="snip1206">
      <CardMedia className={classes.media}  image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title}/>
      <figcaption>
      <h2>{post.title}</h2>
      <p ><SearchIcon /> Show Now</p>
      </figcaption>
      <a onSelect={MenuClciked} onClick={ () =>{ {setCurrentId(post._id); showProductFullID();  }}}></a>
      </figure>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags + " ₪"}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button variant="contained" onClick={()=> addToCart(post) } className={classes.cart}>Add To Cart</Button>
      <Button variant="contained"  onClick={ () =>{ {setCurrentId(post._id); showProductFullID();  }}} className={classes.order}>Order Now</Button>
      </CardActions>
    
    </Card>
    </div>
    </Grow>

 
     
   
    
  );
};

export default Post;
