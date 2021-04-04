import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createProject} from "../../store/actions/projectAction";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function CreateProject() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState('')

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const contentChangeHandler = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content)
        dispatch(createProject({
            title,
            content
        }))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Create new project</h5>
                <div>
                    <label htmlFor="title">Title</label>
                    <input value={title} type="text" id="title" onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" value={content} onChange={contentChangeHandler}/>
                </div>
                <div>
                    <Button
                        type={"submit"}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon/>}
                    >
                        Save
                    </Button>

                </div>
            </form>
        </div>
    )

}


