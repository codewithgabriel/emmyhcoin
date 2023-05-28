import * as React from 'react';
import  {Link} from 'react-router-dom';


function Navbar(){

  function toServices(event){
    event.preventDefault();
    let elem = document.querySelector(".special-wrapper")
    elem.scrollIntoView();
  }

  function toAbout(event){
    event.preventDefault();
    try {
      let elem = document.querySelector(".about-wrapper")
      if (elem == null){
        throw Error;
      }
      elem.scrollIntoView();

    }catch(e){
      console.log(e.message);
    }
    
  }
  return(
    <div  style={{margin: 0 , padding: 0}} className="container-fluid nav-bar-parent row col-12 ">
      <div className="app-logo  row col-lg-3 col-md-3 col-sm-3 col-xm-3">
          <div className="col-6" >
            <img src="https://www.emmyhcoin.com/static/image/Emmyh Crypto blue logo_mod.png" alt="app logo"/>
          </div>
          
      </div>
      <div className="nav-bar col-lg-7 col-md-7 col-sm-7 col-xm-7">
          <ul>
              <li> <Link to="/"> Home </Link> </li>
              <li> <Link to="" onClick={toServices}> Our Services</Link> </li>
              <li> <Link to="/login"> Wallet </Link> </li>
              <li> <Link onClick={toAbout}> About </Link> </li>

          </ul>
      </div>
      <div className="nav-bar-btn col-lg-2 col-md-2 col-sm-2 col-xm-2" style={{padding: 20}}>
        <Link to="/login" className="app-btn-bar"> Sign In <i className="fa-solid fa-right-to-bracket"></i></Link>
      </div>
    </div>
  )
}

export default Navbar;
