import * as React from 'react';


function Services(){
  return(
    <div style={{padding: 0 , margin: 0}} className="container-fluid col col-12 " data-aos="fade-down">
      <div style={{textAlign: 'center'}}>  <h3 className="h-mid"> Our Awesome Features </h3> </div>
      <div className="services-wrapper container-fluid row col-12">

          <div className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
              <div className="service-card-head col-3"> <i class="fa-brands fa-google-play"></i>  </div>
              <div className="card-text">
                <h3> Secure your wallet </h3>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .

                 </p>
              </div>

          </div>

      </div>

    </div>
  )
}


export default Services;
