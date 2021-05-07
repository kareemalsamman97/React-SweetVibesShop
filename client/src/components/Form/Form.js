import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, CardMedia ,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import  './FormCss.css';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId , hideForm , AlretEdit, AlretCreated}) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
 
    if (currentId === 0) {
      setPostData({ title: '', message: '', tags: '',  });
   
    }
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    
    setPostData({ title: '', message: '', tags: '',  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      AlretCreated();
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
      hideForm();
    } else {
      AlretEdit();
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
      hideForm();
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