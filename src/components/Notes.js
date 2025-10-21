import React, { useContext, useEffect, useRef } from 'react'
import noteContex from '../contex/notes/noteContex'
import Noteitem from './Noteitem';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const contex = useContext(noteContex);
    const { notes, getNotes, setcurrentNote } = contex;
    const navigate = useNavigate();
    const ref = useRef(null);
    useEffect(() => {
        if(localStorage.getItem('auth-token')){
            getNotes();
        }else{
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);
    const updateNote = (currentnote) => {
        ref.current.click();
        setcurrentNote({eid: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    };

    return (
        <>
            <Modal ref={ref} />
            <div className='row mt-4'>
                {notes.map(note =>{
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes