import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';


// npm install @material-ui/core

function App() {
  /*  
    Note: JSX (Javascript + HTML)
    E.g: <h1>Hello world {1+1}</h1>
      Output = Hello world 2
  */

  // Array of jobs (short-term storage. Resets after refresh)
  const [jobList, setJobList] = useState([]);
  const [input, setInput] = useState('');
  console.log(input);

  const addJob = (event) => {
    console.log('added');
    // Push input into jobList
    setJobList([...jobList, input]);
    // Clears input box after submission
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Internship Applications Tracker</h1>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} onClick={addJob} variant="contained" color="primary">
      Add
      </Button>

      <ul>
        {jobList.map(list => (
          <li>{list}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
