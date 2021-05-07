import React, { useState, useEffect } from 'react';
import {Container,  Typography, Grid , Paper , TextField , Button ,OutlinedInput } from '@material-ui/core';
import {Card }from 'react-bootstrap'
import useStyles from './style';
import Logo from './../../images/SweetVibes_Logo.jpg'
import SendIcon from '@material-ui/icons/Send';
import * as emailjs from "emailjs-com";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
const AboutUs = () => {
const [Data , setData] = useState ({UserEmail: '' , UserName : '' , UserPhone: '' , UserMessage: '' });
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const [MainisVisible, MainsetIsVisible ] = useState(true);
const [AfterSubmitisVisible, AfterSubmitsetIsVisible ] = useState(false);
const classes = useStyles();
const history = useHistory();
var data = {
    to_email: 'morshed500@gmail.com',
    to_name: Data.UserName,
    from_name: "Sweet Vibes Customers",
    message: [
      "Customer Name : " + Data.UserName + ", " + 
      "Customer Email : " + Data.UserEmail + ", " +
      "Customer Phone : " + Data.UserPhone + ", " + 
      "Customer Message : " + Data.UserMessage
    ]

  };
 
  const OnSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_batyss7', 'template_lwjtvl7', data, 'user_j09Q47mxMy4zHue2mw5lK')
    MainsetIsVisible(false);
    AfterSubmitsetIsVisible(true)
    setTimeout(function(){
        history.push("/home");
    }, 8000);
  }
return ( 
    <div>
    <Container >
           
            <Card className={classes.Card} >
            <Card.Header className={classes.Label}>About Us</Card.Header>
            <div style={{ display: MainisVisible ? "block" : "none" }}>
            <Card.Body  className="text-center">
            <Grid  container spacing={3} >
            <Grid item xs={6} >
            <Paper className={classes.mainpaper} square  variant="outlined"  >
            <Card square style={{ height: 540}} >
            <Card.Header >SweetVibes</Card.Header>
            <img src={Logo} className={classes.Logo}/> <br/>
            <Typography className={classes.typography}>Dessert Shop</Typography>
            <Typography className={classes.typography}>We were created with love , and so our sweets</Typography>
            <Typography className={classes.typography}>and we can't buy happiness , but we can buy sweets and that's kind of the same time</Typography>
            <a href="tel:052-700-1861" style={{color : '#A87DAB'}}>Phone Number : +972 052-700-1861</a>
            <a href="mailto: mai.mw.1990@gmail.com" style={{color : '#A87DAB'}}>Email Us : mai.mw.1990@gmail.com</a>  
            </Card>
            </Paper>
            </Grid>
            <Grid item xs={6} className={classes.mobileone}>
            <Paper className={classes.mainpaper} square  variant="outlined">
            <Card square style={{ height: 540}}>
            <Card.Header  >Contuct Us</Card.Header>
            <Typography className={classes.typography}>Your feedback is enormously valuable to us so we greatly appreciate you taking the time to give us a feedback :)</Typography>
            <TextField className={classes.TextField}  onChange={(e) => setData({ ...Data, UserName: e.target.value })} id="outlined-basic"placeholder="your name" variant="outlined" />
            <TextField className={classes.TextField}  onChange={(e) => setData({ ...Data, UserEmail: e.target.value })}  id="outlined-basic"placeholder="your email" variant="outlined" />
            <TextField className={classes.TextField}  onChange={(e) => setData({ ...Data, UserPhone: e.target.value })}  id="outlined-basic"placeholder="phone number" variant="outlined" />
            <TextField className={classes.TextField}  onChange={(e) => setData({ ...Data, UserMessage: e.target.value })}  multiline rows={4} placeholder="your message" variant="outlined" />
            <Button variant="contained"  className={classes.button} onClick={OnSubmit}  endIcon={<SendIcon />}> Submit </Button>
            </Card>
            </Paper>
            </Grid>
            </Grid>
            </Card.Body>
            </div>
            <div style={{ display: AfterSubmitisVisible ? "block" : "none" }}>
            <Card square style={{ height: 580}} >
            <img src={Logo} className={classes.LogoAfter}/> <br/>
            <Typography className={classes.typographyFilter}>Thank you for you kind :) , we will contact you as soon as we can.</Typography>
            
            </Card>
            </div>
            <Card.Footer className="text-muted"></Card.Footer>
            </Card>
           
</Container>
    </div>

)
}
export default AboutUs;