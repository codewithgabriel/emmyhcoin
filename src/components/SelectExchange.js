import * as React from 'react';
import exchange from '../imgs/btc.png';

const SelectExchange = ({ handleNextPrevClick }) => {
    return (
        <div style={{ padding: 20, margin: 0, paddingTop: 50 }} className="container-fluid row col-12 container-form-card" >
            <div style={{ margin: 0 }} className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                <div className='col-lg-12 col-md-12 col-sm-12 col-xm-12'>
                    <img src={exchange} alt="exchange" />
                </div>
            </div>

            <div className="col-lg-6 col col-md-6 col-sm-12 col-xm-12" style={{ padding: 0, textAlign: 'center' }}>
                <div>
                    <h2 className="form-title">Select Your Crypto For Exchange</h2>
                    <p>Easily convert your crypto currency and gift cards to NGN in one click</p>

                    <div>
                        <button onClick={() => handleNextPrevClick(3)} className="app-btn-default"> Next <i class="fa-solid fa-caret-right"></i></button>

                    </div>
                </div>
            </div>
    </div>
        );
};

                export default SelectExchange;