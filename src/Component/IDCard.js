import React, {useReducer, useState} from "react";

const IDCard = ({user}) => {

    const [componentTitle, setComponentTitle] = useState('ID Card');

    function reducer(state, action){
        switch (action.type) {
            case 'SET_TITLE':
                return setComponentTitle(action.payload);
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {componentTitle});

    return (
        <>
        <div className = "container">
            <h1>{componentTitle}</h1>
            <img src={user.img} alt='' className="card-img"/>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Age: {user.age}</p>
        </div>
            <br/>
            <label htmlFor="">Title</label>
            <input
                style={{width:'200px'}}
                type="text"
                placeholder="Change component title"
                name="componentTitle"
                value={componentTitle}
                onChange={(event) => dispatch({type:'SET_TITLE', payload:event.target.value})}/>
        </>
     );
};
 
export default IDCard;