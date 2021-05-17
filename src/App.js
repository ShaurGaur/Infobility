import React from "react";
import "./App.css";
import Main from "./components/main";
import {
    Layout,
    Header,
    Navigation,
    Content,
    Menu,
    MenuItem,
    ProgressBar,
} from "react-mdl";
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
            <Layout>
                <Header title="Infobility" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/modules/Courses" id="Courses">
                            Courses
                        </Link>
                        <Menu target="Courses">
                            {this.state.data.submodules.map((elem) => {
                                var url =
                                    "/modules/" +
                                    elem.title.replace(/\s+/g, "_");
                                return (
                                    <MenuItem>
                                        <Link to={url}>{elem.title}</Link>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Navigation>
                </Header>
                <Content>
                    <Main info={this.state.data} />
                </Content>
            </Layout>
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
