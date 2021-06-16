import React from "react";

import Stack from "./components/Stack";
import "./App.css";

//Old School
// class App extends React.Component{
//   render(){
//       return <h1>Learning React</h1>;
//   }
// }

const App = () => {
  return (
    <div className="stack-header">
      <h2>MERN STACK</h2>
      <Stack />
    </div>
  );
};

export default App;
