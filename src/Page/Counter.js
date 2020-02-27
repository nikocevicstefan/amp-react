import React, { useEffect, useState, useReducer } from 'react';
import Button from '@material-ui/core/Button';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    function reducer(state, action){
    switch(action.type){
            case "increment":
                return {counter: state.counter + 1};
            case "decrement":
                return {counter: state.counter - 1};
            default:
                return new Error();    
        }
    }

    
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    return (
        <div className="container">
            <Button variant="contained" color="primary" onClick={()=> dispatch({type:"increment"})}>+</Button>
            <h1>{state.counter}</h1>
            <Button variant="contained" color="secondary" onClick={()=> dispatch({type:"decrement"})}>-</Button>
        </div>
    )
}

export default Counter;





// import React, { useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';

// const Counter = () => {

//     const [counter, setCounter] = useState(0);

//     function reducer()

//     const addCount = () => {setCounter(counter + 1)};
//     const subtractCount = () => {setCounter(counter - 1)};

//     return (
//         const [state, dispatch] = useReducer(reducer, {count: 0});
//         <div className="container" style={{margin:'auto', display: 'block' }}>
//             <Button variant="contained" color="primary" onClick={addCount}>+</Button>
//             <h1>{counter}</h1>
//             <Button variant="contained" color="secondary" onClick={subtractCount}>-</Button>
//         </div>
//     )
// }

// export default Counter;