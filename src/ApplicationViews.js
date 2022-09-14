import React from "react"
import { Route, Router } from 'react-router-dom'
import { Home } from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
// import { TripForm } from "./components/users/TripForm"
// import { TripEdit } from "./components/users/TripEdit"
// import { MyTrips } from "./components/users/MyTrips"

// token={token} setToken={setToken} setUserId={setUserId}
export const ApplicationViews = ({ token, setToken, user, setUser }) => {
    // const PrivateRoute = ({ children }) => {
    //     return token ? children : <Navigate to="/login" />;
    // }
    return (
        <>
            <Router>
                <Route exact path="/" > <Home /> </Route>
                <Route path="/login" > <Login setToken={setToken} setUser={setUser} /> </Route>
                <Route path="/register" > <Register /> </Route>
            </Router>
        </>
    )
}