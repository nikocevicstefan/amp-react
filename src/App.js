import React from 'react';
import './App.css';
import Counter from './Page/Counter'
import Home from "./Page/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Counter}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
