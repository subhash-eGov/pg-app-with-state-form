import React from "react";

import "../../css/Component.css";

class Profile extends React.Component{
  render() {
    return(<div className="Profile">
      <div className="Profile-Image-Div">
        <img src={require("../../images/facebook.png")} className="Profile-Image"/>facebook.com/subhashderangula
      </div>
      <div className="Profile-Image-Div">
        <img src={require("../../images/linkedin.png")} className="Profile-Image"/>linkedin.com/subhashderangula
      </div>
      </div>);
  }
}

export default Profile;
