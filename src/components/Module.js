import React, { Component } from "react";
// import { CardTitle, CardActions, Button, Card, CardText } from "react-mdl";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModuleCard from "./ModuleCard";

class Module extends Component {
    renderCard(elem) {
        var url = "/modules/" + elem.title.replace(/\s+/g, "_");
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Text>{elem.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button as="a" href={url}>
                        Open
                    </Button>
                    <Button>Preview</Button>
                </Card.Footer>
            </Card>
        );
    }

    render() {
        var prt = this.props.parent
            ? "/modules/" + this.props.parent.replace(/\s+/g, "_")
            : "";

        return (
            <div className="module-page">
                {this.props.parent ? (
                    <Link to={prt}>Back to {this.props.parent}</Link>
                ) : (
                    <div />
                )}
                <h1>{this.props.info.title}</h1>
                <p>{this.props.info.description || "No description here."}</p>
                <div className="card-container">
                    {this.props.info.submodules.map((elem) => (
                        <ModuleCard info={elem} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Module;
