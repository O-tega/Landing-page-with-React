import React from 'react';
import './App.css';
import Landing from './pages/Hero';
import Section1 from './pages/Services';
import SectionScreen from './pages/sectionScreen';
import Blog from './pages/Blog';
import Pricing from './pages/pricing';
import Section2 from './pages/section2';
import Section3 from './pages/section3';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="">
      <Landing/>
      <Section1 />
      <Section2 />
      <SectionScreen/>
      <Section3/>
      <Pricing />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;