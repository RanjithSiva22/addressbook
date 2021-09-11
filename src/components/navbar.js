import React from 'react'

import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    fileHandler = () => {
        fetch('http://18.233.10.228:45937/download')
            .then((response) => response.blob())
            .then((blob) => {

                var today = new Date();
                var year = today.getFullYear();
                var mes = today.getMonth() + 1;
                var dia = today.getDate();
                var fecha = dia + "-" + mes + "-" + year;
                const fileName = "address_" + fecha + ".xlsx";

                // 2. Create blob link to download
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                // 3. Append to html page
                document.body.appendChild(link);
                // 4. Force download
                link.click();
                // 5. Clean up and remove the link
                link.parentNode.removeChild(link);
                // .then(data => this.setState({api:data},console.log(data)));
            })
    }
    logoutHandler=()=>{
        this.props.history.push('/');

    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/home">ADDRESS BOOK</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/home">Home</a></li>
                            <li><a href="/view">View</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <button className="btn  navbar-btn" style={{backgroundColor:'green',color:'white'}} onClick={this.fileHandler}>Export AddressBook</button>
                        <button className="btn  navbar-btn " style={{backgroundColor:'red',color:'white',marginLeft:'10vw'}} onClick={this.logoutHandler}>Logout</button>

                    </div>
                </nav>
            </div>

        );
    }
}

export default withRouter(Navbar);
