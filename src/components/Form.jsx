import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Form = () => {

  const {addFeedback , edit ,updateFeedback} = useContext(FeedbackContext)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

useEffect(() => {
  setRating(edit.feedback.rating)
  setReview(edit.feedback.review)
},[edit])


    const handleSubmit = (e) => {
        e.preventDefault()
        edit.isEdit? updateFeedback ({id: edit.feedback.id, review, rating}) : addFeedback({id:crypto.randomUUID() , rating , review})

        setRating(1)
        setReview("")
    }
  return (
    <form className='my-4' onSubmit={handleSubmit}>
    <select className='form-select'
              onChange={(e) => setRating(e.target.value)}

    value={rating}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <textarea           className="form-control my-3"
    placeholder='Enter Review'
    onChange={(e) => setReview(e.target.value)}

    value={review}
    ></textarea>
            <button className="my-2 btn btn-success w-100">Submit Review</button>


  </form>
  )
}

export default Form
