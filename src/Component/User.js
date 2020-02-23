import React, {Component} from 'react';
import avatar from '../img/avatar.png';
import './User.css';

const User = ({match, data}) => {
    const user = data.find(user => user.id == match.params.id);
    return (
        <div className="User">
            <h2>{user.name}</h2>
            <img src={avatar} alt="user avatar"/>
            <p>Age:{user.age}</p>
        </div>
    );
};

export default User;