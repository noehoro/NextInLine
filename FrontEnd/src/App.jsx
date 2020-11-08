import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Start } from "./components/Start";
import { Line } from "./components/Line";


function App() {
  return (
    <div className="App vw-100 vh-100 overflow-hidden text-dark bg-dark">
      <Router>
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/line" component={Line} />
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
