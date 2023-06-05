import * as React from "react";
import { Link } from 'react-router-dom';
import {useState} from 'react';


// Import JS library
const halfmoon = require("halfmoon");

const Login = () => {
  const [ payload , setPayload ] = useState({identifier: '' , password: ''});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPayload(values => ({...values, [name]: value}))
  }

  function alertModal(message , warningType, textColor){
    let btn = document.querySelector("#alr-btn");
    let model = document.querySelector('#exampleModal');
    let body = document.querySelector(".modal-body");
    let content = document.querySelector(".modal-content");
    let btnclose = document.querySelector('.btn-close');
    btn.click();

    content.classList =`modal-content  ${warningType} ${textColor}`;
    body.innerText = `${message}`;
    setTimeout(function(){
      btnclose.click();
    }, 5000)


  }

  function handleGoogle(){

    window.location.href = "https://emmyhcoin.onrender.com/google";
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("emmy_access_token", token);
      window.location.href = "/user";
    }
  }

  async function handleSubmit(e){
      e.preventDefault();
    //getting the orderId if existing
    var params = new URLSearchParams(window.location.search);
    const orderId = params.get("orderId");
    // const form = document.forms[0];
    let host = "https://emmyhcoin.onrender.com/";
    let response = "";



      const submit = document.querySelector("#submit");
      const body = {
        email: payload.identifier,
        password: payload.password,
      };


      try {
        submit.innerHTML = '<i style="color: white;" class="fa fa-spinner fa-spin"></i> Signing In...';
        var request = await fetch(host + "auth/signin/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        response = await request.json();

        if (response.status === true) {
          localStorage.setItem("emmy_access_token", response.userData.token);

          if (orderId) {
            window.location.href = `https://emmyhcoin.com/user/verify.html?orderId=${orderId}`;
            return;
          }

          const req = await fetch(host + "auth/profile/", {
            method: "GET",
            headers: {
              emmy_access_token: response.userData.token,
            },
          });

          const res = await req.json();

          localStorage.setItem("user", JSON.stringify(res.userData));

          window.location.href = "https://emmyhcoin.com/user/";
        } else {
          submit.innerHTML = '<i class="fa"></i> Sign In';

          if (response.error === "ACCOUNT_EXISTENCE_ERROR") {
            alertModal('No account associated with that data' , 'bg-danger' , 'text-light')

          }


          return;
        }
      } catch (error) {
        submit.innerHTML = '<i class="fa"></i> Sign In';



        if (response.error === "ACCOUNT_EXISTENCE_ERROR") {
          alertModal('No account associated with that data' , 'bg-danger' , 'text-light')

        }

        return;
      }
    };


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
                <div className="alert-cm text-light col-12"    role="alert">
                    <i className="fas fa-lock" style={{marginRight: 5}}></i>
                    <span>Please ensure you're on https://www.emmycoin.com</span>
                </div>

                    <form  onSubmit={handleSubmit} name="form-login" method="POST" className="form-signin col-12"  style={{ padding: 0, margin: 0 }}>
                      <div className="form-group-cm col-12">
                          <input
                            id="csrf_token"
                            name="csrf_token"
                            type="hidden"
                            value="IjQwYjNlMWI3NDVkNzg3MDIxOGQzYjBiNzNkNTExYzk4N2I4MGVlNTki.YPF6tQ.3UcyPeKGhbWJSLhHB01sj8gg4YU"
                          />
                        </div>
                        <div className="form-group-cm col-12">
                            <i className="fas fa-user"></i>
                            <input onChange={handleChange} required className="form-input  col-12" type="text"  autoComplete="email" id="identifier" name="identifier" required placeholder="e.g you@mail.com" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-lock"></i>
                            <input onChange={handleChange} required className="form-input" type="password" id="password"  name="password" placeholder="Password" />
                        </div>

                        <div className="form-group-cm col-12">
                            <button className="app-form-btn col-12" id="submit">   <i className="fa"></i> Sign In</button>
                        </div>
                        <div className="form-group-cm col-12 text-light ">
                            <Link to="/forget" className="text-light">Forget Password</Link>
                            <Link style={{float: 'right'}} to="/signup" className="text-light">Don't have an account?</Link>

                        </div>

                        <div className="form-group-cm col-12 text-light text-center ">
                            <h6>OR</h6>
                        </div>
                    </form>
                </div>

                <div className="googleBtn form-box-parent col-12" onClick={handleGoogle}>
                    <button className="form-box app-btn-default">
                    <span> Continue with Google</span>
                        <i className="fa-brands fa-google" style={{marginLeft: 5}}></i>

                    </button>
                </div>







            </div>

        </div>
    );
};

export default Login;
