import React, { useEffect, useState } from "react";
import { getFuel, getTripById, deleteTrip } from "./tripManager";
import { Link, useHistory, useParams } from "react-router-dom";

export const TripView = () => {
    const [trip, setTrip] = useState({ truck_id: {} })
    const [fuel, setFuel] = useState([])

    const { tripId } = useParams()

    const history = useHistory()

    useEffect(() => {
        getTripById(tripId).then(data => setTrip(data))
        getFuel().then(data => setFuel(data))
    }, [tripId])



    return (
        <>
            <section>
                <h1>Current Trip</h1>
                <fieldset className="current_trip">
                    <section className="trip">
                        <div className="trip__from">From: {trip.from_address}</div>
                        <div className="trip__destination">To: {trip.destination}</div>
                        <div className="trip__date">Start Date: {trip.start_date}</div>
                        <div className="trip__miles">Current miles: {trip.total_miles} mi.</div>
                        <div className="trip__loaded">Loaded? {trip.loaded}</div>
                        <div className="trip__plate">Plate Number: {trip.truck_id?.plate_number}</div>
                        <div className="trip__date">Finish Date: {trip.finish_date}</div>
                    </section>
                </fieldset>
                <div className="btn_trip">
                    <fieldset className="flex">
                        <button>
                            <Link to={`/trips`} > Back </Link>
                        </button>
                        <button>
                            <Link to={`/trips/edit/${trip.id}`} > Edit </Link>
                        </button>
                        <button onClick={() => deleteTrip(parseInt(tripId)).then(() => history.push("/trips"))} >Delete</button>
                    </fieldset>
                </div>
                <fieldset className="current_fuel">
                    <section>
                        { //iterating -> looping
                            fuel.map(f => {
                                if (parseInt(tripId) === parseInt(f.delivery_id)) {
                                    return <section key={`f--${f.id}`} className="f">
                                        <div className="f__from">Fuel price: ${f.fuel_price}</div>
                                        <div className="f__destination">Gallons: {f.gallons_fuel}</div>
                                        <div className="f__date">Fuel Date: {f.fuel_date}</div>
                                        <div className="f__miles">Total fuel cost: ${f.total_fuel_cost}</div>
                                        <div>
                                            {f.delivery_id}
                                        </div>
                                    </section>
                                }
                            })
                        }
                    </section>
                </fieldset>
            </section>
        </>
    )
}


