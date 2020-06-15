import React from "react";

class FeedBackDisplay extends React.Component {
  render() {
    const {feedbacks=[]}=this.props;
    return <div className="FeedBackDisplay">
        <h2>Feedbacks</h2>
        {
     feedbacks.map((rec,index)=>{
         return (
           	   <div>
                    Name: {rec.name}<br/>
                    Rating:  {rec.rating}<br/>
                    Description: {rec.description}<br/><br/>
               </div>
   )
 })
}
</div>
}

}

export default FeedBackDisplay;
