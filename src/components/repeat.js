import React, { Fragment } from "react";

const Repeat = ({ children, times = 2 }) => {
  let items = [];

  for (let i = 0; i < times; i++) {
    items.push(children);
  }

  return <Fragment>{items}</Fragment>;
};

export { Repeat };
