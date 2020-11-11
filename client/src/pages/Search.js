import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import OptionsForm from "../components/OptionsForm";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";

function Search(){

handleSubmit = event=>{
    event.preventDefault();
    console.log("clicked");

}

return (
    <Container>
        <Row>
            <Col size="sm-12">
            <Card detail={<OptionsForm handleSubmit={this.handleSubmit}/>} />
            </Col>
        </Row>
    </Container>

)

}

export default Search;

