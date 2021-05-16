import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home[Main-Page]/Home';
import Navbar from './components/Navigation[Nav-Bar]/Navbar';
import Auth from './components/Authentication[Signin-Signup]/Auth';
import PostUsers from './components/Shop[Products-Page]/Products-Home';
import AdminStorage from './components/Admin[Admin-Storage]/Admin-Storage';
import OrdersHome from './components/Admin[Customers-Orders]/OrdersHome'
import HomeCustomerOrder from './components/Customers[My-Order]/UserOrdersHome'
import AdminHomeNotification from './components/Admin[Notifaction-Inbox]/Home'
import AboutUs from './components/AboutUs[Contuct-Us]/aboutus'
import ErrorPage from './components/ErrorPage[404-Html]/ErrorPage'
const App = () => (
  <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/shop" exact component={PostUsers} />
        <Route path="/storage" exact component={AdminStorage} />
        <Route path="/orderslist" exact component={OrdersHome} />
        <Route path="/orders" exact component={HomeCustomerOrder} />
        <Route path="/admininbox" exact component={AdminHomeNotification} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/" exact component={Home} />
        <Route path="" component={ErrorPage} />
      </Switch>
  </BrowserRouter>
);
export default App;

//************************************************************************************************************//
//                                         Main App Page                                                      //
//                                                                                                            //
// in this page all components are selected here and using 'Browser Router' to route all the components and to//
// get access to all the pages in this project.                                                               //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//