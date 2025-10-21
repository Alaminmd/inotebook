import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import noteContex from "../contex/notes/noteContex";

export default function Navbar(props) {
    const context = useContext(noteContex);
    const { setprogressBolean } = context;
    const { setProgress } = props;
    const handleLogout = () => {
        setProgress(50);
        setTimeout(() => {
            localStorage.removeItem('auth-token');
            setprogressBolean(false);
            setProgress(100);
        }, 1000);
    };
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-md-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" exact="true" to="/inotebook">inotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/inotebook" ? "active" : ""}`} aria-current="page" exact="true" to="/inotebook">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} exact="true" to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem("auth-token") ? <ul className="navbar-nav mb-2 mb-lg-0 " role="search">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} exact="true" to="/login" role="button">SignIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} exact="true" to="/signup" role="button">SignUp</Link>
                            </li>
                        </ul> : <ul className="navbar-nav mb-2 mb-lg-0 "><li className="nav-item">
                            <Link className={`nav-link`} exact="true" to="/login" onClick={handleLogout}>Logout</Link>
                        </li></ul>}
                    </div>
                </div>
            </nav>
        </>
    )
}
