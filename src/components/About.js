import * as React from 'react';
import phone from '../imgs/4.svg';
import { Link } from 'react-router-dom';

function About(){
  return(
    <div style={{padding: 20 , margin: 0}} className="container-fluid row col-12 about-wrapper " data-aos="fade-down">
      <div className="about-img col-lg-6 col-md-6 col-sm-6 col-xm-12">
        <img src={phone} alt="About"/>
      </div>

      <div className="about-text col-lg-6 col-md-6 col-sm-6 col-xm-12">
        <div style={{padding: 20}}>
          <h3 className="h-mid" style={{textAlign: 'center', padding: 0}}> About Us  </h3>
          <p style={{textAlign: 'left'}}> Emmyhcoin is a leading crypto exchange company in Africa that specializes in Bitcoin, Ethereum, USD Coin, and USD Tether. We offer a fast range of possibilities with cryptocurrencies and deliver the best exchange rates with lightning-fast transactions. Trust us to be your go-to source for all your cryptocurrency needs. </p>
          <div>
            <Link className="app-btn-default" to="#"> Learn More </Link>
          </div>
        </div>
      </div>



    </div>
  )
}


export default About;
