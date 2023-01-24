import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';
function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext);
    let avgRating = feedback.reduce((accumulator, item) => accumulator + item.rating, 0) / feedback.length;

    avgRating = avgRating.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: { isNaN(avgRating) ? 0 : avgRating}</h4>


    </div>
  )
}

export default FeedbackStats
