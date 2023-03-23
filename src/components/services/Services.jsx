import React from 'react'
import Title from '../commons/Title/Title'
import HomeContent from '../Home/HomeContent/HomeContent'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import Enquire from '../commons/Enquire/Enquire';
const Services = () => {
  return (
    <><div>
      <Title title="Our Services" />
      <HomeContent image={img1} heading="IMPORT-EXPORT" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." />
      <br></br>
      <HomeContent image={img2} heading="CUTTING DIAMONDS" content="Diamond cutting is the practice of shaping a diamond from a rough stone into a faceted gem. Cutting diamonds requires specialized knowledge, tools, equipment, and techniques because of its extreme difficulty." />
      <br></br>
      <HomeContent image={img3} heading="DIAMOND-DESIGN" content="Diamond design is developed on the basis of pointed draft principle. It is build-up by the combination of vertical and horizontal zig-zag weave." />
      <br></br>
      <br></br>
    </div>
    <Enquire/>
    <br></br>
    </>
  )
}

export default Services