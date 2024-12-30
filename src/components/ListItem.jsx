import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

const ListItem = ({ feedback }) => {
   const {removeFeedback , editFeedback} = useContext(FeedbackContext)
  return (
    <li className='list-group-item shadow-lg'>
      <h1>Rating: {feedback.rating}</h1>
      <p>Review: {feedback.review}</p>
      <span className='float-end'>
        <button className="btn btn-sm btn-warning rounded-0" onClick={() => editFeedback(feedback)}>Edit</button>
        <button className="btn btn-sm btn-danger rounded-0 mx-2" onClick={() => removeFeedback(feedback.id)}>Delete</button>
      </span>
    </li>
  )
}

export default ListItem;
