import React from "react";
import { Button } from "react-bootstrap";
import QRCode from "qrcode.react"

export const Line = ({ history }) => {
  const name = localStorage.getItem("lineCode");

  const buttonClick = () => {
    console.log("hello!");
  };

  const seeLineClick = () => {
        history.push("/seeline")
  }

  return (
    <div className="container w-50">
      <div className="mb-3">Your line's name is {localStorage.getItem("lineName")}</div>

      <QRCode value={"http://next-in-line-rpi.herokuapp.com/join/" + localStorage.getItem("lineCode")} />

      <div className="mb-5">Your line's code is: {name}</div>
      <div className="row mb-5">
        <div className="col-sm-4"></div>
        <Button className="col-sm-4" variant="success" onClick={seeLineClick}>
          See Line
        </Button>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <Button className="col-sm-4" variant="success" onClick={buttonClick}>
          Ready for New Customer
        </Button>
      </div>
    </div>
  );
};
