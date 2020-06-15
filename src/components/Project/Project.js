import React from "react";

import "../../css/Component.css";

class Project extends React.Component{
  render() {
    const {projectInfo} = this.props;

    return(
      projectInfo.map((info, infoIndex)=>{
        return <div>
                {info.count}<br/>
                {info.type}
              </div>
        ;
      })
    );
  }
}

export default Project;
