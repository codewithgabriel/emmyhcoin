import './App.css';
import './form.css';
import './form.css.map';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap..js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  {BrowserRouter , Route , Routes } from 'react-router-dom';
import  React, {useState  , useEffect } from 'react';
import ActivityIndicator from './components/ActivityIndicator';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUsMore  from './components/AboutUsMore';
import NotFound from './components/NotFound';




function App() {
  const [component ,  setComponent ] = useState(<ActivityIndicator />);
  const [loading , setLoading] = useState(true);

  AOS.init(
    {
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }
);

  useEffect(function() {
    document.onreadystatechange = ()=>{
      if (document.readyState !== "complete") {
        setComponent(<ActivityIndicator/>);
      }else {
        setComponent(<LandingPage />);
      }
    }
  } , [])

  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element= {component} />
          <Route path="/login" element= {<Login />} />
          <Route path="/signup" element= {<Signup />} />
          <Route path="/about-us" element= {<AboutUsMore />} />
          <Route path="*" element= {<NotFound />} />


      </Routes>
    </BrowserRouter>

  );
}


export default App;
