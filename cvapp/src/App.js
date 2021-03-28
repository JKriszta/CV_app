
import './App.css';
import Button from './components/resetButton'
import MyDiv from './components/myDiv'
import TextArea from './components/textArea'
import React, { useState} from 'react'


function App() {
  const [text, setText] = useState("");

  const LoadDataFile = async () => {

    const data = await fetch("./data/cv.json")
    .then((response) => response.json())
    .catch((error) => console.error(error));
    console.log(data);
    document.querySelector(".textA").innerHTML = data.basic;
  }
  LoadDataFile();



  return (
    <div className="App">
      <TextArea text={text} send={setText}/>
      <MyDiv text={text}/>
 
      <Button />
  
    </div>
  );
}

export default App;

























  // for (const [key, value] of Object.entries(????????????) {
  //   switch (typeof value) {
  //     case "object": console.log("***object");
  //     break;
  //     case "number": console.log("***number");
  //     break;
  //     default: console.log("nem jó");
  //   }
  // }