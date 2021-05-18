import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class ModuleCard extends Component {
    constructor(props) {
        super(props);
        this.toggleList = this.toggleList.bind(this);
        this.state = {
            expanded: false,
        };
    }

    toggleList() {
        console.log("value:", this.state);
        var other = this.state.expanded ? false : true;
        this.setState({ expanded: other });
    }

    render() {
        var url = "/modules/" + this.props.info.title.replace(/\s+/g, "_");
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.info.title}</Card.Title>
                    <Card.Text>{this.props.info.description}</Card.Text>
                    {!this.state.expanded ? (
                        <div />
                    ) : (
                        <ListGroup className="list-group-flush">
                            {this.props.info.submodules.map((elem) => {
                                console.log("submodule:", elem);
                                var new_url =
                                    "/modules/" +
                                    elem.title.replace(/\s+/g, "_");
                                return (
                                    <ListGroup.Item as="a" href={new_url}>
                                        {elem.title}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Button as="a" href={url} style={{ marginRight: 15 }}>
                        Open
                    </Button>
                    {this.props.info.submodules.length > 0 ? (
                        <Button onClick={this.toggleList}>
                            {this.state.expanded ? "Hide" : "Show"}
                            {" Preview"}
                        </Button>
                    ) : (
                        <div />
                    )}
                </Card.Footer>
            </Card>
        );
    }
}

export default ModuleCard;
