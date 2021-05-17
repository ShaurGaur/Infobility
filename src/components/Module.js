import React, { Component } from "react";
import { CardTitle, CardActions, Button, Card, CardText } from "react-mdl";
import { Link } from "react-router-dom";

class Module extends Component {
    renderCard(elem) {
        var url = "/modules/" + elem.title.replace(/\s+/g, "_");
        return (
            <Card shadow={5}>
                <CardTitle
                    style={{
                        color: "cyan",
                        fontweight: "bold",
                        height: "200px",
                    }}
                >
                    {elem.title}
                </CardTitle>
                <CardText>{elem.description}</CardText>
                <CardActions>
                    <Button>
                        <Link to={url}>Open</Link>
                    </Button>
                    <Button>Preview</Button>
                </CardActions>
            </Card>
        );
    }

    render() {
        return (
            <div className="module-page">
                <h1>{this.props.info.title}</h1>
                <p>{this.props.info.description || "No description here."}</p>
                <div className="card-container">
                    {this.props.info.submodules.map((elem) =>
                        this.renderCard(elem)
                    )}
                </div>
            </div>
        );
    }
}

export default Module;
