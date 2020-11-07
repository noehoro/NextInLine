// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Switch>
            <Route exact path="/">
              <h1>This Is The Landing Page </h1>
              <Link to="/page1"> Page 1 </Link>
              <Link to="/page2"> Page 2 </Link>
            </Route>
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
