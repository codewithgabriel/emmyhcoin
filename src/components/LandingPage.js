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
  function toServices(event){
    event.preventDefault();
    let elem = document.querySelector(".special-wrapper")
    elem.scrollIntoView();
  }

  function toAbout(event){
    event.preventDefault();
    try {
      let elem = document.querySelector(".about-wrapper")
      if (elem == null){
        throw Error;
      }
      elem.scrollIntoView();

    }catch(e){
      console.log(e.message);
    }
    
  }

  return(
    <div>
      <NavBarSmall toAbout={toAbout} toServices={toServices}/>
      <Navbar toAbout={toAbout} toServices={toServices}/>
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
