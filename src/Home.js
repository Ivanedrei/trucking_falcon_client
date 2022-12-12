import React, { useEffect, useState } from "react";
import { getTrips, getFuel, deleteTrip } from "./components/trip/tripManager";
import { Link, useHistory } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    const [trips, setTrips] = useState([])
    // const [newTrip, setNewTrip] = useState([])
    const [fuel, setFuel] = useState([])

    const history = useHistory()

    useEffect(() => {
        getTrips().then(data => setTrips(data))
    }, [])

    useEffect(() => {
        getFuel().then(data => setFuel(data))
    }, [])

    const currentTrip = () =>
        trips.map(trip => {
            if (trip.finish_date == null) { return trip.id }
        })

    return (
        <>
            <section id="main">
                <h1 className="title">Current Trips</h1>
                <fieldset className="current_trip">{
                    trips.map(trip => {
                        return <section key={`trip--${trip.id}`} className="trip">
                            <div className="trip__from">From: {trip.from_address}</div>
                            <div className="trip__destination">To: {trip.destination}</div>
                            <div className="trip__date">Start Date: {trip.start_date}</div>
                            <div className="trip__miles">Current miles: {trip.total_miles} mi.</div>
                            <div className="trip__loaded">Loaded? {trip.loaded}</div>
                            <div className="trip__plate">Plate Number: {trip.truck.plate_number}</div>
                            <p></p>
                        </section>

                    })
                }
                    {/* {
                        currentTrip(trip => {
                            return <section key={`trip--${trip.id}`} className="trip">
                                <div className="trip__from">From: {trip.from_address}</div>
                                <div className="trip__destination">To: {trip.destination}</div>
                                <div className="trip__date">Start Date: {trip.start_date}</div>
                                <div className="trip__miles">Current miles: {trip.total_miles} mi.</div>
                                <div className="trip__loaded">Loaded? {trip.loaded}</div>
                                <div className="trip__plate">Plate Number: {trip.truck.plate_number}</div>
                            </section>
                        })
                    } */}
                </fieldset>
                <div className="btn_trip">
                    <fieldset className="flex">
                        <h1 className="title">Fuel services</h1>
                        {/* <button className="btn_2" >
                            Done
                        </button> */}
                    </fieldset>
                </div>
                <fieldset className="current_fuel">
                    {
                        fuel.map(trip => {
                            return <section key={`trip--${trip.id}`} className="trip">
                                <div className="trip__from">Fuel price: ${trip.fuel_price}</div>
                                <div className="trip__destination">Gallons: {trip.gallons_fuel}</div>
                                <div className="trip__date">Fuel Date: {trip.fuel_date}</div>
                                <div className="trip__miles">Total fuel cost: ${trip.total_fuel_cost}</div>
                                {/* <button>
                                    <Link to={`/trips/${trip.id}/edit`} > Edit </Link>
                                </button>
                                <button>
                                    <Link to={`/trips`} > Delete </Link>
                                </button> */}
                            </section>
                        })
                    }
                </fieldset>

            </section >
        </>
    )
}


