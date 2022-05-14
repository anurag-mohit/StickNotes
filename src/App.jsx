import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreaterNote from "./CreaterNote";
import Note from "./Note";
const App = () => {
    const [additem, setitem] = useState([]);
    const addnote = (note) => {
        if (note.title === "") {
            alert("please fill the Title");
        }
        else if (note.content === "") {
            alert("Please Fill The Content Area")
        }
        else {
            setitem((olditem) => {
                return [...olditem, note]
            })
        }
    }

    const removenote = (id) => {
        setitem((olditem) => olditem.filter((arrele, index) => {
            return (index !== id);
        })
        )
    }
    return (<>
        <Header />
        <Footer />
        <CreaterNote passnote={addnote} />
        {additem.map((val, index) => {
            return (
                <Note key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deletenote={removenote}
                />
            )
        })
        }
    </>)
}

export default App;