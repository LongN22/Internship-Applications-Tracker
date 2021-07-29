import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './Firebase'
require('dotenv').config({path: '/.env'})



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

  // Load database from Firebase
  useEffect(() => {
    db.collection('jobList').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().Position));
      setJobList(snapshot.docs.map(doc => doc.data().Position));
    })
  }, []);

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
          <JobList text={list}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
