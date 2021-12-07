import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "FAQ", link: "/faq" },
        { name: "Manual", link: "/manual" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Treams of service", link: "/tearms-of-service" },
    ]
    const ourAddress = [
        { name: "68, Shaheed Tajuddin Ahmed Sarani, Mohakhali, Dhaka 1212, Bangladesh", },
        

    ]
    const oralHealth = [
        { name: "Emergency vaccine Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
       
    ]
    const services = [
        { name: "Emergency vaccine Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        
    ]
    return (
        <footer className="footer-area bg-yellow">
            <div className="container pt-5 bg-red">
                <div className="row py-5 ">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Vaccine Services" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">+880 (0)2-0000-0000 to 10</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;