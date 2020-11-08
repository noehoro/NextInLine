import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Button } from "react-bootstrap";

export const List = ({ history }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const code = localStorage.getItem("lineCode");
    axios
      .post("http://localhost:5000/getline", { code: code })
      .then((response) => {
        console.log(response.data.response_data);
        setData(response.data.response_data);
      });
  }, []);

  if (data) {
    return (
      <>
        <div className="row mb-5">
          <div className="col-sm-4"></div>
          <Button
            className="col-sm-8"
            variant="success"
            onClick={() => {
              history.push("/line");
            }}
          >
            Back
          </Button>
        </div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{value.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <div>
        <Spinner color="yellow" />
      </div>
    );
  }
};
