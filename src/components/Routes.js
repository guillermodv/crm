import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "./commons";
import AccountsList from "./accounts";
import AccountEdit from "./accounts/AccountEdit";
import AccountItem from "./accounts/AccountItem";
import EventsList from "./events";
import EventItem from "./events/EventItem";
import UnderConstruction from "./commons/UnderConstruction";
import Login from "./authentication/Login";
import { requestFetchSession } from "../actions/session";
import AccountNew from "./accounts/AccountNew";

const Routes = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.session.profile);

  useEffect(() => {
    dispatch(requestFetchSession());
  }, [dispatch]);

  return (
    <Router>
      <div style={{ backgroundColor: "#F0F8FF" }}>
        <Header />
        <Switch>
          {!profile && <Route exact path="/" component={Login} />}
          {!profile && <Route exact path="/login" component={Login} />}
          {!profile && <Route exact path="/*" component={Login} />}
          {profile && <Route exact path="/login" component={Login} />}
          {profile && <Route exact path="/" component={AccountsList} />}
          {profile && <Route exact path="/accounts" component={AccountsList} />}
          {profile && (
            <Route exact path="/account/new" component={AccountNew} />
          )}
          {profile && (
            <Route exact path="/account/show/:id" component={AccountItem} />
          )}
          {profile && (
            <Route exact path="/account/edit/:id" component={AccountEdit} />
          )}
          {profile && <Route exact path="/events" component={EventsList} />}
          {profile && (
            <Route exact path="/event/show/:id" component={EventItem} />
          )}
          {profile && <Route exact path="/*" component={UnderConstruction} />}
          {profile && (
            <Route exact path="/under" component={UnderConstruction} />
          )}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
