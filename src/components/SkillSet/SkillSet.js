import React from "react";
import Skills from "../Skills/Skills.js";

import "../../css/Component.css";

class SkillSet extends React.Component {
  render() {
    const {skills=[],tools=[],hobbies=[]}=this.props;
    return(<div className="SkillSet">
      <div className="Skill">
        <h2>Skills</h2>
        <Skills skills={skills}/>
      </div>
      <div className="Skill">
        <h2>Tools</h2>
        <Skills skills={tools}/>
      </div>
      <div className="Skill">
        <h2>Hobbies</h2>
        <Skills skills={hobbies}/>
      </div>
    </div>)
  }
}

export default SkillSet;
