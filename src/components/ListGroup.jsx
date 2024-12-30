import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../context/FeedbackContext'

const ListGroup = () => {

  const {feedbacks , removeFeedback , editFeedback} = useContext(FeedbackContext)
  return (
    <ul className='list-group my-3'>
        {feedbacks.map((feedback) => 
                <ListItem
                key = {feedback.id}
                feedback = { feedback}
                />

        
        )}
  </ul>
  )
}

export default ListGroup
