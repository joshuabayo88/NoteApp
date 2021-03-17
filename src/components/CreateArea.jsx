import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import { Route, Redirect, Link } from "react-router-dom";
import Home from "./Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import noteImage from "../assets/notelaptop.jpg";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setIsExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    const noteObject = {
      title: note.title,
      content: note.content,
    };
    axios
      .post("http://localhost:3001/notes/create", noteObject)
      .then((res) => {
        console.log("Note succesfully Posted");
      })
      .catch((error) => {
        console.log(error);
      });
    // props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setIsPosted(true);
  }

  return (
    <div
      style={{
        backgroundColor: "grey",
        backgroundSize: "cover",
        backgroundPosition: "centre",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${noteImage})`,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" style={{ float: "right" }}>
        <Link to="/" style={{ color: "#702122" }}>
          Back Home
        </Link>
      </Breadcrumbs>
      <form className="centre-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {isExpanded && (
          <Zoom in={true}>
            <Fab
              onClick={submitNote}
              style={{ backgroundColor: "#a45c56", float: "right" }}
            >
              <PostAddIcon style={{ color: "#3c1a13" }} />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
