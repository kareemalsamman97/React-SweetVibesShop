import React, { useState, useEffect } from 'react';
import {Typography  , Avatar  } from '@material-ui/core';
import useStyles from './styles';
import moment from 'moment';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateNotifications } from '../../actions/notification';
//**********************************All*Importing*Imports*******************************************************//
const UnSeenMessages = ({Messages , currentId , setCurrentId}) => { // getting all varible settings from the home page
    const classes = useStyles(); // using the material styles
    const dispatch = useDispatch(); // using the dikspatch action
    const [expanded, setExpanded] = useState(false); // expanding the message
  
    const [Noity , setNoityData] = useState ({NotificationImages: '' , NotificationType: '' , NotificationMessage: ''  ,NotificationSeenOrNot: 'Yes' , NotificationDate: ''}); // will explain here ..
    // here this will page will make .. if the user sawed the message it [clicked on the expand icon] it will enter to 
    //the data base id message and change the 'NotificationSeenOrNot' to 'Seen' , so it will not back to unseen 
    //message and that will help the admin to detect which unseen messages and seen messages
    useEffect(() => { // getting the messages data into the varible
      if (Messages) setNoityData(Messages);
      }, [Messages]);
    
    const SaveData = () => { // saving data into the message id data 
      setTimeout(function(){ // giving timer
      dispatch(updateNotifications(currentId, { ...Noity ,NotificationSeenOrNot : 'Yes' })); // here it will change the message is seened
      }, 10000);
    }
    
    const handleChange = (panel) => (event, isExpanded) => { // to expand the message
      setExpanded(isExpanded ? panel : false); // to expand it or not
    };
//****************************************************************************************************************//
    const Accordion = withStyles({
      root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
        
        },
      },
      expanded: {},
    })(MuiAccordion);
    const AccordionSummary = withStyles({
      root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
          minHeight: 56,
        },
      },
      content: {
        '&$expanded': {
          margin: '12px 0',
          
        },
      },
      expanded: {},
    })(MuiAccordionSummary);
    const AccordionDetails = withStyles((theme) => ({
      root: {
        padding: theme.spacing(2),
        
      },
    }))(MuiAccordionDetails);
//**********************************Accordion styling*******************************************************//
    return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary style={{backgroundColor : 'white'}} expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header"  onMouseEnter={ () =>{{setCurrentId(Messages._id)}}}    onClick={SaveData} >
      <Avatar src={Messages.NotificationImages} />
      <Typography className={classes.heading}>{Messages.NotificationTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{backgroundColor : '#F5F5F5'}}>
      <Typography>{moment(Messages.NotificationDate).add(10, 'days').calendar()} :</Typography>
      <Typography> {Messages.NotificationMessage} </Typography>
      </AccordionDetails>
      </Accordion>
    </div>
    )
    };

export default UnSeenMessages;

//************************************************************************************************************//
//                                      unSeen messages for admin                                             //
//                                                                                                            //
// This page for admin notifcation page                                                                       //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//