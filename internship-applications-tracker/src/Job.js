import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './Firebase';

// rfce: shortcut for creation

function Job(props) {

    return (
        <List>
            <ListItem>
                <ListItemText primary={props.job.position}/>
                <ListItemText primary={props.job.status}/>
            </ListItem>
            <Button onClick={event => db}>change</Button>
            <DeleteForeverIcon onClick={event => db.collection('jobList').doc(props.job.id).delete()}/>
        </List>
    )
}

export default Job
