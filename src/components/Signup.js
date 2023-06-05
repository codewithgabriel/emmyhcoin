import * as React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  
  const [ payload , setPayload ] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    repassword: '',
    referer: '',
  });

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

  async function handleSubmit (e) {
      e.preventDefault();
      let host = "https://emmyhcoin.onrender.com/";
      let response;

      const submit = document.querySelector("#submit");
      const email = payload.email;
      const fname = payload.firstname;
      const lname = payload.lastname;
      const password = payload.password;
      const ref = payload.referer;
      const confirm_password = payload.repassword;

      const number =  payload.phonenumber;
      const username = payload.username;

      //********************* validation of email starts***********************
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(mailformat)) {
        alertModal("Invalid Email" , "bg-danger" , "text-light")
        return;
      }

      //********************* validation of email ends*************************

      if (password !== confirm_password) {
        alertModal("Password does not match" , "bg-danger" , "text-light")

        return;
      }

      const body = {
        fname,
        lname,
        email,
        password,
        username,
        number,
        ref,
      };
      console.log(body);

      try {
        submit.innerHTML =
          '<i style="color: white;" class="fa fa-spinner fa-spin"></i> Signing Up...';

        var request = await fetch(host + "auth/signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        response = await request.json();

        if (response.status === true) {
          //localStorage.setItem('emmy_access_token', response.userData.token);
          window.location.href = "/login.html";
        } else {
          console.log(response);
          submit.innerHTML = '<i class="fa"></i> Sign Up';
          alertModal(response.message , "bg-danger" , "text-light")

          return;
        }
      } catch (error) {
        submit.innerHTML = '<i class="fa"></i> Sign Up';
        alertModal("Something completely went wrong. Please try again." , "bg-danger" , "text-light")

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
                    <h3 style={{ padding: 0, margin: 0 }}> Sign Up To EmmyHCoin</h3>
                    <p>You’re one step away from something awesome</p>
                </div>



                <div className="form-parent col-12 col-lg-12 col-sm-12 col-xm-12 ">
                <div class="alert-cm text-light col-12"    role="alert">
                    <i className="fas fa-lock" style={{marginRight: 5}}></i>
                    <span>Please ensure you're on https://www.emmycoin.com</span>
                </div>
                    <form style={{ padding: 0, margin: 0 }} className="col-12" onSubmit={handleSubmit}>
                        <div className="form-group-cm col-12">
                            <i className="fas fa-user"></i>
                            <input onChange={handleChange} className="form-input  col-12" type="text" name="firstname" placeholder="First Name" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-user"></i>
                            <input onChange={handleChange} className="form-input  col-12" type="text" name="lastname" placeholder="Last Name" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-user"></i>
                            <input onChange={handleChange} className="form-input  col-12" type="text" name="username" placeholder="User Name" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-envelope"></i>
                            <input onChange={handleChange} className="form-input  col-12" type="text" name="email" placeholder="e.g you@mail.com" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-phone"></i>
                            <input onChange={handleChange} className="form-input  col-12" type="text" name="phonenumber" placeholder="Phone Number" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-lock"></i>
                            <input onChange={handleChange} className="form-input" type="password" name="password" placeholder="Password" />
                        </div>

                        <div className="form-group-cm col-12">
                            <i className="fas fa-lock"></i>
                            <input onChange={handleChange} className="form-input" type="password" name="repassword" placeholder="Re-type Password" />
                        </div>


                        <div className="form-group-cm col-12">
                            <i className="fas fa-users"></i>
                            <input onChange={handleChange} className="form-input" type="text" name="referer" placeholder="e.g https://emmyhcoin.com/referrer=3l3485j" />
                        </div>

                        <div className="form-group-cm col-12">
                            <button className="app-form-btn col-12"  id="submit"> Create Account</button>
                        </div>
                        <div className="form-group-cm col-12 text-light ">
                            <Link to="/login" className="text-light">Already have an account?</Link>

                        </div>

                        <div className="form-group-cm col-12 text-light text-center ">
                            <h6>Or</h6>
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

export default Signup;
