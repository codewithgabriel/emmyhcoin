import * as React from "react";
import signin from '../imgs/unlock.svg';
import {Link} from 'react-router-dom';

const SignInFormStep = () => {
    return (
            <div style={{padding: 0 , margin: 0, paddingTop: 50}} className="container-fluid row col-12 container-form-card" >
                    
                    
                    <div className="col-lg-6 col col-md-6 col-sm-12 col-xm-12" style={{padding: 0,  textAlign: 'center'}}>
                         <div>
                             <h2 style={{padding: 0, textAlign: 'center' }} className="form-title">Create Account</h2>
                         </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xm-12"  style={{margin: 'auto'}}>
                            <img src={signin} alt="sing" />
                        </div>
                    </div>
                    
                    <div style={{ margin: 0}} className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                        <form method="POST" action="#" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" className="term-service">Terms of service</Link></label>

                            </div>

                            <div className="form-group">
                                <Link to="/login" className="signup-image-link">I am already a member</Link>

                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>

                </div>

    );
};

export default SignInFormStep;