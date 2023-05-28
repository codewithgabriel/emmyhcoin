import * as React from "react";
import signin from '../imgs/unlock.svg';
import { Link } from 'react-router-dom';

const Login = () => {
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

               
                <div className="form-title col-12 text-light" style={{ paddingTop: 20 }}>
                    <h3 style={{ padding: 0, margin: 0 }}> Sign In To EmmyHCoin</h3>
                    <p>You’re one step away from something awesome</p>
                </div>

               

                <div className="form-parent col-12 col-lg-12 col-sm-12 col-xm-12 ">
                <div class="alert-cm text-light col-12"    role="alert">
                    <i className="fas fa-lock" style={{marginRight: 5}}></i>
                    <span>Please ensure you're on https://www.emmycoin.com</span>
                </div>
                    <form style={{ padding: 0, margin: 0 }} className="col-12" method="post" action="#">
                        <div className="form-group-cm col-12">
                            <i className="fas fa-user"></i>
                            <input className="form-input  col-12" type="text" name="username" placeholder="e.g you@mail.com" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-lock"></i>
                            <input className="form-input" type="password" name="password" placeholder="Password" />
                        </div>

                        <div className="form-group-cm col-12">
                            <button className="app-form-btn col-12"> Sign In</button>
                        </div>

                        <div className="form-group-cm col-12 text-light text-center ">
                            <h6>OR</h6>
                        </div>
                    </form>
                </div>

                <div className="form-box-parent col-12">

                    <div className="form-box">
                    <span> Continue with Google</span>
                        <i class="fa-brands fa-google" style={{marginLeft: 5}}></i>
                       
                    </div>


                </div>







            </div>

        </div>
    );
};

export default Login;