import React from 'react';
import Navbar from '../components/navbar'
class About extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>

                <div style={{color:"white"}}>
                <h1>STACK USED</h1>
                <h3>React , Node , Fastify , MongoDB</h3>
                
            </div>
            <div style={{color:"white",marginTop:"20%"}}>
                <h1>Done By</h1>
                <h3>Ranjith Kumar S</h3>
                
            </div>
            </div>


        );
    }
}

export default About;