import "./Trucking.css"
import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { ApplicationViews } from "../ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"

export const Trucking = () => {
    return <>
        <Route exact path="/">
            {localStorage.getItem("t_token") ?
                <div> <NavBar /> <ApplicationViews /> </div>
                : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
}
