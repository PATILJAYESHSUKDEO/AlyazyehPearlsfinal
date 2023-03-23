import React from 'react'
import Title from '../commons/Title/Title'
import HomeContent from './HomeContent/HomeContent'
// import img1 from './Home-Images/img1.avif';
// import img2 from './Home-Images/img2.avif'
// import img3 from './Home-Images/img3.avif'
// import img4 from './Home-Images/img4.avif'
// import img5 from './Home-Images/img5.avif';
// import img6 from './Home-Images/img6.avif';
// import img7 from './Home-Images/img7.avif';
import ThirdDiv from './ThirdDiv/ThirdDiv';
import Details from './Details Div/Details';
import TripleImage from './TripleImage/TripleImage'
import Enquire from '../commons/Enquire/Enquire';
const Home = () => {
  return (
    <><div>
      <br></br>
      <Title title="WELCOME" />
      <HomeContent heading="WHO WE ARE" content="A leading diamond trading & sourcing company in the GCC region, ALYAZYEH PEARLS offers the best diamond prices & specialized diamond services." image={"https://images.pexels.com/photos/10475793/pexels-photo-10475793.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <HomeContent style={{ flexDirection: 'row-reverse' }} heading="WHY INVEST IN DIAMONDS" content="Diamonds are not only valuable assets, but they are a haven for investment with promising lucrative returns. There is no doubt that diamonds are more stable and profitable than other assets." image={"https://images.pexels.com/photos/10475790/pexels-photo-10475790.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <HomeContent heading="LATEST NEWS" content="ALYAZYEH PEARLS continues to strengthen its network and facilitate clients across the globe in the value chain. Visit our website to see the latest updates." image={"https://images.pexels.com/photos/10475791/pexels-photo-10475791.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <ThirdDiv title="UNSURPASSED FINE NATURAL DIAMONDS" content="Fina Natural diamonds are a better investment, carry impeccable quality, and will truly last forever. Cheap diamonds grown in a sterile lab just can’t get us up. A Natural Diamond has a rarity factor.  Generally speaking, a natural diamond will hold its value better than a lab grown diamond because there is a finite supply. The basic laws of supply and demand maintain that as demand increases, especially with limited supply, value goes up" />
      <br></br>
      <br></br>
      <br></br>
      <Details title="ALYAZYEH PEARLS OUR GALLERY" content="Discover the state-of-the-art diamond manufacturing processes at ALYAZYEH PEARLS." image={"https://images.pexels.com/photos/11504787/pexels-photo-11504787.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br>
      <ThirdDiv title="INVESTMENT GRADE FANCY DIAMONDS" content="Investment-Grade Fancy Colored Diamonds are based on the highest quality cut, clarity, carat size, and exact color. Not all Fancy Colored Diamonds fit into the Investment-Grade category. Colored Diamonds are exceptionally rare. For every 1 carat of colored diamonds, 10,000 carats of white diamonds are mined. Of the production of color diamonds mined, less than 1% of color diamond production would be considered investment grade." />
      <br></br>
      <br></br>
      <br></br>
      <Details title="ALYAZYEH PEARLS OUR GALLERY" content="Discover the state-of-the-art diamond manufacturing processes at ALYAZYEH PEARLS." image={"https://images.pexels.com/photos/15137469/pexels-photo-15137469.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br><br></br><br></br>
      <TripleImage image1={"https://images.pexels.com/photos/8398839/pexels-photo-8398839.jpeg?auto=compress&cs=tinysrgb&w=1600"} image2={"https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=1600"} image3={"https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br><br></br><br></br>
    </div><Enquire /></>
  )
}

export default Home