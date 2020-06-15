import React from "react";

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import "../FeedBack.css";

class FeedBackForm extends React.Component {

  render() {
    const {feedback={}, handleChangeName, handleChangeRating, handleChangeDescription, addFeedback} = this.props;

    return (<div className="FeedBackForm">
      <h2>Feedback Form</h2>
      <form>
        <InputLabel>Rating</InputLabel>
        <Select onChange={(e)=>{
          console.log(e.target.value);
          handleChangeRating(e.target.value);
        }} value = {feedback.rating}>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
        </Select>
        <br/>
        <br/>
        <TextField onChange={(e)=>{
          console.log(e.target.value);
          handleChangeName(e.target.value);
        }} value={feedback.name} id="outlined-basic" label="Name" variant="outlined" /><br/><br/>
        <TextareaAutosize onChange={(e)=>{
          console.log(e.target.value);
          handleChangeDescription(e.target.value);
        } } value={feedback.description} aria-label="empty textarea" placeholder="Description" /><br/>
        <Button onClick={(e)=> {
          addFeedback(feedback);
        }} variant="contained" color="primary">Submit</Button><br/><br/>
      </form>
    </div>);
  }
}

export default FeedBackForm;
