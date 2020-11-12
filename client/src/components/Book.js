import React from "react";

function Book (props) {
  return (
    <div className="text-center">
      <h3>Title</h3> <p>{props.title}</p>
      <h3>Author </h3><p>{props.author}</p>
      <h3>Description:</h3> <p>{props.description}</p>
      <a href={props.link}>Click here to view on Google Books!</a>
      <img src={props.image} alt="thumbbnail" />

    </div>
  );
}

export default Book;