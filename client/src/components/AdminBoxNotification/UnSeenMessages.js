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
const UnSeenMessages = ({Messages , currentId , setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const UnseenMessages = useSelector((state) => ( state.notiys.filter((NotificationSeenOrNot) => NotificationSeenOrNot.NotificationSeenOrNot === 'No')));
    const [Noity , setNoityData] = useState ({NotificationImages: '' , NotificationType: '' , NotificationMessage: ''  ,NotificationSeenOrNot: 'Yes' , NotificationDate: ''});
    useEffect(() => {
      console.log(currentId)
     
      if (Messages) setNoityData(Messages);
      }, [Messages]);
     
      const SaveData = () => {
       
        setTimeout(function(){
          dispatch(updateNotifications(currentId, { ...Noity ,NotificationSeenOrNot : 'Yes' }));
        }, 10000);
      }
    
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

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
    return (
      <div className={classes.root}>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
         <AccordionSummary 
        style={{backgroundColor : 'white'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          onClick={() => {setCurrentId(Messages._id); SaveData(); }} >
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