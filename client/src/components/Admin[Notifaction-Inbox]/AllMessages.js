import React, { useState } from 'react';
import {Typography  , Avatar , DialogContent , DialogContentText , DialogActions, IconButton , Tooltip , Divider , Button , Slide  , Dialog , DialogTitle} from '@material-ui/core';
import useStyles from './styles';
import moment from 'moment';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../actions/notification';
import DeleteIcon from '@material-ui/icons/Delete';
//**********************************All*Importing*Imports*******************************************************//
const AllMessages = ({Messages}) => {
    const classes = useStyles(); // using material style
    const dispatch = useDispatch(); // using actions
    const [expanded, setExpanded] = useState(false); // to expand the message
    const [open, setOpen] = useState(false); // to open the delete message dialog
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
   
    const handleChange = (panel) => (event, isExpanded) => { // handle change if the message expanded or no
      setExpanded(isExpanded ? panel : false);
    };
   
    const OpenDialog = () => { // opening the delete dialog
      setOpen(true); // will open
    };

    const CloseDialog = () => { // closing the delete dialog
      setOpen(false); // will close it
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
    <AccordionSummary style={{backgroundColor : '#F5F5F5'}} expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
    <Avatar src={Messages.NotificationImages} />
    <Typography className={classes.heading}>{Messages.NotificationTitle}</Typography>
    </AccordionSummary>
    <AccordionDetails style={{backgroundColor : 'white'}}>
    <Tooltip title="Delete this notification" arrow>
    <IconButton className={classes.margin} onClick={OpenDialog} >
    <DeleteIcon fontSize="meduim" />
    </IconButton>
    </Tooltip>
    <div>
    <Dialog open={open} onClose={CloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{"Deleting this notfication?"}</DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    You are trying to delete this notifcation , so are you sure?
    you can't undo after you agree for this action
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button onClick={CloseDialog} color="primary">
    No
    </Button>
    <Button  onClick={() => {dispatch(deleteNotification(Messages._id)); CloseDialog();}} color="primary" autoFocus>
    Yes
    </Button>
    </DialogActions>
    </Dialog>
    </div>
    <Divider orientation="vertical" flexItem style={{marginRight : 10 }} />
    <Typography  className={classes.marginlalbel}>{moment(Messages.NotificationDate).add(10, 'days').calendar()} :</Typography>
    <Typography className={classes.marginlalbel}> {Messages.NotificationMessage} </Typography>
    </AccordionDetails>
    </Accordion>
  </div>
  )
  };

export default AllMessages;

//************************************************************************************************************//
//                                      All message for the admin page                                        //
//                                                                                                            //
// This page for admin notifcation page                                                                       //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//