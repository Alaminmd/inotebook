import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
    Link,
    useNavigate
} from "react-router-dom";
import noteContex from "../contex/notes/noteContex";

const Login = (props) => {
    const context = useContext(noteContex);
    const { credintials, setcredintials, setprogressBolean } = context;
    const { setProgress } = props;
    const navigate = useNavigate();
    const notifyLogin = () => toast("Login Successful");
    const notifyLoginError = () => toast.error("Login with correct credentials.");
    const notifyServerError = () => toast.error("Please, Try again later.");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProgress(50);
        const host = "http://localhost:5000";
        const url = `${host}/api/auth/login`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: credintials.email, passWord: credintials.password })
            });
            // if(!response.ok){
            //     throw new Error(`Response status: ${response.status}`)
            // };
            const result = await response.json();
            // console.log(result);
            if (result.success === true) {
                //redirect
                localStorage.setItem('auth-token', result.authLoginToken);
                navigate("/inotebook");
                notifyLogin();
            } else {
                notifyLoginError();
            }
        } catch (error) {
            console.error(error.message);
            notifyServerError();
        }
        setprogressBolean(true);
        setProgress(100);
    };
    const onChange = (e) => {
        setcredintials({ ...credintials, [e.target.name]: e.target.value })
    };
    return (
        <div className='container p-md-5'>
            <div className="container-fluid login-container d-flex align-items-center justify-content-md-center">
                <div className="row w-100 justify-content-md-center">
                    <div className="col-12 col-lg-10">
                        <div className="card login-card shadow-lg border-0">
                            <div className="row g-0">

                                <div className="col-md-6 d-none d-lg-block bg-primary p-md-5 login-image-panel">
                                    <div className="text-white text-center md-p-5">
                                        <h2 className="mb-4">Welcome to Our Platform!</h2>
                                        <p>Get started with your secure login experience.</p>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card-body p-4 p-lg-5">
                                        <h3 className="card-title text-center mb-5 login-title">Sign In</h3>

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                                <input type="email" name="email" className="form-control form-control-lg" id="inputEmail" placeholder="name@example.com" autoComplete="on" required onChange={onChange} value={credintials.email} />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control form-control-lg" id="inputPassword" placeholder="••••••••" autoComplete="one" required onChange={onChange} value={credintials.password} />
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="/" className="text-decoration-none small forgot-link">Forgot Password?</a>
                                            </div>

                                            <div className="d-grid mb-3">
                                                <button type="submit" className="btn btn-primary btn-lg login-button">
                                                    Login
                                                </button>
                                            </div>

                                            <p className="text-center mt-3 text-muted">
                                                Don't have an account? <Link exact="true" to="/signup" className="forgot-link">Register here</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login