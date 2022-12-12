import React from "react"
import { Link, Redirect, useHistory } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <div className="navbar">
            <div className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/form">+ New Trip</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/trips">My Trips</Link>
            </div>
            <div>
                < button className="nav-link fakeLink"
                    onClick={() => {
                        localStorage.removeItem("t_token");
                        // < Redirect to={"/"} />
                        history.push({ pathname: "/login" })
                    }}
                >Logout</button>
            </div>
        </div >
    )
}

// {
//     (localStorage.getItem("t_token") !== null) ?
//         <li className="nav-item">
//             <button className="nav-link fakeLink"
//                 onClick={() => {
//                     localStorage.removeItem("t_token");
//                     // < Redirect to={"/"} />
//                     history.push({ pathname: "/login" })
//                 }}
//             >Logout</button>
//         </li> :
//         <>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/register">Register</Link>
//             </li>
//         </>
// }