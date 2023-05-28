import * as React from 'react';
import exchange from '../imgs/img4.png';

const Transfer = ({handleNextPrevClick}) => {
    return (
      
        <div style={{ padding: 20, margin: 0, paddingTop: 50 }} className="container-fluid row col-12 container-form-card" >
            <div style={{ margin: 0 }} className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                <div className='col-lg-6 col-md-6 col-sm-12 col-xm-12'>
                    <img src={exchange} alt="exchange" />
                </div>
            </div>

            <div className="col-lg-6 col col-md-6 col-sm-12 col-xm-12" style={{ padding: 0, textAlign: 'center' }}>
                <div>
                    <h2 className="form-title">Wallet Credited</h2>
                    <p>Put your order up for processing and we will approve and credit you lightning fast.</p>

                    <div>
                        <button onClick={() => handleNextPrevClick(2)} className="app-btn-default"> <i class="fa-solid fa-caret-left"> </i> Previous</button>

                    </div>
                </div>
            </div>
    </div>
    );
};

export default Transfer;