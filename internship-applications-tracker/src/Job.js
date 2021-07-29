import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './Firebase';

// rfce: shortcut for creation

function Job(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.job.position} />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('jobList').doc(props.job.id).delete()}/>
        </List>
    )
}

export default Job
