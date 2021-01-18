import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Adminboard from '../components/Admin/adminboard/Adminboard';
import AdminCustomers from '../components/Admin/adminboard/datatables/Customers/AdminCustomers';
import AdminFundings from '../components/Admin/adminboard/datatables/Fundings/AdminFundings';
import AdminOrders from '../components/Admin/adminboard/datatables/Orders/AdminOrders';
import AdminUsers from '../components/Admin/adminboard/datatables/Users/AdminUsers';
import Chat from './chat';

function AdminPage() {
    return (
        <Router>
                <Adminboard />
                <Route path="/customers" component={AdminCustomers} exact />
                <Route path="/users" component={AdminUsers}/>
                <Route path="/orders" component={AdminOrders}/>
                <Route path="/fundings" component={AdminFundings}/>
                <Route path="/chat" component={Chat}/>
        </Router>
        )
    
}

export default AdminPage;
