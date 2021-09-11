import React from 'react';
import Table from '../components/table';
import Navbar from '../components/navbar';
class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
        }
    }
    componentDidMount() {
        fetch('http://18.233.10.228:45937/view')
            .then(res => res.json())
            .then(data =>this.setState({api:data},console.log(data)));

    }
    render() {
        return (
            <div style={{ color: "white" }}>
                <Navbar />
                <h1>Registered Address</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">country</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                this.state.api.map(i=><tr><Table user={i} key={i.id}/></tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default View;