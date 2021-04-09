import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import NewOrders from "./pages/NewOrders";
import Orders from "./pages/Orders";
import Results from "./pages/Results";
import NoMatch from "./pages/NoMatch";
import ExistingOrders from "./pages/ExistingOrders";
import Nava from "./components/Nav";
import ResultsEntry from "./pages/ResultsEntry";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>


        <Nava />

        <Switch>          

          <Route exact path={[ "/"]}>
            < Home/>
          </Route>

          <Route exact path={[ "/patients"]}>
            < Patients/>
          </Route>

          <Route exact path={[ "/orders"]}>
            < Orders/>
          </Route>

          <Route exact path={[ "/NewOrders"]}>
            < NewOrders/>
          </Route>

          <Route exact path={[ "/results"]}>
            < Results/>
          </Route> 
          
          <Route exact path={[ "/ResultsEntry/:id"]}>
              < ResultsEntry/>
          </Route>


          <Route exact path={[ "/existingorders"]}>
            < ExistingOrders/>
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
