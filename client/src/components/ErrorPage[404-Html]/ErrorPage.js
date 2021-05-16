import React from 'react';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import  './style.css';

const ErrorPage = () => {

    const history = useHistory(); // enabling history to push the user to another page
        setTimeout(function(){ // activing the timer
        history.push("/home"); // sending the user to the home page
    }, 5000);

    return (
        <Container maxWidth="sm" >
            <div justify = "center">
            <label className="label">404</label>
            <label className="label2">We couldn't find the page that you're looking for.</label>
            <label className="label2">We will be forword to Home Page.</label>
            </div>
        </Container>
        )}
export default ErrorPage;

//************************************************************************************************************//
//                                        Error Page                                                          //
//                                                                                                            //
// This is the Error page that when the user is going to any link outside the store                           //
// so it will give him this page to hell him that he in wrong page not exist                                  //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//