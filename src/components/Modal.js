import React, { forwardRef, useContext, useRef } from 'react';
import noteContex from '../contex/notes/noteContex';
import { toast } from 'react-toastify';
const Modal = forwardRef((props, ref) => {
    const context = useContext(noteContex);
    const { currentNote, setcurrentNote, updateNote } = context;
    const refClose = useRef(null);
    const notifyUpdate = ()=>{toast.success("Update Successful")};
    const handleUpdateNote = ()=>{
        updateNote(currentNote.eid, currentNote.etitle, currentNote.edescription, currentNote.etag);
        refClose.current.click();
        notifyUpdate();
    };
    const onchange = (e) => {
        setcurrentNote({ ...currentNote, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
                Launch modal
            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 mt-3">
                                    <div className="form-group">
                                        <label className='h6 d-flex' htmlFor="tag">Note Tag</label>
                                        <textarea className="form-control mb-4" id="etag" name="etag" rows="1" value={currentNote.etag} onChange={onchange}></textarea>

                                        <label className='h6 d-flex' htmlFor="title">Note Title</label>
                                        <textarea className="form-control mb-4" id="etitle" name="etitle" rows="2" value={currentNote.etitle} onChange={onchange}></textarea>

                                        <label className='h6 d-flex' htmlFor="description">Note Description</label>
                                        <textarea className="form-control" id="edescription" name="edescription" rows="7" value={currentNote.edescription} onChange={onchange}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdateNote}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Modal