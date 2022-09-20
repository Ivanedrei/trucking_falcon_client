import React from "react"
import { Route, Switch } from 'react-router-dom'
import { Home } from "./Home"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
import { TripForm } from "./components/trip/TripForm"
import { TripEdit } from "./components/trip/TripEdit"
import { TripView } from "./components/trip/TripView"
import { MyTrips } from "./components/trip/MyTrips"


// token={token} setToken={setToken} setUserId={setUserId}
export const ApplicationViews = ({ token, setToken, user, setUser }) => {
    // const PrivateRoute = ({ children }) => {
    //     return token ? children : <Navigate to="/login" />;
    // }
    return (
        <>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/form" > <TripForm /> </Route>
                <Route exact path="/trips" component={MyTrips} />
                <Route exact path="/trips/edit/:id(\d+)" > <TripEdit /> </Route>
                <Route exact path="/trips/view/:id(\d+)" > <TripView /> </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
        // component={MyTrips}
    )
}