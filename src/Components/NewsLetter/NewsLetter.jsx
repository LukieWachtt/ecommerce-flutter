import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" name="" id="" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter