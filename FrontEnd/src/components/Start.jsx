import React, { useState } from "react";
import axios from "axios";

export const Start = ({ history }) => {
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();


    localStorage.setItem("lineName", name);
    axios
      .post("http://nextinline.tech/createline", { name: name })
      .then((response) => {
        localStorage.setItem("lineCode", response.data.code);
        history.push("/line");
      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <form noValidate onSubmit={onSubmit} className="w-50">
      <h1 className="font-weight-normal mb-4">
        <b>Please Enter Line Name</b>
      </h1>
      <div className="form-group mt-4 row">
        <div className="col-sm-4"></div>
        <input
          type="text"
          className="form-control col-sm-4"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-dark btn-block">
        Create Line
      </button>
    </form>
  );
};
