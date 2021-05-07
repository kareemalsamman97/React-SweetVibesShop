import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchNotification } from '../../actions/notification';
import {Container,  Grow, Grid , Typography , Tabs  , AppBar , Box  , Tab  , Badge , Avatar } from '@material-ui/core';
import {Card }from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import PropTypes from 'prop-types';
import UnSeenMessages from './UnSeenMessages'
import SeenMessages from './SeenMessages'
import AllMessages from './AllMessages'
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const AdminHomeNotification = () => {
    const notiys = useSelector((state) => state.notiys);
    const UnseenMessages = useSelector((state) => ( state.notiys.filter((NotificationSeenOrNot) => NotificationSeenOrNot.NotificationSeenOrNot === 'No')));
    const seenMessages = useSelector((state) => ( state.notiys.filter((NotificationSeenOrNot) => NotificationSeenOrNot.NotificationSeenOrNot === 'Yes')));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [currentId, setCurrentId] = useState(0);
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    useEffect(() => {

        var userName = user?.result.name;
        if(userName !==  "SweetVibes Admin"){
            history.push("/home");
      
          }
        dispatch(fetchNotification());
      }, [currentId, dispatch]);
      const handleChanges = (event, newValue) => {
        setValue(newValue);
      };
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
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
        <Tabs
          value={value}
          onChange={handleChanges}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
      
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