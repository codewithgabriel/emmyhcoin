import * as React from 'react';
import banner from '../imgs/Pic.png';
import { Link } from 'react-router-dom';

function Banner (){
  return(
    <div style={{padding: 0 ,margin: 0}} className="container-fluid banner-parent col-12" >
        <div className="container-fluid row app-banner col-12" style={{margin: 0}}>
          <div className="banner-text col-lg-6 col-md-6 col-sm-12 col-xm-12" data-aos="fade-up">
              <div>
                <h1 className="h-big"> Trade Digital Asset With Instant Payment</h1>
              </div>
              <div>
                <p style={{fontSize: '1.5em'}}> Welcome to the best platform with the most secured channel to sell your cryptocurrencies and gift cards. </p>
              </div>
              <div>
                <Link className="app-btn-default" to="/signup"> Get Started </Link>
              </div>
          </div>

          <div className="banner-img col-lg-6 col-md-6 col-sm-12 col-xm-12" style={{textAlign: 'center'}} data-aos="fade-down">
            <div className="col-12"  data-aos="fade-down">
              <img src={banner} alt="app banner "/>
            </div>
           

          </div>
        </div>
    </div>
  )
}

export default Banner;
