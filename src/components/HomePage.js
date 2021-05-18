import React, { Component } from "react";
import { Jumbotron, Container, Carousel, Button } from "react-bootstrap";

class Landing extends Component {
    render() {
        return (
            <div className="about-page">
                <Jumbotron fluid>
                    <Container style={{ textAlign: "center" }}>
                        <h1>Infobility</h1>
                        <p>
                            Where caregivers learn how to give better care to
                            their loved ones with disabilities.
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid style={{ backgroundColor: "white" }}>
                    <Container style={{ textAlign: "center" }}>
                        <h3>A Low-Cost Interactive Disability Tool</h3>
                        <p>
                            We give you fun, interactive modules to learn more
                            about disabilities like ADHD and Autism. Think
                            Duolingo, but for disability education.
                        </p>
                        <Button variant="success">
                            Join Infobility for $5 per Month
                        </Button>
                    </Container>
                </Jumbotron>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="banner-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Disability tools are too expensive.</h3>
                            <p>
                                If you want existing services, you'll have to
                                jump through many hoops, if you can afford them
                                at all. Not so with Infobility.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="banner-2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>
                                Learn how to communicate with your child with
                                ADHD or Autism.
                            </h3>
                            <p>
                                Infobility gives you interactive modules that
                                you can explore. You can do them whenever and
                                wherever you want, and have fun doing them!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="banner-3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Learn how to advocate for your child.</h3>
                            <p>
                                It's hard to get the resources for your child.
                                Infobility will show you how to make it easier.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Landing;
