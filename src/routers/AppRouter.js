import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


//path prop = what is the endpoint
//component prop = what is the component to show
//exact prop = match the exact route listed in path
//Switch component - loop through all of the Routes that match; last Route will always match because no path
// Route components will pass props down to the components used. Such as match,location, history
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch> 
        </div>
      
    </BrowserRouter>
);

export default AppRouter;