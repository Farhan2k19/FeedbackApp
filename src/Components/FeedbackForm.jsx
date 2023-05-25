import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm({handleAdd}) {

    const [text,setText]=useState('')
    const [btnD,btnDSet]=useState(true)
    const[rating,setRating]=useState(10)
    const [msg,setM]=useState('')
    const handleText=(e)=>{

        if(text==''){
            btnDSet(true)
            setM(null)
        }
        else if(text!==''&& text.trim().length<=10){
            setM("Text must be at least 10 char")
            btnDSet(true)
        }
        else{
            setM(null)
            btnDSet(false)
        }
        setText(e.target.value)


    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>

        <h2>
            How would you rate this service?

        </h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>

        {
            <div className="input-group">
                <input onChange={handleText}htype='text' placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnD}>send</Button>
            </div>
        }

      {msg &&  <div className="message">{msg}</div>
}
              </form>
    </Card>
  )
}

export default FeedbackForm
