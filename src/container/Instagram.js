import React, { Component } from "react";
import InstagramLogin from 'react-instagram-login';

class Instagram extends Component{
    responseInstagram =(response)=> {
        console.log(response);
    }
    render(){
        return (
            <div>
                <InstagramLogin
                clientId="497169141577688"
                buttonText="Login With Instagram"
                onSuccess={this.responseInstagram}
                onFailure={this.responseInstagram}
              />
            </div>
        )
    }
}
export default Instagram;