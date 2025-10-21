import { useState } from "react";
import NoteContex from "./noteContex";
import { toast } from 'react-toastify';

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [currentNote, setcurrentNote] = useState({ eid: "", etitle: "", edescription: "", etag: "" });
  const [credintials, setcredintials] = useState({ email: "", password: "" });
  const [createaccount, setcreateaccount] = useState({ name: "", email: "", password: "", number: "" });
  const [progressBolean, setprogressBolean] = useState(false);
  const notifyError = () => toast.error("Cancel Successful");
  const notifyDelete = () => toast.info("Delete Successful");

  const getYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  };


  //Get All Notes
  const getNotes = async () => {
    //API Call here....
    const url = `${host}/api/notes/fetchallnote`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token')
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setNotes(result);
    } catch (error) {
      console.error(error.message);
    }

  };


  //Add Note----------
  const addNote = async (title, description, tag) => {
    //API Call here....
    const url = `${host}/api/notes/addnote`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setNotes(notes.concat(result));
    } catch (error) {
      console.error(error.message);
    }

  };


  //Delete Note-----------
  const deleteNote = async (id) => {
    const confirm = window.confirm("Are you sure!");
    if (confirm) {
      const url = `${host}/api/notes/deletenote/${id}`;
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('auth-token')
          }
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
      const newNote = notes.filter((note) => { return note._id !== id });
      setNotes(newNote);
      notifyDelete();
    } else {
      notifyError();
    }

  };


  //Update Note-----------
  const updateNote = async (id, title, description, tag) => {
    //API Call here....
    const url = `${host}/api/notes/updatenotes/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('auth-token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }

    let newUpdateNote = JSON.parse(JSON.stringify(notes));
    //Logic for edit in client....
    for (let index = 0; index < newUpdateNote.length; index++) {
      const element = newUpdateNote[index];
      if (element._id === id) {
        newUpdateNote[index].title = title;
        newUpdateNote[index].description = description;
        newUpdateNote[index].tag = tag;
        break;
      }
    }
    setNotes(newUpdateNote);
  };


  return (
    <NoteContex.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes, currentNote, setcurrentNote, credintials, setcredintials, createaccount, setcreateaccount, getYear, progressBolean ,setprogressBolean }}>
      {props.children}
    </NoteContex.Provider>
  );
}


export default NoteState;
