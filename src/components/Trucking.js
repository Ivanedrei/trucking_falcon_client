import React, { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import { Route } from "react-router-dom"
// import "./Trucking.css"

export const Trucking = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("Trucking_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("Trucking_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("Trucking_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("Trucking_customer") !== null)
    }

    return (
        <>
            <Route>
                <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
                <ApplicationViews
                    setAuthUser={setAuthUser}
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated} />
            </Route>
        </>
    )
}
