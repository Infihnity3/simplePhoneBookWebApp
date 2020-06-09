import React, { Component } from 'react'; //enable JSX

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
//JSX (rendered version of html)
import Home from "./Home"
import InsertDetails from "./InsertDetails"

class App extends Component {
    render() {
        return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/InsertDetails" component={InsertDetails}/>
            </Switch>
        </Router>
            )    
        }
}

export default App