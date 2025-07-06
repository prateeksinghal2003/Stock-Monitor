import React from 'react'
import Hero from './hero'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'

import Footer from '../Footer'
import {Link} from "react-router-dom"
function HomePage() {
    return (
        <>
     
            <Hero></Hero>
              <section class="intro-icons">
               <h2 class="homepageheading">Explore Varsity</h2>
<div class="row">
  <div class="three columns" >
  <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src={"prateek.jpeg"} alt="img"/>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>

   <div class="three columns" >
      <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg"></img>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>

  <div class="three columns" >
     <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg"></img>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>

  <div class="three columns" >
    <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg"></img>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>

   <div class="three columns" >
    <Link className="item" to="/" style={{ backgroundColor: "#77B4F2" }}>
    <span>
        <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg"></img>
        <strong>Home page</strong>
      </span>
  </Link>
  </div>





</div>

              </section>
           
          
        </>
      );
}

export default HomePage;