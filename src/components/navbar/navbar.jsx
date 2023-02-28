import React, { useState } from 'react'
import logo from '../../assets/exelogo.png'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import './navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const handleClick =  () => setOpen(!open)
  const close = () => setOpen(false)
  return (
    <div className='navbar' id='home'>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <ul className={open ? 'items active' : 'items'}>
            <li>
              <a 
              onClick={close} 
              href="#home">
                Home
              </a>
            </li>

            <li>
              <a 
              onClick={close} 
              href="#about">
                About
              </a>
            </li>

            <li>
              <a 
              onClick={close} 
              href="#testimonial">
                Testimonials
              </a>
            </li>

            <li>
              <a 
              onClick={close} 
              href="#demo">
                Demo
              </a>
            </li>

            <li>
              <a 
              onClick={close} 
              href="#footer">
                Footer
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
           {open ? <AiOutlineClose/> : <AiOutlineMenu />}
          </div>
        </nav>

        <div className="content">
          <p>Call Us</p>
          <p>1-800-190-3425</p>
          <p>Because Money</p>
          <p>Doesn't come with instructions.</p>
          <button>FREE CONSULTATION</button>
        </div>
    </div>
  )
}

export default Navbar