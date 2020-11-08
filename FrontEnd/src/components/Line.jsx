import React from "react";

export const Line = () => {
  const name = localStorage.getItem("lineCode");
  return (
    <>
      <div>Your line's name is {localStorage.getItem("lineName")}</div>
      <div>Your line's code is: {name}</div>{" "}
    </>
  );
};
