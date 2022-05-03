import { Link } from "react-router-dom";

import './css/Navigation.css'

const NavbarComp = () => {
    return (
        <>
           <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                <div className="container"><Link className="navbar-brand" to="/">CommunIT-GameShop</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item"><Link className="nav-link active" to="#">First Item</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">Second Item</Link></li>
                            <li className="nav-item dropdown"><Link className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" to="#">Dropdown </Link>
                                <div className="dropdown-menu"><Link className="dropdown-item" to="#">First Item</Link><Link className="dropdown-item" to="#">Second Item</Link><Link className="dropdown-item" to="#">Third Item</Link></div>
                            </li> */}
                        </ul><span className="navbar-text actions"> <Link className="login" to="/Login">LOGIN</Link>
                        <Link className="btn btn-light action-button" role="button" to="/Signup">SIGN UP</Link></span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarComp;