
import About from './components/about/about';
import Demo from './components/demo/demo';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Testimonial from './components/testimonial/testimonial';
import { FaArrowCircleUp } from 'react-icons/fa'


import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [scrollBtn, setScrollBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setScrollBtn(true)
      }else{
        setScrollBtn(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Navbar />
      <About />
      <Testimonial />
      <Demo />
      <Footer />
      {scrollBtn && <FaArrowCircleUp  className='icon' onClick={scrollUp} />}
    </div>
  );
}

export default App;
