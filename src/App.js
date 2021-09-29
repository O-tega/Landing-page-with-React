import logo from './logo.svg';
import './App.css';
import Landing from '../src/pages/landing';
import Section1 from './pages/section1';
import Footer from './pages/Footer';
import Blog from './pages/CardSection';
import Pricing from './pages/pricing';
import Section2 from './pages/section2';
import Section3 from './pages/section3';

function App() {
  return (
    <div className="">
      <Landing/>
      <Section1 />
      <Section2 />
      <Section3/>
      <Pricing/>
      <Blog />
      <Footer />
    </div>
  );


}


export default App;
