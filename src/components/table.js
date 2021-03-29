import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {deleteProject} from "../store/actions/projectAction";

const useStyles = makeStyles({
    table: {
        maxWidth: 1000,
        border: "2px solid "
    },
});

export default function BasicTable() {

    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch()
    console.log(projects)
    const classes = useStyles();
    const handleDelete =(id)=>{
        return ()=>{
            dispatch(deleteProject(id))
        }

    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Content</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id}>
                            {/*<TableCell component="th" scope="row">*/}
                            {/*    {project.title}*/}
                            {/*</TableCell>*/}
                            <TableCell align="right">{project.title}</TableCell>
                            <TableCell align="right">{project.content}</TableCell>
                            <TableCell align="right">{project.createAt}</TableCell>
                            <TableCell><Button id={project.id} onClick={handleDelete(project.id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}