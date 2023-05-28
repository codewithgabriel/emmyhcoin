import * as React from 'react';
import buy from '../imgs/buy.svg';
import sell from '../imgs/sell.svg';
import invest from '../imgs/invest.svg';


function Specialities(){
  return(
    <div style={{padding: 0 ,  margin: 0, marginTop: 100}} className="container-fluid col col-12 " data-aos="fade-down">
      <div style={{textAlign: 'center'}}>  <h3 className="h-mid">  Our Specialities </h3> </div>
        <div className="special-wrapper row col-lg-11">

          <div className="special-card col-lg-4" data-aos="fade-down">
            <div className="special-img col-12">
                <img src={buy} alt="Sell your crypto" />
            </div>

            <div className="special-text">
            <h3> Sell Your Crypto</h3>
            <p>
                Convert and cash out your cryptocurrencies hassle-free with our secure program.

             </p>
            </div>
          </div>


          <div className="special-card col-lg-4" data-aos="fade-down">
            <div className="special-img col-12">
                <img src={invest} alt="Sell Your Crypto"/>
            </div>

            <div className="special-text">
            <h3> Sell Your Gift Cards</h3>
            <p>
                Turn your unused gift cards into cash easily with our user-friendly platform.
             </p>
            </div>
          </div>


          <div className="special-card col-lg-4" data-aos="fade-down">
            <div className="special-img col-12">
                <img src={sell}  alt="Sell Your Gift Cards"/>
            </div>

            <div className="special-text">
            <h3> Pay Your Bills</h3>
            <p>
                Simplify your life by paying your utilities with ease through our reliable platform.
             </p>
            </div>
          </div>




        </div>
    </div>
  )
}


export default Specialities;
