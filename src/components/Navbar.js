import * as React from 'react';
import  {Link} from 'react-router-dom';


function Navbar(){
  return(
    <div  style={{margin: 0 , padding: 0}} className="container-fluid nav-bar-parent row col-12 ">
      <div className="app-logo  row col-lg-3 col-md-3 col-sm-3 col-xm-3">
          <div className="col-3" >
            <img src="https://www.emmyhcoin.com/static/image/favicon.png" alt="app logo"/>
          </div>
          <div className="col-9">
            <h5 style={{fontSize: '1.5vw', }} > EmmyHCoin</h5>
          </div>
      </div>
      <div className="nav-bar col-lg-7 col-md-7 col-sm-7 col-xm-7">
          <ul>
              <li> <Link to="/"> Why EmmyHCoin? </Link> </li>
              <li> <Link to="/"> Our Services</Link> </li>
              <li> <Link to="/"> Support </Link> </li>
              <li> <Link to="/"> About </Link> </li>

          </ul>
      </div>
      <div className="nav-bar-btn col-lg-2 col-md-2 col-sm-2 col-xm-2">
        <button className="nav-btn"> Get Started </button>
      </div>
    </div>
  )
}

export default Navbar;
