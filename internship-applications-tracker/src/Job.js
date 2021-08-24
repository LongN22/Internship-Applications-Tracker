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
    const updateStatus = (event) => {
        if(props.job.status == 'Applied'){
            db.collection('jobList').doc(props.job.id).update({
                status: 'Accepted'
            })
        }
        else if(props.job.status == 'Accepted'){
            db.collection('jobList').doc(props.job.id).update({
                status: 'Denied'
            })
        }
        else{
            db.collection('jobList').doc(props.job.id).update({
                status: 'Accepted'
            })
        }
    }

    return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
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
                    <TableCell style={{ maxWidth: 0}}>
                        {props.job.status}
                    </TableCell>
                    <DeleteForeverIcon onClick={event => db.collection('jobList').doc(props.job.id).delete()}/>
                    <DeleteForeverIcon onClick={updateStatus}/>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default Job
