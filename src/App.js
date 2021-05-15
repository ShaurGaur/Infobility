import React from "react";
import "./App.css";
import Main from "./components/main";
import {
    Layout,
    Header,
    Drawer,
    Navigation,
    Content,
    Menu,
    MenuItem,
} from "react-mdl";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Infobility" scroll>
                    {/* <Link to="/">
                        <h3>Infobility</h3>
                    </Link> */}
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/" id="Courses">
                            Courses
                        </Link>
                        <Menu target="Courses">
                            <MenuItem>
                                <Link to="/adhd">ADHD</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/autism">Autism</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/advocacy">Advocacy</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/fun">Fun</Link>
                            </MenuItem>
                        </Menu>
                    </Navigation>
                </Header>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
