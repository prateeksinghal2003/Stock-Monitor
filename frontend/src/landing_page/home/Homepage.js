import React from 'react'
import Hero from './hero'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'

import Footer from '../Footer'

function HomePage() {
    return (
        <>
       
            <Hero></Hero>
            <Awards></Awards>
              <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education> 
            <Footer></Footer>
        </>
      );
}

export default HomePage;