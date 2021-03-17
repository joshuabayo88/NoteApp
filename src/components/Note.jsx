import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.title);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick} style={{ backgroundColor: "#a45c56" }}>
        <DeleteIcon style={{ color: "#3c1a13" }} />
      </Fab>
    </div>
  );
}

export default Note;
