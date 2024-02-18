import { useState } from 'react'
import logo from "./assets/logo.png";
import './App.css'
import HeroSection from './components/hero/hero'
import Service from './components/service/service'
import Contact from './components/contact/contact'
import Blogs from './components/blogs/blogs'
import Invest from './components/invest/invest'
import Testimonial from './components/testimonial/testimonial'
import Footer from './components/footer/footer';
import { PiPiggyBankFill } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { Fade } from 'react-awesome-reveal';

function App() {
  const [collapse, setCollapse] = useState(true)

  return (
    <div className='App'>
      <Fade triggerOnce direction="down">
        <div className="header flex-a-cen-j-spbet">
          <img src={logo} alt="" height={"70vh"} /> 
          <div className={`nav-items ${collapse? "collapsed": "non-collapsed"} flex font-roboto`}>
            <div onClick={()=>setCollapse(!collapse)} className="close"><IoCloseSharp /></div>
            <div className="item">company</div>
            <div className="item">investors</div>
            <div className="item">products</div>
            <div className="item">journal</div>
            <div className="item">reach us</div>
          </div>

          <div onClick={()=>setCollapse(!collapse)} className="nav-responsive gold-color font-36">
            <PiPiggyBankFill />
          </div>
        </div>
      </Fade>

      <HeroSection />
      <Invest />
      <Blogs />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
