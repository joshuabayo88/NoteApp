import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import noteimage from "../assets/noteflowers.jpg";
import axios from "axios";

function NotesView() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function viewNote() {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/notes");
      console.log(result.data);
      setNotes(result.data);
      console.log(notes);
    };
    fetchData();

    // useEffect(() => {

    //   const fetchData = async () => {
    //    const result = await axios.get('http://localhost:3001/notes');
    //     console.log(result.data);
    //     setNotes(result.data);
    //     console.log(notes);
    //   };

    //   fetchData();
    //   console.log(notes);
    //  }, []);
  }

  const deleteNote = async (title) => {
    let result = await axios
      .delete(`http://localhost:3001/notes/delete/${title}`)
      .then((res) => {
        console.log(title);
        console.log(res.status);
        setNotes((prevNotes) => {
          return prevNotes.filter((noteItem, index) => {
            return index !== title;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // .then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    //   // setNotes(prevNotes => {
    //   //   return prevNotes.filter((noteItem, index) => {
    //   //      return index !== id;
    //   //     });
    //   //   });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        backgroundSize: "cover",
        backgroundPosition: "centre",
        height: "100vh",
        backgroundImage: `url(${noteimage})`,
      }}
    >
      <div>
        <Button
          variant="contained"
          color="#702122"
          onClick={viewNote}
          style={{ position: "absolute" }}
        >
          <VisibilityIcon />
          View Notes
        </Button>
        {/* <CreateArea onAdd={addNote} /> */}
        {notes.map((data, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={data.title}
              content={data.content}
              onDelete={deleteNote}
            />
          );
        })}

        <Breadcrumbs aria-label="breadcrumb" style={{ float: "right" }}>
          <Link to="/" style={{ color: "white" }}>
            Back Home
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}
export default NotesView;
