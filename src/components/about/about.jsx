import React from 'react'
import john from '../../assets/john-doe.png'

import './about.css'

function About() {
  return (
    <div className='about' id='about'>
      <div className="content">
        <div className="col-1">
            <img src={john} alt="" />
        </div>

        <div className="col-2">
            <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Suscipit, voluptatibus maxime excepturi dolore nam ipsum
               reprehenderit dolorem pariatur fuga repudiandae, molestias
               ipsa unde similique. Excepturi molestias animi officia autem ut.
            </p>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Suscipit, voluptatibus maxime excepturi dolore nam ipsum
               reprehenderit dolorem pariatur fuga repudiandae.
            </h3>
            <button>Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default About