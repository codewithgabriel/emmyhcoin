import * as React from 'react';
import { Link } from 'react-router-dom';

function Footer () {
    return(
    <footer class="text-dark py-5">
    
    <div className='container-fluid row col-12' style={{padding: 50}}>

            <div className='footer-quick-links col-lg-4 col-md-4 col-xm-12 col-sm-12'>
                <h3 style={{textAlign:'left'}}>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Wallet</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="/login">Sign In</Link></li>

                </ul>
            </div>

            
            <div className='footer-follow-us col-lg-4 col-md-4 col-xm-12 col-sm-12'>
                <h3 style={{textAlign:'left'}}>Follow Us</h3>
                <ul>
                    <li><Link to="#"><i class="fa-brands fa-twitter"> </i> Twitter</Link></li>
                    <li><Link to="#"><i class="fa-brands fa-instagram"></i> Instagram</Link></li>
                    <li><Link to="#"><i class="fa-brands fa-whatsapp"></i> Whatsapp</Link></li>

                </ul>
            </div>


            <div class="container">
        <p class="float-end mb-1">
        <a href="#">
            <div style={{height: '50px' , width: '50px' , textAlign:'center', borderRadius: 7, padding: 15, background: '#02ccff' , color: 'white'}}>
                 <i  style={{fontSize: '1.5em'}} class="fa-solid fa-caret-up"></i>
            </div>
        </a>
        </p>
        <p class="mb-1">EmmyHcoin &copy; {new Date().getFullYear()} </p>
    </div>

    </div>
    </footer>
    )
}

export default Footer;