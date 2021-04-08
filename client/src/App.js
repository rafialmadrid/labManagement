import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import NewOrders from "./pages/NewOrders";
import Orders from "./pages/Orders";
import Results from "./pages/Results";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nava from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Nava />
        <Switch>
<<<<<<< HEAD
          
          <Route exact path={[ "/home"]}>
=======
          <Route exact path={["/", "/books"]}>
          </Route> 
          <Route exact path={[ "/"]}>
>>>>>>> main
            < Home/>
          </Route>
          <Route exact path={[ "/patients"]}>
            < Patients/>
          </Route>
          <Route exact path={[ "/orders"]}>
            < Orders/>
          </Route>
          <Route exact path={[ "/neworders"]}>
            < NewOrders/>
          </Route>
          <Route exact path={[ "/results"]}>
            < Results/>
          </Route> 
<<<<<<< HEAD

=======
          <Route exact path="/books/:id">
            <Detail />
          </Route>
>>>>>>> main
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
