import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostUsers from './components/PostUsers/Posts';
import AdminStorage from './components/Admin/Admin';
import OrdersHome from './components/AdminOrders/OrdersHome'
import Accountsettings from './components/AccountSettings/Accountsettings'
import Form from './components/FormUsers/Form'
import UserOrder from './components/UserOrderList/UserOrder'
import HomeCustomerOrder from './components/UserOrderList/Home'
import AdminHomeNotification from './components/AdminBoxNotification/Home'
import AboutUs from './components/Aboutus/aboutus'
import ErrorPage from './components/ErrorPage/ErrorPage'
const App = () => (
  <BrowserRouter>

      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/shop" exact component={PostUsers} />
        <Route path="/storage" exact component={AdminStorage} />
        <Route path="/orderslist" exact component={OrdersHome} />
        <Route path="/accountsettings" exact component={Accountsettings} />
        <Route path="/orders" exact component={HomeCustomerOrder} />
        <Route path="/admininbox" exact component={AdminHomeNotification} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/" exact component={Home} />
        <Route path="" component={ErrorPage} />
      </Switch>
   
  </BrowserRouter>
);

export default App;
