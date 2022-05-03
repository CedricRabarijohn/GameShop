import { Link } from 'react-router-dom'
import './css/Footer.css'
const Footer = () => {
    return (
        <>
            <div className="col">
                <footer className="footer-basic">
                    <div className="social"><Link to="#"><i className="icon ion-social-instagram"></i></Link><Link to="#"><i className="icon ion-social-snapchat"></i></Link><Link to="#"><i className="icon ion-social-twitter"></i></Link><Link to="#"><i className="icon ion-social-facebook"></i></Link></div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="#">Home</Link></li>
                        <li className="list-inline-item"><Link to="#">Services</Link></li>
                        <li className="list-inline-item"><Link to="#">About</Link></li>
                        <li className="list-inline-item"><Link to="#">Terms</Link></li>
                        <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                    </ul>
                    <p className="copyright">Company Name © 2022</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;