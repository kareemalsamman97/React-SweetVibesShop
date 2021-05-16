import React, { useState , useEffect} from 'react';
import './styling.scss';
import  '../PostUserCss.css';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { Card, CardActions, CardContent, CardMedia, Button, Typography , Grow} from '@material-ui/core/';
//**********************************All*Importing*Imports*******************************************************//
const Post = ({  post, setCurrentId  , addToCart , showProductFullID  }) => {
  const RamadanModeFromLocal = JSON.parse(localStorage.getItem('ramadanmode')); // getting ramdan mode
  const [FullProductisVisible, FullProductsetIsVisible ] = useState(true); // getting full product view to show or now
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // chaning the button background if ramdan mode is on 
  const classes = useStyles(); // using the material style

  useEffect(() => { // running the code for one time
    if(RamadanModeFromLocal === true){ // cheking ramdan mode is on
      SetLabelLogo('#F7CC70'); // changing the background color of the buttons
    } else if(RamadanModeFromLocal === false){ // if ramdan mode is off
      SetLabelLogo('#A87DAB'); // changing the background color of the buttons
    }
  });

  const MenuClciked = () =>{ // on image product clicked it will hide each product
    FullProductsetIsVisible(false); // it will hide the page
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
          <Button variant="contained"  onClick={ () =>{ {setCurrentId(post._id); showProductFullID();  }}} className={classes.order} style={{backgroundColor : LabelLogo}}>Order Now</Button>
          </CardActions>
          </Card>
       </div>
    </Grow>
  );
};

export default Post;

//************************************************************************************************************//
//                                        each product Page                                                   //
//                                                                                                            //
// This page for the each product page                                                                        //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//