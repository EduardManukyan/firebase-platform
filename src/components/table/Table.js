import React, {useEffect} from 'react';
import {deleteProject, getProjects} from "../../store/actions/projectAction";
import {useDispatch, useSelector} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import {
    makeStyles,
    withStyles,
    Button,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Paper,
} from '@material-ui/core'

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        maxWidth: 700,
        border: "2px solid "
    },
});
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
export default function BasicTable() {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch()
    console.log(projects)
    const classes = useStyles();
    const handleDelete = (id) => {
        return () => {
            dispatch(deleteProject(id))
        }
    }

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    return (
        <div>
            <TableContainer style={style} component={Paper}>
                <Table className={classes.table} aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Title</StyledTableCell>
                            <StyledTableCell align="center">Content</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Delete DB</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project) => (
                            <StyledTableRow key={project.id}>
                                <StyledTableCell align="center">{project.title}</StyledTableCell>
                                <StyledTableCell align="center">{project.content}</StyledTableCell>
                                <StyledTableCell align="center">{project.createAt}</StyledTableCell>
                                <StyledTableCell>
                                    <Button
                                        variant="contained"
                                        onClick={handleDelete(project.id)}
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon/>}
                                    >
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}