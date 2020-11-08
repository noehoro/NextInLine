import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Join = () => {
  let { linecode } = useParams();
  console.log(linecode)
  const [code, setCode] = useState(linecode ? linecode : "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onClick = () => {
    axios
      .post("http://next-in-line-rpi.herokuapp.com/addUser", {
        code: code,
        name: name,
        phone: phone,
      })
      .then((response) => {
        alert("Signed up!");
      });
  };

  return (
    <>
      <form noValidate className="w-50">
        <h1 className="font-weight-normal mb-4">
          <b>Please Enter Line Code</b>
        </h1>
        <div className="form-group mt-4 row">
          <div className="col-sm-4"></div>
          <input
            type="text"
            className="form-control col-sm-4"
            name="code"
            placeholder="Code"
            value={code}
            onChange={onChangeCode}
          />
        </div>
        <div className="form-group mt-4 row">
          <div className="col-sm-4"></div>
          <input
            type="text"
            className="form-control col-sm-4"
            name="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-4 row">
          <div className="col-sm-4"></div>
          <input
            type="text"
            className="form-control col-sm-4"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
      </form>
      <button className="btn btn-lg btn-dark btn-block" onClick={onClick}>
        Join Line
      </button>
    </>
  );
};
