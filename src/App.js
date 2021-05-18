import React from "react";
import "./App.css";
import "./App.scss";
import Main from "./components/main";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import SplitButton from "react-bootstrap/SplitButton";
import { Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        var data_obj = require("./modules.json");
        console.log(data_obj);
        this.setState({ data: data_obj });
    }

    renderData() {
        return (
            <div>
                <Navbar bg="primary" variant="light" fixed="top">
                    <Navbar.Brand href="/">
                        <span
                            class="material-icons d-inline-block align-top"
                            style={{ fontSize: 27 }}
                        >
                            face
                        </span>{" "}
                        Infobility
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav variant="pills">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <NavDropdown
                                alignRight
                                title="Courses"
                                id="course-dropdown"
                            >
                                {this.state.data.submodules.map((elem) => {
                                    var url =
                                        "/modules/" +
                                        elem.title.replace(/\s+/g, "_");
                                    return (
                                        <NavDropdown.Item href={url}>
                                            {elem.title}
                                        </NavDropdown.Item>
                                    );
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Main info={this.state.data} />
            </div>
        );
    }

    renderProgress = () => <ProgressBar />;

    render() {
        return (
            <div className="demo-big-content">
                {this.state.data != null
                    ? this.renderData()
                    : this.renderProgress()}
            </div>
        );
    }
}

export default App;
