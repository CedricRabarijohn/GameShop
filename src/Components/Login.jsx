import { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section className="login-dark"  data-aos="zoom-in">
                <form method="" action="#">
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="mb-3 text-center"><h3>Login</h3></div>
                    <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Log In</button></div><Link className="forgot" to="#">Forgot your email or password?</Link>
                </form>
            </section>
        </>
    );
}

export default Login;