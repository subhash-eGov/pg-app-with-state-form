import React from "react";

import "./FeedBack.css";

import FeedBackForm from "./components/FeedBackForm.js";
import FeedBackDisplay from "./components/FeedBackDisplay.js"

class FeedBack extends React.Component {

  render() {
    const {feedbacks=[], feedback={}, handleChangeName, handleChangeRating, handleChangeDescription, addFeedback} = this.props;
    return (
      <div className="FeedBack">
        <FeedBackForm handleChangeName={handleChangeName} handleChangeRating={handleChangeRating}
           handleChangeDescription={handleChangeDescription} addFeedback={addFeedback} feedback={feedback}/>
        <FeedBackDisplay feedbacks={feedbacks}/>
      </div>
    );
  }
}

export default FeedBack;
