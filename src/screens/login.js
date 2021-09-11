import React from 'react'

import GoogleLogin from 'react-google-login'
import { withRouter } from 'react-router-dom';


 class Login extends React.Component{
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        if(response.profileObj){
            this.props.history.push('/home');
            localStorage.setItem('user', JSON.stringify(response.profileObj));
        }
        else{
            alert("Invalid Mail");
        }
    }
    render(){
        return(
            // UsIi1blsZwZr099yIb4Vbezi
            <div style={{marginTop:"20%",color:"blue"}}>
                <h1>SIGN IN  to your google account</h1><br></br>
                <GoogleLogin
                clientId="748705778600-vph8d2j9af96hogglgkdp16mup72o2jo.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>

        );
    }
}

export default withRouter(Login);
