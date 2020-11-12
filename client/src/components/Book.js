import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";


function Book (props) {
  return (
    <Container>
      <Row>
        <Col size="sm-6">
        <img src={props.image} alt="thumbbnail" />
        </Col>
        <Col size="sm-6">
      <h3>Author: </h3><p>{props.author}</p>
      <h3>Description:</h3> <p>{props.description}</p>      
      </Col>
      </Row>
      <Row>
        <Col size="sm-12">
        <a href={props.link}>Click here to view on Google Books!</a>
        </Col>
      </Row>
  </Container>
    
  );
}

export default Book;