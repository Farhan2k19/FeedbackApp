import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Header from "./Components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import FeedbackForm  from"./Components/FeedbackForm"
import FeedbackStats from "./Components/FeedbackStats"
function App(){

const [feedback,setFeedback] =useState(FeedbackData)



const deleteFeedback=(id)=> {
  if(window.confirm('Are you sure?')){

    setFeedback(feedback.filter((item)=>item.id!==id))
  }
    
}
const addFeedback=(newFeedback)=>{
newFeedback.id=uuidv4()
setFeedback([newFeedback,...feedback])


}

 return(
    <>
    <Header />
    <div className="container">
   <FeedbackForm handleAdd={addFeedback}/>
   <FeedbackStats feedback={feedback} />
   <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

     </div>
     </>
 )
 
}

export default App