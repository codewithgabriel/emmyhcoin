import * as React from 'react';


function Services() {
  return (
    <div style={{ padding: 20, margin: 0 , marginTop: 100 }} className="container-fluid col col-12 " data-aos="fade-down">
      <div style={{ textAlign: 'center' }}>  <h3 className="h-mid"> Our Awesome Features </h3> </div>
      <div className="services-wrapper container-fluid row col-12">

        <div data-aos="fade-up" className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
          <div className="service-card-head col-3"> <i className="fa-regular fa-clock"></i>  </div>
          <div className="service-card-text">
            <h3> Availability </h3>
            <p>

            We are always available 24/7 to give customer support when needed.
            </p>
          </div>
        </div>


        <div data-aos="fade-up" className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
          <div className="service-card-head col-3"> <i className="fa-brands fa-bitcoin"></i>  </div>
          <div className="service-card-text">
            <h3> Easy to Use </h3>
            <p>
            Our platform combines beautiful design with cutting-edge technology for a seamless user experience in daily transactions. 
            </p>
          </div>
        </div>


        <div data-aos="fade-up" className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
          <div className="service-card-head col-3"> <i className="fa-solid fa-wallet"></i></div>
          <div className="service-card-text">
            <h3> Fast Payout </h3>
            <p>
            Once your order is processed, you get instant remittance from us. Our payment system is renowned for its excellence.
            </p>
          </div>
        </div>


        <div data-aos="fade-up" className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
          <div className="service-card-head col-3"> <i className="fa-solid fa-lock"></i>  </div>
          <div className="service-card-text">
            <h3> Safe and Secure </h3>
            <p>
            We strive to create a secure environment where customers can confidently carry out their transactions. 
            </p>
          </div>
        </div>



        <div data-aos="fade-up" className="service-card col-lg-4 col-md-4 col-sm-4 col-xm-12">
          <div className="service-card-head col-3"><i className="fa-solid fa-person"></i>  </div>
          <div className="service-card-text">
            <h3> Referral Program</h3>
            <p>
            We are confident that our customers would whole-heartedly recommend us, we still want to express out gratitude by rewarding you for doing so! By sharing your referral links, you'll receive a lifetime commission every time anyone you refer completes an order with us. 
            </p>
          </div>
        </div>

        


      </div>

    </div>
  )
}


export default Services;
