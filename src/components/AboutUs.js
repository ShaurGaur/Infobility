import React, { Component } from "react";
import { Jumbotron, Container, Card, Image, Button } from "react-bootstrap";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: require("../people.json"),
        };
    }

    render() {
        return (
            <div className="about-page">
                <Jumbotron fluid>
                    <Container style={{ textAlign: "center" }}>
                        <h1>Flaminc</h1>
                        <p>
                            We came together in an entrepreneurship class at
                            Oregon State University, united by our passion to
                            help people communicate better with their loved ones
                            with disabilities.
                        </p>
                    </Container>
                </Jumbotron>
                <div className="card-container">
                    {this.state.people.map((person) => (
                        <Card>
                            <Card.Body>
                                <Image
                                    src="banner-2.png"
                                    roundedCircle
                                    style={{}}
                                />
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Subtitle>{person.position}</Card.Subtitle>
                                <br />
                                <Card.Text>{person.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button as="a" href={"mailto:" + person.email}>
                                    <span
                                        class="material-icons"
                                        style={{ fontSize: 16 }}
                                    >
                                        send
                                    </span>
                                    {"   "}
                                    Email
                                </Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default About;
