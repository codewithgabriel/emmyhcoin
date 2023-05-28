import * as React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div data-aos="fade-down" className="form-container container-fluid col col-12 bg-dark" style={{ margin: 0, padding: 0 }}>

            <div style={{ margin: 'auto' }} className="form-wrapper  container-fluid col col-12 col-lg-6 col-md-6 col-sm-12 col-xm-12">


                <div className="col-12" style={{ height: 'auto' }}>
                    <Link to="/">
                    <div className="col-5" style={{ margin: 'auto' }}>
                        <img src="https://www.emmyhcoin.com/static/image/Emmyh Crypto blue logo_mod.png" alt="logo" />
                    </div>
                    </Link>

                </div>

               
              

                <div className="form-parent text-light col-12 col-lg-12 col-sm-12 col-xm-12 ">
                        <div>
                            <h3>404, Sorry the page you're looking is Not Available</h3>
                            <p><Link to="/">Back To Home</Link></p>
                        </div>
                 </div>

            </div>

        </div>
    );
};

export default NotFound;