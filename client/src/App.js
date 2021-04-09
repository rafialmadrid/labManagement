import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import NewOrders from "./pages/NewOrders";
import Orders from "./pages/Orders";
import Results from "./pages/Results";
import Detail from "./pages/Detail";
import Login from './components/Login/Login';
import useToken from './useToken';
import NoMatch from "./pages/NoMatch";
import ExistingOrders from "./pages/ExistingOrders";
import Nava from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <div>
        <Nava />
        <Switch>
          <Route exact path={["/", "/books"]}>
          </Route>
          <Route exact path={["/"]}>
            < Home />
          </Route>
          <Route exact path={["/patients"]}>
            < Patients />
          </Route>
          <Route exact path={["/orders"]}>
            < Orders />
          </Route>
          <Route exact path={["/NewOrders"]}>
            < NewOrders />
          </Route>
          <Route exact path={["/results"]}>
            < Results />
          </Route>
          <Route exact path={["/existingorders"]}>
            < ExistingOrders />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
