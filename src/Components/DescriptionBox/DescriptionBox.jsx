import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ratione laudantium, iste quod odit quisquam neque magnam praesentium!
          Harum sapiente libero magni minima id dolore saepe voluptates culpa molestias
          explicabo! Ea.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ratione laudantium, iste quod odit quisquam neque magnam praesentium!
          Harum sapiente libero magni minima id dolore saepe voluptates culpa molestias
          explicabo! Ea.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
