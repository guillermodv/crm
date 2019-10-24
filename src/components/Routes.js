import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Header} from "./commons";
import AccountsList from "./accounts";
import AccountEdit from "./accounts/AccountEdit";
import Account from "./accounts/Account";
import Login from "./authentication/Login";

const Routes = () => (
    <Router>
        <Header/>
        <div className="col-md-12 mb-12">
            <Switch>
                <Route exact path="/" component={AccountsList} />
                <Route exact path="/accounts" component={AccountsList} />
                <Route exact path="/account/new" component={AccountEdit} />
                <Route exact path="/account/show/:id" component={Account} />
                <Route exact path="/account/edit/:id" component={AccountEdit} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
        <Footer/>
    </Router>
);

export default Routes;
