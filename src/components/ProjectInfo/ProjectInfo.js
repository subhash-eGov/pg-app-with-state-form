import React from "react";
import Project from "../Project/Project.js";
import "../../css/Component.css";

class ProjectInfo extends React.Component{
  render() {
    const {projectInfos=[]}=this.props;
    const filteredProjects = projectInfos.filter((projectInfo)=>{return projectInfo.type==='Projects'});
    const filteredMentees = projectInfos.filter((projectInfo)=>{return projectInfo.type==='Mentees'});
    const filteredPublications = projectInfos.filter((projectInfo)=>{return projectInfo.type==='Publications'});
    const filteredCertificates = projectInfos.filter((projectInfo)=>{return projectInfo.type==='Certificates'});

    return(<div className="Project">
      <div className="Project-Details">
        <Project projectInfo={filteredProjects}/>
      </div>
      <div className="Project-Details">
        <Project projectInfo={filteredMentees}/>
      </div>
      <div className="Project-Details">
        <Project projectInfo={filteredPublications}/>
      </div>
      <div className="Project-Details">
        <Project projectInfo={filteredCertificates}/>
      </div>

    </div>)
  }
}

export default ProjectInfo;
