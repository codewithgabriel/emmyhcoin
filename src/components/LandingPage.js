import * as React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Services from './Services';
import Specialities from './Specialities';
import About from './About';
import Stepper  from './Stepper';
import NavBarSmall from './NavbarSmall';
import Footer from './Footer';


function LandingPage(){
  return(
    <div>
      <NavBarSmall/>
      <Navbar />
      <Banner />
      <Specialities />
      <About />
      <Services />
      <Stepper/>
      <Footer />

    </div>
  )
}


export default LandingPage;
