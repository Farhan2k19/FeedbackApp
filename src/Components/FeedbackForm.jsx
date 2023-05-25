import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
function FeedbackForm() {

    const [text,setText]=useState('')
    const handleText=(e)=>{
        setText(e.target.value)


    }
  return (
    <Card>
      <form>

        <h2>
            How would you rate this service?

        </h2>
        {
            <div className="input-group">
                <input onChange={handleText}htype='text' placeholder='Write a review' value={text}/>
                <Button type='submit'>send</Button>
            </div>
        }


      </form>
    </Card>
  )
}

export default FeedbackForm
