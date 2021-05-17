import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ADHD from "./ADHD";
import Autism from "./Autism";
import Advocacy from "./Advocacy";
import Fun from "./Fun";
import Module from "./Module";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedNodes: this.buildArr(this.props.info, true),
        };
    }

    buildArr(obj, root) {
        var ans = [];

        if (obj != undefined) {
            ans.push({ title: obj.title, body: obj });

            obj.submodules.forEach((elem) => {
                ans = ans.concat(this.buildArr(elem, false));
            });
        }

        console.log("Ans:", ans);
        if (root) this.setState({ expandedNodes: ans });
        return ans;
    }

    componentDidMount() {
        // window.addEventListener("load", this.buildArr(this.props.info, true));
        // this.setState({ expandedNodes: arr });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/adhd" component={ADHD} />
                <Route path="/autism" component={Autism} />
                <Route path="/advocacy" component={Advocacy} />
                <Route path="/fun" component={Fun} />
                {this.state.expandedNodes.map((elem) => {
                    var url = "/modules/" + elem.title.replace(/\s+/g, "_");
                    return (
                        <Route
                            path={url}
                            render={() => <Module info={elem.body} />}
                        />
                    );
                })}
            </Switch>
        );
    }
}

export default Main;
