import "./Trucking.css"
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"

export const Trucking = () => {
    return <>

        {localStorage.getItem("t_token") ?
            <div> <NavBar /> <ApplicationViews /> </div>
            : <Redirect to="/login" />}


        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
}
