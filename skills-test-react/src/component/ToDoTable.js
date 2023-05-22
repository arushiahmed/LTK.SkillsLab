import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ToDoTable = ({data, onDelete}) => {
    return (
        <div>
            <Typography variant='h2' style={{textAlign: 'center'}}> To Do List:</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell  style={{textAlign: 'center'}}>Items:</TableCell>
                            <TableCell  style={{textAlign: 'center'}}>Action:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell  style={{textAlign: 'center'}}>{row.todo}</TableCell>
                                <TableCell  style={{textAlign: 'center'}}>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => onDelete(index)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default ToDoTable;