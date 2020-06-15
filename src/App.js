import React from 'react';
import './App.css';
import Name from './components/About/Name.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Profile from './components/Profile/Profile.js';
import ProjectInfo from './components/ProjectInfo/ProjectInfo.js';
import SkillSet from './components/SkillSet/SkillSet.js';
import FeedBack from './components/FeedBack/FeedBack.js'

const initialFeedback = {
    name: "",
    description: "",
    rating: ""
}

class App extends React.Component {
  state = {
    projectInfos: [
      {
        type : "Projects",
        count : "5+"
      },
      {
        type : "Mentees",
        count : "1+"
      },
      {
        type : "Publications",
        count : "0"
      },
      {
        type : "Certificates",
        count : "2"
      }
    ],
    experiences: [
      "Working as Team Lead (Java Developer) in eGovernments Foundation, Bangalore from Aug 2018 to till date",
      "Worked as Module Lead (Java Developer) in Happiest Minds Technologies Private Limited, Bangalore from Jan 2018 to Aug 2018",
      "Worked as Team Lead (Java Developer) in eGovernments Foundation, Bangalore from May 2011 to Dec 2"
    ],
    skills: [
      "Java",
      "Struts1, Struts2 & Spring",
      "Hibernate",
      "Eclipse, Intellij",
      "Oracle, Postgres",
      "Windows, Linux"
    ],
    tools: [
      "Log4j",
      "SVN",
      "ANT",
      "MAVE"
    ],
    hobbies: [
      "Music",
      "Cricket"
    ],
    education: [
      "MCA from JNTU, Anantapur, AP"
    ],
    languages: [
      "English",
      "Telugu",
      "Kannada"
    ],
    feedbacks: [],
    feedback: initialFeedback
  };

  handleChangeRating=(value)=> {
    const {feedback} = this.state;
    this.setState({
      feedback: {
        ...feedback,
        rating : value
      }
    });
  };

  handleChangeName=(value)=> {
    const {feedback} = this.state;
    this.setState({
      feedback: {
        ...feedback,
        name: value
      }
    });
  };

  handleChangeDescription=(value)=> {
    const {feedback} = this.state;
    this.setState({
      feedback: {
        ...feedback,
        description: value
      }
    });
  };

  addFeedback=(feedback={})=> {
    if (feedback.name && feedback.rating && feedback.description) {
      let {feedbacks=[]} = this.state;
      feedbacks.push(feedback);
      this.setState({
        feedbacks,
        feedback: initialFeedback,
      });
    } else {
      alert('Please provide required info');
    }
  };

  render() {
    const {projectInfos=[], experiences=[], skills=[], tools=[], hobbies=[], education=[], languages=[], feedback={}, feedbacks=[]}=this.state;
    const {handleChangeName, handleChangeRating, handleChangeDescription, addFeedback} = this;
    return (
      <div className="App">
        <div className="Header">
          <Name/>
          <Profile/>
        </div>
        <ProjectInfo projectInfos={projectInfos}/>
        <About/>
        <div className="Header">
          <div className="Experience">
            <h2>Experiences</h2>
            <Skills skills={experiences}/>
          </div>
          <div className="Experience">
            <h2>Education</h2>
            <Skills skills={education}/>
            <h2>Lanuages</h2>
            <Skills skills={languages}/>
          </div>
        </div>
        <SkillSet skills={skills} tools={tools} hobbies={hobbies}/>
        <FeedBack handleChangeName={handleChangeName} handleChangeRating={handleChangeRating} handleChangeDescription={handleChangeDescription} addFeedback={addFeedback} feedback={feedback} feedbacks={feedbacks}/>
      </div>
    );
  }
}

export default App;
