import React, {Component} from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
//import OptionsForm from "../components/OptionsForm";
import Card from "../components/Card";
import API from "../utils/API";
import Book from "../components/Book";
import Button from "../components/Button";


class View extends Component {

    state = {
        result: undefined,
        isLoading: true
    }

    componentDidMount = () => {
        this.loadBooks();

    }

    loadBooks = ()=>{
                API.getBooks().then(res =>
            this.setState({ result: res.data, isLoading: false }))
            .catch(err => console.log(err));
    }

    deleteBook=id =>{
        API.deleteBook(id)
        .then(res=> this.loadBooks())
        .catch(err => console.log(err));
    }

    cLog=()=>{
        console.log(this.value);
    }

    render() {

        if (this.state.isLoading === true) {
            return (
                <div>
                    <h4>
                        Loading...
                </h4>
                </div>
            )
        }
        else if (this.state.isLoading === false) {
            console.log(this.state.result);
            return (

                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1 className="jumbotron">
                                Saved Books
                </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="sm-12" children={this.state.result.map(res=>(
                            <Card header={res.title} detail={<Book title={res.title}
                                author={res.author}
                                description={res.description}
                                link={res.link}
                                image={res.image} />}
                                button={<Button fcn={()=>this.deleteBook(res._id)} label="Remove from Saved" val={res._id}/>}
                                 />
                        ))} />
                    </Row>
                </Container>

            )
        }
    }

}

export default View;
