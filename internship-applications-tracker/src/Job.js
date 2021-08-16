import React from 'react'
import { List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, DataGrid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './Firebase';

// rfce: shortcut for creation

/* <List >
            <ListItem divider={true} dense={true}>
                <ListItemText primary={props.job.position} secondary={props.job.company}/>
                <ListItemText primary={props.job.description}/>

                <ListItemText primary={props.job.pay}/>
                <DeleteForeverIcon onClick={event => db.collection('jobList').doc(props.job.id).delete()}/>

            </ListItem>
            
        </List> */




function Job(props) {

    return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={props.job.position}>
                    <TableCell style={{ maxWidth: 0}}>
                        {props.job.position}
                    </TableCell>
                    <TableCell style={{ maxWidth: 0}}>
                        {props.job.description}
                    </TableCell>
                    <DeleteForeverIcon onClick={event => db.collection('jobList').doc(props.job.id).delete()}/>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default Job
