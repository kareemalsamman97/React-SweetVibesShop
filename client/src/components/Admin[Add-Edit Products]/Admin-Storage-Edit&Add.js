import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, CardMedia ,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import  './FormCss.css';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
//**********************************All*Importing*Imports*******************************************************//
const Form = ({ currentId , hideForm , AlretEdit, AlretCreated}) => { // getting all the varible from the admin storage page
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' }); // to save all the settings
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null)); // getting the product data
  const dispatch = useDispatch(); // getting for actions
  const classes = useStyles(); // getting material style
  const user = JSON.parse(localStorage.getItem('profile')); // getting the user data

  useEffect(() => {
    if (currentId === 0) {  // checking there is product is used to be eddited so if no
      setPostData({ title: '', message: '', tags: '',  }); // it will make all the varible is nothing
    }
    if (post) setPostData(post); // will put all the data into the PostData varible
    }, [post]);

  const clear = () => { // clear the texts box function
    setPostData({ title: '', message: '', tags: '',  });
  };

  const handleSubmit = async (e) => { // on submiting in the end of the form
    e.preventDefault();
    if (currentId === 0) { // it will check if to edit the produt or to add new product so if there is no choosed product it will creat a new product
      AlretCreated(); // it will give to the home page to show the created storage
      dispatch(createPost({ ...postData, name: user?.result?.name })); // will create the product
      clear(); // and then will clear all the texts box
      hideForm(); // and will hide this form and show the products page
    } else { // if there is a product has been choosed from the id
      AlretEdit(); // will give to the product page to show the alret edit
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name })); // will save all the data 
      clear(); // and clearing all the text box
      hideForm(); // and will hide the edit form
    }
  };

  
  return (
   <div>
         <CardMedia
        className="Image"
        image={postData.selectedFile}/>
      <Grid container spacing={3} className="cotainer">
      <Grid container item xs={12} >
      <Typography className="mainLabel" variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Product'}</Typography>
      </Grid>
      <Grid container item xs={12} >
      <TextField className="TextField" name="title" variant="outlined" label="Product Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      </Grid>
      <Grid container item xs={12} >
      <TextField className="TextField" name="message" variant="outlined" label="Product Detial"  multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      </Grid>
      <Grid container item xs={12} >
      <TextField  className="TextField" name="tags" variant="outlined" label="Product Price"  value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
      </Grid>
      <Grid container item xs={12} >
      <div className="button"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
      </Grid>
      <Grid container item xs={12} >
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={handleSubmit} type="submit" >{currentId ? "Save" : 'Submit'}</Button>
      </Grid>
      <Grid container item xs={12} >
      <Button variant="contained"  className={classes.buttonClear} size="small" onClick={clear} >Clear</Button>
      </Grid>
    </Grid>
       
     
  
    </div>
  );
};

export default Form;
//************************************************************************************************************//
//                                       Admin Storage edit                                                   //
//                                                                                                            //
// This page for admin storage                                                                                //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//