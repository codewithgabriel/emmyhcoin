import * as React from 'react';
import { Link } from 'react-router-dom';

function Footer () {
    return(
    <footer class="text-muted py-5">
    
    <div className='container-fluid row col-12 text-dark' style={{padding: 50, color: '#02ccff'}}>

            <div className='col-lg-4 col-md-4 col-xm-12 col-sm-12'>
                <h3 style={{textAlign:'center'}}>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Wallet</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/signin">Home</Link></li>

                </ul>
            </div>

            
            <div className='col-lg-4 col-md-4 col-xm-12 col-sm-12'>
                <h3 style={{textAlign:'center'}}>Follow Us</h3>
                <ul>
                    <li><Link to=""><i class="fa-brands fa-twitter"> </i> Twitter</Link></li>
                    <li><Link to=""><i class="fa-brands fa-instagram"></i> Instagram</Link></li>
                    <li><Link to=""><i class="fa-brands fa-whatsapp"></i> Whatsapp</Link></li>

                </ul>
            </div>


            <div class="container">
        <p class="float-end mb-1">
        <Link to="#">
            <div style={{height: '50px' , width: '50px' , textAlign:'center', borderRadius: 7, padding: 15, background: '#02ccff' , color: 'white'}}>
                 <i  style={{fontSize: '1.5em'}} class="fa-solid fa-caret-up"></i>
            </div>
        </Link>
        </p>
        <p class="mb-1">EmmyHcoin &copy; {new Date().getFullYear()} </p>
    </div>

    </div>
    </footer>
    )
}

export default Footer;