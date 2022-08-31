import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home.js"
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    return (
        <>
            <Routes>
                <Route exact path="/login" element={
                    <Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                {/* Render the Home route when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                {/* Our shiny new route. */}

                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>
                } />
                <Route path="/animals/create" element={<AnimalForm />} />
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route exact path="/animals/:animalId" element={<AnimalDetail />} />


            </Routes>
        </>
    )
}