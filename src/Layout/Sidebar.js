import React from "react";
import {Link} from "react-router-dom";
import './Sidebar.css';

const Sidebar = ({link, data}) => {
    return(
        <div className="Sidebar">
            <ul>
                {data.map(item => {
                    return (<li><Link key={item.id} className="sidebar-link" to={`${link}/${item.id}`}>{item.name}</Link></li>);
                })}
            </ul>
        </div>
    );
};

export default Sidebar;