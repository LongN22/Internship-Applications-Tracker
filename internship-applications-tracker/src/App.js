import React, { useState, useEffect } from 'react';
import Job from './Job';
import { Button, FormControl, Input, InputLabel, TableCell, TableContainer, Paper, Table, TableHead, TableRow } from '@material-ui/core';
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
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState('');
  const [company, setCompany] = useState('');


  console.log(position);

  // Load database from Firebase
  useEffect(() => {
    db.collection('jobList').orderBy('timestamp').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().position));
      setJobList(snapshot.docs.map(doc => ({id: doc.id, position: doc.data().position, status: doc.data().status, description: doc.data().description, pay: doc.data().pay, company: doc.data().company})));
    })
  }, []);

  const addJob = (event) => {
    console.log('added');
    // Push input into jobList
    db.collection('jobList').add({
      position: position,
      description: description,
      pay: pay,
      company, company,
      timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
      status: 'Applied'
    })
    // Clears input box after submission
    setPosition('');
    setDescription('');
    setPay('');
    setCompany('');
  }


  
  return (
    <div className="App">
      <h1>Internship Applications Tracker</h1>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input value={position} onChange={event => setPosition(event.target.value)}/>
      </FormControl>

      <FormControl>
      <InputLabel>Company</InputLabel>
      <Input value={company} onChange={event => setCompany(event.target.value)}/>
      </FormControl>

      <FormControl>
      <InputLabel>Description</InputLabel>
      <Input value={description} onChange={event => setDescription(event.target.value)}/>
      </FormControl>

      <FormControl>
      <InputLabel>Pay</InputLabel>
      <Input value={pay} onChange={event => setPay(event.target.value)}/>
      </FormControl>

      <Button disabled={!position} onClick={addJob} variant="contained" color="primary">
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
