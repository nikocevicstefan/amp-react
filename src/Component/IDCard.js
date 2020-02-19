import React from "react";

const IDCard = ({user}) => {
    return ( 
        <>
        <div className = "container">
            <h1>ID Card</h1>
            <img src={user.img} alt='' className="card-img"/>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Age: {user.age}</p>
        </div>
        </>
     );
};
 
export default IDCard;