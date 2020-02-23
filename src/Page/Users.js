import React, {Component} from 'react';
import Sidebar from "../Layout/Sidebar";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import User from "../Component/User";
import './Users.css';

class Users extends Component {
    state={
        users: [
            {
                id: 1,
                name:"Stefan",
                age: 24
            },
            {
                id: 2,
                name: "Miljan",
                age: 23
            }
        ]
    };
    render() {
        const {match} = this.props;
        const {users} = this.state;
        return (
            <div className="Users">
                <ul style={{backgroundColor:'rgba(2,0,36,1)'}}>
                    <Sidebar link={match.url} data={users} className="users-sidebar"/>
                </ul>
                <div className="container">
                <h1>Users Page</h1>
                <Route path={`${match.path}/:id`} render={(props) => <User data={this.state.users} {...props}/>}/>
                {console.log(match.params.id)}
                </div>
            </div>
        );
    }
}

export default Users;