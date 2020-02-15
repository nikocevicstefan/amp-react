import React from 'react';
import IDCard from '../Component/IDCard';

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
            <h1>ID Card</h1>
            <IDCard user={user}/>
            </>
         );
    }
}
 
export default Home;