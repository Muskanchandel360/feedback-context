import { createContext, useState } from "react";

const FeedbackContext = createContext()


export  const FeedbackProvider = ({children}) => {
    // const [ feedbacks , setFeedbacks] = useState([
    //     {
    //     id:1 , rating: 5 , review:"good product"
    //   }
    // ])
    
    const [feedbacks , setFeedbacks] = useState([])

    const [edit , setEdit] = useState({feedback:{} , isEdit:false})

    // const [edit , setEdit] = useState({feedback: {} , isEdit: false})
    
      const addFeedback = (newFeedback) =>{
        setFeedbacks([newFeedback ,...feedbacks])
      }
      const removeFeedback = (id) => {
        setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
      }
    
      const editFeedback = (feedback) => {
        setEdit({feedback: feedback , isEdit: true})
      }
    
      const updateFeedback = (updatedFeedback) => {
        setFeedbacks(feedbacks.map((feedback) => feedback.id === updatedFeedback.id ? updatedFeedback : feedback))
        setEdit({feedback:{} , isEdit:false})
      }
    
    return (
        <FeedbackContext.Provider value = {{feedbacks , removeFeedback , addFeedback , edit , editFeedback , updateFeedback}}>{children}</FeedbackContext.Provider>

    )

}
export default FeedbackContext