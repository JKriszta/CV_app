
import './App.css';
import Button from './components/resetButton'
import MyDiv from './components/myDiv'
import TextArea from './components/textArea'
import React, { useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <Button />
      <TextArea text={text} send={setText}/>
      <MyDiv text={text}/>
      
     
      
      
    </div>
  );
}

export default App;
