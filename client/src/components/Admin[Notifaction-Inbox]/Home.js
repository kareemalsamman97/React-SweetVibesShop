import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchNotification } from '../../actions/notification';
import {Container,  Grow , Typography , Tabs  , AppBar , Box  , Tab  , Badge } from '@material-ui/core';
import {Card }from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import PropTypes from 'prop-types';
import UnSeenMessages from './UnSeenMessages';
import SeenMessages from './SeenMessages';
import AllMessages from './AllMessages';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import AllInboxIcon from '@material-ui/icons/AllInbox';
//**********************************All*Importing*Imports*******************************************************//
const AdminHomeNotification = () => {
    const notiys = useSelector((state) => state.notiys); // getting the notfication from  data base 
    const UnseenMessages = useSelector((state) => ( state.notiys.filter((NotificationSeenOrNot) => NotificationSeenOrNot.NotificationSeenOrNot === 'No'))); // making varible to get all unseen messages
    const seenMessages = useSelector((state) => ( state.notiys.filter((NotificationSeenOrNot) => NotificationSeenOrNot.NotificationSeenOrNot === 'Yes'))); // making varible to get all seen messages
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user information
    const [currentId, setCurrentId] = useState(0); // getting the current id for the message 
    const [value, setValue] = React.useState(0); // getting the value text for the tabs
    const dispatch = useDispatch(); // using actions
    const history = useHistory(); // usiong history to kick the user if not admin
    const classes = useStyles(); // using material style
    var userName = user?.result.name; // getting the user name
//*********here we will use to getting 3 type of the message type [ seen / not seen / all ] and send them to every each page***************//
    useEffect(() => {  // cheking if the user is admin or no
      if(userName !==  "SweetVibes Admin"){ // if it not an admin account
      history.push("/home"); // it will kick him
      }
        dispatch(fetchNotification()); // getting the notfication data from data base
      }, [currentId, dispatch]); // and getting the id of all the notfication

      const handleChanges = (event, newValue) => { // for the tabs so if it changed it will show the page that need to be shown
        setValue(newValue); // setting the data for the page
      };

      function TabPanel(props) { // function for the tap panel from materuial
        const { children, value, index, ...other } = props;
        return (
          <div
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}>
          {value === index && (
          <Box p={3}>
          <Typography>{children}</Typography>
          </Box>
          )}
          </div>
          );
      }
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      function a11yProps(index) {
        return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
      }
      //**********************************for the taps*******************************************************//
       
    return (
      <div>
      <Grow in>
      <Container>
      <Card className={classes.HomeCard} >
      <Card.Header style={{paddingLeft  : '45%'}}>
      <Card.Text>Admin Inbox</Card.Text>
      </Card.Header>
      <Card.Body>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChanges} variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary" aria-label="scrollable force tabs example">
          <Tab label="Unseen Messages" icon={  <Badge color="primary" badgeContent={UnseenMessages.length} > <MailIcon /> </Badge>} {...a11yProps(0)} />
          <Tab label="Seen Messages" icon={ <Badge color="primary" badgeContent={seenMessages.length} > <DraftsIcon /> </Badge>} {...a11yProps(1)} />
          <Tab label="All Messages" icon={    <Badge color="primary" badgeContent={notiys.length} > <AllInboxIcon /> </Badge>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.mobile}>
      {UnseenMessages.map((Messages) => (
      <div>
        <UnSeenMessages Messages={Messages} currentId={currentId}  setCurrentId={setCurrentId}/>
      </div>
         ))}
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mobile}>
      {seenMessages.map((Messages) => (
      <div>
        <SeenMessages Messages={Messages} />
      </div>
         ))}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.mobile}>
      {notiys.map((Messages) => (
         <AllMessages Messages={Messages} />
         ))}
      </TabPanel>
    </div>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </Container>
      </Grow>
        </div>
    )
};

export default AdminHomeNotification;

//************************************************************************************************************//
//                                        Home Page for notfication                                           //
//                                                                                                            //
// This page for admin notifcation page                                                                       //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//