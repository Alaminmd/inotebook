import React, { useContext } from 'react'
import noteContex from '../contex/notes/noteContex';

const Noteitem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(noteContex);
    const { deleteNote } = context;

    return (
        <div className='col-lg-3 mt-4 mb-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title d-flex">{note.title}</h5>
                    <p className="card-text text-start d-flex">{note.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h6>
                        Tag : {note.tag}
                    </h6>
                    <div>
                        <i className="fa fa-trash mx-3 Trash-Icon" aria-hidden="true" id='delete-btn' onClick={() => { deleteNote(note._id) }}>
                            <p id="status-message" className='text-success'></p>
                        </i>
                        <i className="fa-solid fa-pen-to-square Update-Icon" onClick={() => { updateNote(note) }} ></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Noteitem