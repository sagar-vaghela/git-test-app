import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component{
    responseFacebook=(response)=>{
        console.log(response);  
    }
    render(){
        return (
            <div>
                <FacebookLogin
             appId="139295038309252"
             autoLoad={true}
             fields="name,email,picture"
             // onClick={componentClicked}
             callback={this.responseFacebook} />
            </div>
        )
    }
}
export default Facebook;