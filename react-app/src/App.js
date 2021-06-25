import React, {useState} from "react";

import Stack from "./components/Stack/Stack";
import NewStack from "./components/NewStack/NewStack";

import "./App.css";

//Old School
// class App extends React.Component{
//   render(){
//       return <h1>Learning React</h1>;
//   }
// }

const App = () => {

  const [newItem, setNewItem] = useState([
    {key: 'dtp1', text: 'MongoDB'},
    {key: 'dtp2', text: 'Express'},
    {key: 'dtp3', text: 'Node'},
    {key: 'dtp4', text: 'React'}

  ]);

  const onAddStackHandler = (newData) => {
    // setNewItem(newItem.concat(newData));
    setNewItem(prevItem => prevItem.concat(newData));

  };

  return (
      <div className="stack-header">
      <h2>MERN STACK</h2>
      <NewStack onDataAdd={onAddStackHandler}/>
      <Stack techStack={newItem}/>
     </div>
  );
};

export default App;
