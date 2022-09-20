import React, { useEffect, useState } from "react";
import { getTrips } from "./tripManager"
import { Link, useHistory, useParams } from "react-router-dom";

export const MyTrips = () => {
    const [trips, setTrips] = useState([])
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        getTrips().then(data => setTrips(data))
    }, [])

    // const handleView = () => {
    //     history.push(`/trips/${parseInt(tripId)}`)
    // }

    return (
        <>
            <section>
                <h1>My Trips</h1>
                <fieldset className="current_trip">
                    {
                        trips.map(trip => {
                            return <section key={`trip--${trip.id}`} className="trip">
                                <div> <h1 key={trip.id}>{trip.id}</h1></div>
                                <div className="trip__from">From: {trip.from_address}</div>
                                <div className="trip__destination">To: {trip.destination}</div>
                                <div className="trip__date">Start Date: {trip.start_date}</div>
                                <div className="trip__miles">Current miles: {trip.total_miles} mi.</div>
                                <div className="trip__loaded">Loaded? {trip.loaded}</div>
                                <div className="trip__plate">Plate Number: {trip.truck.plate_number}</div>
                                <div className="btn_trip">
                                    <button className="btn_1">
                                        <Link to={`/trips/view/${trip.id}`} > View</Link>
                                    </button>
                                </div>
                            </section>
                        })
                    }
                </fieldset>

            </section >
        </>
    )
}


