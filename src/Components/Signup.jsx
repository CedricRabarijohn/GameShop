import { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section className="login-dark"  data-aos="zoom-in">
                <form method="" action="#">
                    <h2 className="visually-hidden">Sign up</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="mb-3 text-center"><h3>Sign up for free</h3></div>
                    <div className="mb-3"><input className="form-control" type="text" name="firstName" placeholder="First Name" /></div>
                    <div className="mb-3"><input className="form-control" type="text" name="lastName" placeholder="Last Name" /></div>
                    <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Sign up</button></div><Link className="forgot" to="#">Forgot your email or password?</Link>
                </form>
            </section>
        </>
    );
}
 
export default Signup;