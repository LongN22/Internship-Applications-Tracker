import React from 'react'
import { List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Tooltip } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
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
                status: 'Offer'
            })
        }
        else if(props.job.status == 'Offer'){
            db.collection('jobList').doc(props.job.id).update({
                status: 'Rejected'
            })
        }
        else if(props.job.status == 'Rejected'){
            db.collection('jobList').doc(props.job.id).update({
                status: 'Applied'
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
                    <TableCell>Pay</TableCell>
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
                    <TableCell style={{ maxWidth: 0}}>
                        {props.job.pay}
                    </TableCell>
                    <Tooltip title='Delete'>
                        <DeleteForeverIcon nClick={event => db.collection('jobList').doc(props.job.id).delete()}/>
                    </Tooltip>
                    <Tooltip title="Update Status">
                        <UpdateIcon onClick={updateStatus}/>
                    </Tooltip>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default Job
