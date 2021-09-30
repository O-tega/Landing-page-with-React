import React from 'react';
import './App.css';
import Landing from './pages/Hero';
import Section1 from './pages/Services';
import Section2 from './pages/section2';
import Section3 from './pages/section3';
import Pricing from './pages/pricing';
import Footer from './pages/Footer';
import Blog from './pages/Blog';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <div className="">
      <Landing/>
      <Section1 />
      <Section2 />
      <Section3/>
      <Pricing/>
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );


}


export default App;
