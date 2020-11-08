import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Start } from "./components/Start";
import { Line } from "./components/Line";
import { List } from "./components/List";
import { Join } from "./components/Join";


const App = () => {
  return (
    <div className="App vw-100 vh-100 overflow-hidden text-dark bg-dark">
      <Router>
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/line" component={Line} />
            <Route exact path="/seeline" component={List} />
            <Route exact path="/join/:linecode?" component={Join} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
