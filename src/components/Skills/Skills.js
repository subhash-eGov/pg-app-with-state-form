import React from "react";

import "../../css/Component.css";

class Skills extends React.Component {
  render() {
    const {skills} = this.props;

    return(
      skills.map((skill)=>{
        return <div>
                {skill}<br/>
              </div>
        ;
      })
    )
  }
}

export default Skills;
