import React from 'react';
import IDCard from '../Component/IDCard';
import Modal from '../Component/Modal'


class Home extends React.Component {
    state = { 
        user : {
            'name' : 'Stefan',
            'surname' : 'Nikocevic',
            'age' : 24,
            'img' : process.env.PUBLIC_URL+'/photo.png'
        }
     }
    render() {
        const user = this.state.user; 
        return ( 
            <>
            <Modal user={user}/>
            </>
         );
    }
}
 
export default Home;