import React from "react";
import {Link} from "react-router-dom";
import ArrowLeft from "@material-ui/icons/ArrowLeft";

class Projects extends React.Component {
  render() {
    return (
        <div>
          <Link to="/"><ArrowLeft/></Link><br/>
          <iframe src="https://kurnool-uat.egovernments.org/" width="100%" height="700px">
          </iframe>
        </div>
    );
  }
}

export default Projects;
