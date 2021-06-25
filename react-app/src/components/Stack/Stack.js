import React from "react";

import "./Stack.css";

const Stack = props => {
  return (
    <ul className="list-style">
      {props.techStack.map((stackItem) => {
        return (
          <h1 key={stackItem.key}>{stackItem.text}</h1>
        )
      })}
    </ul>
  );
};

export default Stack;
