import React from "react";
import { Button } from "react-bootstrap";
import { QRious } from "qrious";

export const Line = () => {
  const name = localStorage.getItem("lineCode");

  const buttonClick = () => {
    console.log("hello!");
  };

  const createQRCode = () => {
  };

  return (
    <div className="container w-50">
      <div>Your line's name is {localStorage.getItem("lineName")}</div>
      <img alt="QR CODE" src={createQRCode()} />

      <canvas id="qr"></canvas>

      <script>
        let qr = new QRious({
          element: document.getElementById('qr'),
          value: 'https://github.com/neocotic/qrious'
        });
      </script>

      <div className="mb-5">Your line's code is: {name}</div>
      <div className="row mb-5">
        <div className="col-sm-4"></div>
        <Button className="col-sm-4" variant="success" onClick={buttonClick}>
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
