import React from 'react';
//import IDCard from '../Component/IDCard';
import Modal from '../Component/Modal'
import IDCard from "../Component/IDCard";
import Dialog from "../Component/Dialog";


class Home extends React.Component {
    state = { 
        user : {
            'name' : 'Stefan',
            'surname' : 'Nikocevic',
            'age' : 24,
            'img' : process.env.PUBLIC_URL+'/photo.png'
        }
     };


    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT");
    }

    render() {
        const user = this.state.user; 
        return ( 
            <>
            <Dialog user={user}/>
            </>
         );
    }
}
 
export default Home;