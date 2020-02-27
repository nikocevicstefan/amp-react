import React from 'react';
import './App.css';
import Counter from './Page/Counter'
import About from "./Page/About";
import Users from "./Page/Users";
import Home from "./Page/Home";
import Navbar from "./Layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <>
            <Navbar />
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="/counter" component={Counter}/>
        </>
    );
}

export default App;
