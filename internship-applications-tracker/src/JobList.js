import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';

// rfce: shortcut for creation

function JobList(input) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={input.text} />
            </ListItem>
        </List>
    )
}

export default JobList
