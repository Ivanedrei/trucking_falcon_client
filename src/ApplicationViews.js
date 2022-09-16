import React from "react"
import { Route } from 'react-router-dom'
import { Home } from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { TripForm } from "./components/trip/TripForm"
import { TripEdit } from "./components/trip/TripEdit"
import { MyTrips } from "./components/trip/MyTrips"

// token={token} setToken={setToken} setUserId={setUserId}
export const ApplicationViews = ({ token, setToken, user, setUser }) => {
    // const PrivateRoute = ({ children }) => {
    //     return token ? children : <Navigate to="/login" />;
    // }
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            {/* <Route exact path="/" > <Home /> </Route> */}
            <Route exact path="/login" > <Login setToken={setToken} setUser={setUser} /> </Route>
            <Route exact path="/register" > <Register /> </Route>
            <Route exact path="/form" > <TripForm /> </Route>
            <Route exact path="/trips" > <MyTrips /> </Route>
            <Route exact path="/trip/:tripId/edit" > <TripEdit /> </Route>
        </>
    )
}