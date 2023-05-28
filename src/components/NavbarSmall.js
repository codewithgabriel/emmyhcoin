import * as React from 'react';
import { Link } from 'react-router-dom';

function NavbarSmall() {
    return (
        <div style={{ margin: 0, padding: 0, height: 'auto' }} className='nav-bar-sm-wrapper container-fluid nav-bar-sm'>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand col-3" href="#">
    <img src="https://www.emmyhcoin.com/static/image/Emmyh Crypto blue logo_mod.png" alt="app-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Why EmmyHCoin?</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="#">Our Service</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="#">Support</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavbarSmall;