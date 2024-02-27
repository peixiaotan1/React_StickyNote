import React from "react";

function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <span>{new Date().toLocaleDateString()}</span>
      <p>{props.content}</p>
      <button onClick={handleClick}> X
      </button>
    </div>
  );
}

export default Note;
