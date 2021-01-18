import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import AdminOne from "./pages/admin-pages";
import UserPortfolio from "./pages/profile";
import StockDashboard from "./components/Stocks/StockDashboard";

function App() {

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={RegisterPage} exact/>
      <Route path="/login" component={LoginPage} exact/>
      {/* user pages */}
      <Route path="/portfolio" component={UserPortfolio}/>
      <Route path="/availablemarket" component={UserPortfolio}/>
      <Route path="/userfundings" component={UserPortfolio}/>
      <Route path="/newsfeed" component={UserPortfolio}/>
      {/* abmin pages */}
      <Route path="/customers" component={AdminOne}/>
      <Route path="/users" component={AdminOne}/>
      <Route path="/orders" component={AdminOne}/>
      <Route path="/fundings" component={AdminOne}/>
    </Switch>
  )
}

export default App;
