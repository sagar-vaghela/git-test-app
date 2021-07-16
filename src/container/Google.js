import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class Google extends Component{
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render(){
        return(
            <div>
                
                <GoogleLogin
                    clientId="213066341763-ctelhiunos14onf562hohbhignv7s42h.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}


                />
            </div>
        )
    }



}
export default Google;