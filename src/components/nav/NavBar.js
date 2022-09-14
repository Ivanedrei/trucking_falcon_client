import React from "react"
import { Link, useHistory } from "react-router-dom"
// import ( BrowserRouter )
// import "./NavBar.css"

export const NavBar = (clearUser, isAuthenticated) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history('/');
    }
    return (
        <ul className="navbar">

            <li>
                <p>
                    "Hello World"

                </p>
            </li>
            <li>

            </li>
        </ul >
    )
}

//LOGIN/REGISTER intro img:
// https://cdn.vectorstock.com/i/1000x1000/38/13/vt-v-t-swoosh-letter-logo-design-with-modern-vector-21703813.webp