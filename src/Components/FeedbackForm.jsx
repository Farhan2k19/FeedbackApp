import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
function FeedbackForm() {

    const [text,setText]=useState('')
    const [btnD,btnDSet]=useState(true)
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
  return (
    <Card>
      <form>

        <h2>
            How would you rate this service?

        </h2>
        {}
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
