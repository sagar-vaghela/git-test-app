import React, { Component } from "react";
import GitHubLogin from "github-login";

class Github extends Component {
    state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
    };
  
    onSuccess = (response) => {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name.split(" ")[0],
        email: response.email,
        picture: response.picture.data.url,
      });
      console.log(response);
    };
  
  onFailure = (response) => console.error(response);
  
    render() {
      let gitContent;
  
      if (this.state.isLoggedIn) {
  
        sessionStorage.setItem("userName", this.state.name);
        sessionStorage.setItem("userPhoto", this.state.picture);
  
      } else {
        gitContent = (
          <GitHubLogin
            clientId="798d51a79b6b22f4fd7b"
            redirectUri="http://localhost:3000/login-with-github"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            className="github-button"
          />
        );
      }
      return <div>{gitContent}</div>;
    }
  }
  export default Github;