import React, { useNavigate } from "react"
import { BrowserRouter, Link, Router } from "react-router-dom"
// import ( BrowserRouter )
// import "./NavBar.css"

export const NavBar = (clearUser, isAuthenticated) => {
    const history = useNavigate()

    const handleLogout = () => {
        clearUser();
        history('/');
    }
    return (
        <BrowserRouter>
            <Router>
                <ul className="navbar">
                    {/* {isAuthenticated */}
                    ? <li className="navbar__item active">
                        <Link
                            alt="logo" className="navbar__link" to="/"> <img src="https://www.pngitem.com/pimgs/m/136-1364593_falcon-png-download-simple-falcon-logos-transparent-png.png" className="logo" ></img></Link>
                    </li>
                    {/* : null} */}
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/newtrip">+New Trip</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/mytrips">My Trips</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/contact">Contact</Link>
                    </li>
                    <li className="navbar__item">
                        <span alt="account" className="navbar__link" to="/account" onClick={handleLogout} >
                            <img src="../../public/img" className="account" > </img>
                        </span>
                    </li>
                </ul >
            </Router>
        </BrowserRouter>
    )
}

//LOGIN/REGISTER intro img:
// https://cdn.vectorstock.com/i/1000x1000/38/13/vt-v-t-swoosh-letter-logo-design-with-modern-vector-21703813.webp