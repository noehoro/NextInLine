import React from "react";
import logo from "../Images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const Landing = ({ history }) => {
  return (
    <div className="container">
      <div className="jumbotron mt-5 bg-dark">
        <div className="col-sm-8 mx-auto text-center">
          <img src={logo} alt="Logo" />
          <ul className="list-group list-group-flush mt-4">
            <div className="row">
              <div className="col-sm-2"></div>
              <Link to="/start" className="col-sm-8">
                <Button className="w-100 h-100" variant="success">
                  Start Line
                </Button>
              </Link>
              <div className="col-sm-2"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Landing);
