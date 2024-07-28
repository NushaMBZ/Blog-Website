import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <h1>Oops! It's a dead end</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className='btn primary'>Back to Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage
