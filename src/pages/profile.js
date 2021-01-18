import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, useHistory } from 'react-router-dom';
import News from '../components/NewsFeed/News';
import FundingsTable from '../components/Profile/datatables/Fundings/FundingsFilters';
import Portfolio1 from '../components/Profile/datatables/Portfolio';
import ProfileTable from '../components/Profile/datatables/Portfolio/PortfolioFilters';
import TransactionsTable from '../components/Profile/datatables/Transactions/TransactionsFilters';
import Profile from '../components/Profile/Profile'
import StockDashboard from '../components/Stocks/StockDashboard';
import Chat from './chat';


function UserPortfolio() {
    const history = useHistory();
    return (
        <Router>
            <Profile />
            <Route path="/portfolio" component={Portfolio1}/>
            <Route path="/transactions" component={TransactionsTable}/>
            <Route path="/userfundings" component={FundingsTable}/>
            <Route path="/availablemarket" component={StockDashboard}/>
            <Route path="/userchat" component={Chat}/>
            <Route path="/newsfeed" component={News}/>
        </Router>
    )
}

export default UserPortfolio;
