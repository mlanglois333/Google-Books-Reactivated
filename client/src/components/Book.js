import React from "react";

function Book (props) {
  return (
    <div className="text-center">
      <h3>Title {props.title}</h3>
      <h3>Author {props.author}</h3>
      <h3>Description {props.description}</h3>
      <h3>Link: {props.link}</h3>
      <h3>Image:{props.image}</h3>

    </div>
  );
}

export default Book;