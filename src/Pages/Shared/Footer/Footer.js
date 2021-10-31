import { faFacebookF, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>CONTACT US</h4>
  	 			<ul>
                        <li><NavLink to="#">
                                 <h2><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01925741193</h2>   
                        </NavLink>
                    </li>	
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>our address</h4>
  	 			<ul>
  	 				<li><NavLink to="#">Fantasy Kingdom Complex, Jamgora, Ashulia, Savar, Dhaka, Bangladesh</NavLink></li>
  	 				<li><NavLink to="#">Saturday -Thursday: 11 AM – 07 PM
                        Friday & Holiday: 10 AM – 08 PM</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>proud memeber of</h4>
  	 			<ul>
  	 				<li><NavLink to="#"> Coca-Cola</NavLink></li>
  	 				<li><NavLink to="#">Pespi</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<NavLink to="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></NavLink>
  	 			</div>
  	 		</div>
  	 	</div>
           
  	 </div>
       <p className ="text-white text-center pt-5"><small>&copy; 2021 Wonderlar. All rights are reserved by Wonderland</small></p>
  </footer>
        </div>
    );
};

export default Footer;