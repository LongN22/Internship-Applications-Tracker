import React, { useState, useEffect } from 'react';
import Job from './Job';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './Firebase'
import Firebase from 'firebase'
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
    db.collection('jobList').orderBy('timestamp').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().position));
      setJobList(snapshot.docs.map(doc => ({id: doc.id, position: doc.data().position})));
    })
  }, []);

  const addJob = (event) => {
    console.log('added');
    // Push input into jobList
    db.collection('jobList').add({
      position: input,
      timestamp: Firebase.firestore.FieldValue.serverTimestamp()
    })
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
        {jobList.map(jobList => (
          <Job job={jobList}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
