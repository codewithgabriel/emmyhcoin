import * as React from "react";
import signin from '../imgs/unlock.svg';
import {Link} from 'react-router-dom';

const SignUpFormStep = ({handleNextPrevClick}) => {
    return (
            <div style={{padding: 0 , margin: 0, paddingTop: 50}} className="container-fluid row col-12 container-form-card" >


                    <div className="col-lg-6 col col-md-6 col-sm-12 col-xm-12 col-12" style={{ padding: 0,  textAlign: 'center'}}>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xm-12"  style={{margin: 'auto'}}>
                            <img src={signin} alt="sing" />
                        </div>
                    </div>


                    <div className="col-lg-6 col col-md-6 col-sm-12 col-xm-12 col-12" style={{ padding: 0, textAlign: 'center' }}>
                        <div className="col-12">
                            <h2 className="form-title">Create Account Now</h2>
                            <p>Sometime fasinating awaits you, create account now to enjoy our satisfying services</p>

                            <div>
                                <Link to="/signup" className="app-btn-default"> Sign Up <i class="fa-solid fa-caret-right"></i></Link>
                            </div>

                        </div>
                    </div>



            </div>

    );
};

export default SignUpFormStep;
