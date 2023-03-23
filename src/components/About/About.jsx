import React from 'react'
import HomeContent from '../Home/HomeContent/HomeContent'
import Title from "../commons/Title/Title";
import './About.css'
import AboutIcons from './AboutIcons'
import Enquire from '../commons/Enquire/Enquire';

const About = () => {
  return (
    <div >
      <br></br><Title title="About Us"/>
      <div className='container about-main-container'>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/7414211/pexels-photo-7414211.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR VISION" content="To deliver excellence and leadership in all diamond value chain and manufacturing aspects. This will keep responsible, sustainable sourcing initiatives as the benchmark and the core focus of all our operations."/>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR MISSION" content="Teamwork, passion, and innovation will help us achieve excellence in all operations and activities through sustainable sourcing."/>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR PHILOSOPHY" content="When it comes to manufacturing diamonds that reflect our taste for exclusive diamonds, we focus on rarity, style, and quality. This fusion creates brilliant, unique Goldiama diamonds that are highly coveted by investors, designers, and collectors."/>
       
      </div>
      <br></br><br></br><Title title="Our Values"/>
      <br></br><AboutIcons/><br></br>
      <br></br><br></br><Enquire/><br></br><br></br>

    </div>
  )
}

export default About