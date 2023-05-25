import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'

function AboutPage() {
  return (
   
    <Card className='about' >
        <h1>
            About this project
        </h1>
        <p>This is a React App</p>
        <p>
            Version:1.2.0
        </p>
        <p>
            <Link to='/'>Back Home</Link>
        </p>
    </Card>
  ) 
}

export default AboutPage
