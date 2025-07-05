import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/Homepage';
// import Signup from "./landing_page/signup/Signup";
 import AboutPage from "./landing_page/about/AboutPage";
 import ProductPage from "./landing_page/products/ProductsPage";
 import PricingPage from "./landing_page/pricing/PricingPage";
 import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Videomod1 from './landing_page/products/videomod1';
import Videomod2 from './landing_page/products/videomod2';
import Videomod3 from './landing_page/products/videomod3';
import Videomod4 from './landing_page/products/videomod4';
import Videomod5 from './landing_page/products/videomod5';
import Videomod6 from './landing_page/products/videomod6';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/videos" element={<ProductPage />} />
             <Route path="/pricing" element={<PricingPage />} />
              <Route path="/support" element={<SupportPage />} />
               <Route path="/videos/video-mod-1" element={<Videomod1 />} />
                 <Route path="/videos/video-mod-2" element={<Videomod2 />} />
                   <Route path="/videos/video-mod-3" element={<Videomod3 />} />
                     <Route path="/videos/video-mod-4" element={<Videomod4 />} />
                       <Route path="/videos/video-mod-5" element={<Videomod5 />} />
                         <Route path="/videos/video-mod-6" element={<Videomod6 />} />
        {/* * route  is hit when no route matches */}
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
