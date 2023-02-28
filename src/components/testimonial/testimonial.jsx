import React from 'react'
import user1 from '../../assets/user1.png' 
import user2 from '../../assets/user2.png' 
import user3 from '../../assets/user3.png' 

import './testimonial.css'

function Testimonial() {
  return (
    <div className='testimonial' id='testimonial'>
        <h2>Testimonials</h2>
      <div className="content">
        <div className="cols">
          <img src={user1} alt="" />
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Suscipit, voluptatibus maxime excepturi dolore nam ipsum
             reprehenderit dolorem pariatur fuga repudiandae, molestias
             ipsa unde similique Excepturi molestias.
          </small>
          <h4>John R.G</h4>
          <p>Director Creator</p>
        </div>

        <div className="cols">
          <img src={user2} alt="" />
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Suscipit, voluptatibus maxime excepturi dolore nam ipsum
             reprehenderit dolorem pariatur fuga repudiandae, molestias
             ipsa unde similique Excepturi molestias.
          </small>
          <h4>David D.S</h4>
          <p>Senior Director</p>
        </div>

        <div className="cols">
          <img src={user3} alt="" />
          <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Suscipit, voluptatibus maxime excepturi dolore nam ipsum
             reprehenderit dolorem pariatur fuga repudiandae, molestias
             ipsa unde similique Excepturi molestias.
          </small>
          <h4>Isaac Joe</h4>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial