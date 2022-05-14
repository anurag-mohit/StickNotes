import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreaterNote = (props) => {
    const [note, setnote] = useState({ title: '', content: '' })
    const inputevent = (event) => {
        const { name, value } = event.target;
        setnote((olddata) => {
            return {
                ...olddata, [name]: value
            }
        })
    }
    const addnote = () => {
        props.passnote(note);
        setnote({ title: "", content: "" })
    }
    return (<>
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title" value={note.title} onChange={inputevent} name="title" />
                <textarea rows="" column="" placeholder="Write a note...." value={note.content} onChange={inputevent} name="content" spellcheck="true"></textarea>
                <Button onClick={addnote}><AddIcon className="plus_sign" /></Button>
            </form>
        </div>
    </>)
}

export default CreaterNote;