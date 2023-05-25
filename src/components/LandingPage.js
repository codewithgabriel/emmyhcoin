import * as React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Services from './Services';
import Specialities from './Specialities';
import About from './About';

function LandingPage(){
  return(
    <div>
      <Navbar />
      <Banner />
      <Specialities />
      <About />
      <Services />

    </div>
  )
}


export default LandingPage;
