import React from 'react';
import { useHistory } from "react-router-dom";
import  './style.css';
import Container from '@material-ui/core/Container';
const ErrorPage = () => {
    const history = useHistory();
    setTimeout(function(){

        history.push("/home");
      }, 5000);
    return (
        <Container maxWidth="sm" >
            <div justify = "center">
            <label className="label">404</label>
            <label className="label2">We couldn't find the page that you're looking for.</label>
            <label className="label2">We will be forword to Home Page.</label>
            </div>
          
        </Container>
    )
    }
export default ErrorPage;