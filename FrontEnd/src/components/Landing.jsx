import React from "react";
import logo from "../Images/logo.png";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const Landing = ({ history }) => {
  const buttonClick = (e) => {
    e.preventDefault();
    history.push("/start");
  };
  return (
    <div className="container">
      <div className="jumbotron bg-dark">
        <div className="col-sm-8 mx-auto text-center">
          <img src={logo} alt="Logo" />
          <ul className="list-group list-group-flush mt-4">
            <div className="row">
              <div className="col-sm-2"></div>
              <Button
                className="col-sm-8"
                variant="success"
                onClick={buttonClick}
              >
                Start Line
              </Button>
              <div className="col-sm-2"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Landing);
