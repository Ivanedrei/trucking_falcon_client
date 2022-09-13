import React from "react"
import { Route, Router } from 'react-router-dom'
import { Home } from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { TripForm } from "./components/users/TripForm"
import { TripEdit } from "./components/users/TripEdit"
import { MyTrips } from "./components/users/MyTrips"

// token={token} setToken={setToken} setUserId={setUserId}
export const ApplicationViews = ({ token, setToken, user, setUser }) => {
    // const PrivateRoute = ({ children }) => {
    //     return token ? children : <Navigate to="/login" />;
    // }
    return (
        <>
            <Router>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/newtrip" element={<TripForm />} />
                <Route path="/mytrips" element={<MyTrips />} />
                <Route path="/edittrip" element={<TripEdit />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/account" element={<Account />} /> */}

                {/* <Route element={<PrivateRoute token={token}/>}>

            </Route> */}
                {/* <Route exact path="/appcard" component={() => <AppCards user={user} />} /> */}
                {/* <Route exact path="/categories" element={
                    <PrivateRoute>
                        <CategoryList/>
                    </PrivateRoute>
                    } />

        
           
            <Route exact path="/login" element={<Login setToken={setToken} setUserId={setUserId}/>} />
            <Route exact path="/register" element={<Register />} />
            {/* <Route exact path="/appcard" component={() => <AppCards user={user} />} /> */}

            </Router>
        </>
    )
}