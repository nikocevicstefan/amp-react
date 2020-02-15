import React from "react";

const IDCard = ({user}) => {
    return ( 
        <>
        <div className = "container">
            <img src={user.img} alt=''/>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Age: {user.age}</p>
        </div>
        </>
     );
}
 
export default IDCard;