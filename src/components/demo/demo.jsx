import React from 'react'

import './demo.css'

function Demo() {
  return (
    <div className='demo' id='demo'>
      <div className="content">
        <div className="col-1">
          <p>More Than 100 Financial Planners</p>
          <h1>One Philosophy</h1>
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Suscipit, voluptatibus maxime excepturi dolore nam ipsum
            reprehenderit dolorem pariatur fuga repudiandae, molestias
            ipsa unde similique? Excepturi molestias.
          </small>
          <button>GET YOUR FREE FINANCIAL ANALYSIS</button>
        </div>

        <div className="col-2">
        <iframe 
         width="560" 
         height="315" 
         src="https://www.youtube.com/embed/84YfHc19-Jw" 
         title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen>
        </iframe>
        </div>
      </div>
    </div>
  )
}

export default Demo