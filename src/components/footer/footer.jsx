import React from 'react'

import './footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Demo</li>
      </ul>

      <div className="copyright">
        <p>2022 Execute Inc. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer