import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Module from "./Module";
import "../App.scss";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedNodes: this.buildArr(this.props.info, true, null),
        };
    }

    buildArr(obj, root, parent) {
        var ans = [];

        if (obj !== undefined) {
            ans.push({ title: obj.title, body: obj, parent: parent });

            obj.submodules.forEach((elem) => {
                ans = ans.concat(this.buildArr(elem, false, obj.title));
            });
        }

        if (root) this.setState({ expandedNodes: ans });
        return ans;
    }

    render() {
        return (
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/aboutus" component={AboutUs} />
                    {this.state.expandedNodes.map((elem) => {
                        var url = "/modules/" + elem.title.replace(/\s+/g, "_");
                        return (
                            <Route
                                path={url}
                                render={() => (
                                    <Module
                                        info={elem.body}
                                        parent={elem.parent}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </div>
        );
    }
}

export default Main;
