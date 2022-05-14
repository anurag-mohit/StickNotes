import React from "react";
// import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = (props) => {
    const deletenote = () => {
        const x = window.confirm("Are You Sure Wish To delete this item")
        if (x === true) { props.deletenote(props.id); }
    }
    return (<>
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button className="btn" onClick={deletenote}>
                <DeleteOutlineIcon className="deleteIcon" />
            </button>
        </div>
    </>)
}

export default Note;