import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import OptionsForm from "../components/OptionsForm";
import Card from "../components/Card";
import API from "../utils/API";
import Book from "../components/Book";
import Button from "../components/Button";

class Search extends Component{

    state= {
        result: undefined
    };

componentDidMount(){
    API.getBooks().then(res=>
        console.log(res))
        .catch(err=>console.log(err));
}

handleSubmit =event =>{
    event.preventDefault();
    console.log(event.target.searchVal.value);
    let title = event.target.searchVal.value;
    API.search(title).then(res => this.setState({result:res.data.items[0].volumeInfo}))
    .catch(err => console.log(err));                                    

};

addBook=event=>{
    event.preventDefault();
    API.saveBook({
        title:this.state.result.title,
                author:this.state.result.authors[0],
                description:this.state.result.description,
                link:this.state.result.infoLink,
                image:this.state.result.imageLinks.thumbnail

    }).then(res=> console.log("saved" + res))
    .catch(err=>console.log(err));


    console.log("add book")

}



render(){
    if (this.state.result === undefined){
return (
    <Container>
        <Row>
            <Col size="sm-12">
            <Card detail={<OptionsForm onClick={this.handleSubmit} />} /> 
            </Col>
        </Row>
    </Container>
)}
else {return (
    <Container>
        <Row>
            <Col size="sm-12">
                <Card header={this.state.result.title}
                detail={
                <Book title={this.state.result.title}
                author={this.state.result.authors[0]}
                description={this.state.result.description}
                link={this.state.result.infoLink}
                image={this.state.result.imageLinks.thumbnail} />
                }
                button={<Button fcn={this.addBook} label="Add To Database" />} 
                />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
            <Card detail={<OptionsForm onClick={this.handleSubmit} />} /> 
            </Col>
        </Row>
    </Container>
)}

}
}


export default Search;

