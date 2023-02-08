import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getTripById, updateMyTrip } from "./tripManager"
import { useHistory } from "react-router-dom";
import { getTrucks } from "../truck/truckManager"
import "../../Home.css"


export const TripEdit = () => {

    const [trucks, setTrucks] = useState([])
    const [checked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const { tripId } = useParams();
    const history = useHistory();

    const handleChange = () => {
        setChecked(!checked);
    };

    const [trip, setTrip] = useState({
        employee: 1,
        from_address: "",
        destination: "",
        start_date: "2022-09-22",
        total_miles: 1,
        truck: "",
        finish_date: "2022-09-23"
    });

    const handleFieldChange = evt => {
        const stateToChange = { ...trip };
        stateToChange[evt.target.id] = evt.target.value;
        setTrip(stateToChange);
    };

    useEffect(() => {
        console.log(trip)
    }, [trip])

    const updateExistingTrip = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedTrip = {
            id: tripId,
            from_address: trip.from_address,
            destination: trip.destination,
            start_date: trip.start_date,
            total_miles: trip.total_miles,
            truck: trip.truck,
            loaded: checked,
            finish_date: trip.finish_date
        };

        updateMyTrip(editedTrip)
            .then(() => history.push("/trips")
            )
        // console.log(editedTrip)
    }

    useEffect(() => {
        if (tripId) {
            getTrucks().then(setTrucks);
            getTripById(tripId)
                .then(trip => {
                    setTrip({ ...trip, truck: trip.truck.id }); // first get all my info from server, then over wright to get truck (id).
                    setChecked(trip.loaded)
                    setIsLoading(false);
                });
        }
    }, [tripId]);


    return (
        <form className="tripForm">
            <h2 className="tripForm__title title">Update Trip</h2>
            <div className="flex_form">
                <div className="form-group input_form1">
                    <label htmlFor="from_address" ></label>
                    <input type="text" id="from_address" onChange={handleFieldChange} required autoFocus
                        className="form-control1" placeholder={trip.from_address} value={trip.from_address} />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="destination" ></label>
                    <input type="text" id="destination" onChange={handleFieldChange} required autoFocus
                        className="form-control1" placeholder={trip.destination} value={trip.destination} />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="startDate" ></label>
                    <input type="text" id="start_date" onChange={handleFieldChange} required autoFocus
                        className="form-control1" placeholder={trip.start_date} value={trip.start_date} />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="finishDate"></label>
                    <input type="text" id="finish_date" onChange={handleFieldChange} required autoFocus
                        className="form-control1" placeholder={trip.finish_date} value={trip.finish_date} />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="totalMiles"></label>
                    <input type="number" id="total_miles" onChange={handleFieldChange} required autoFocus
                        className="form-control1" placeholder={trip.total_miles} value={trip.total_miles} />
                </div>
                {/* <section className="flex_row input_form1"> */}
                <div className="form-group input_form2">
                    <label htmlFor="truck" className="dec_edit">Plate Number: </label>
                    <select name="truck" className="form-control" id="truck"
                        value={trip.truck} //your getting the id from the useEffect on line 64
                        onChange={handleFieldChange}>
                        <option value=""> select one </option>
                        {trucks.map(truck => (
                            <option key={truck.id} value={truck.id}> {truck.plate_number}</option>
                        ))} </select>
                </div>
                <div className="form-group input_form2">
                    <label className="dec_edit "> Loaded Truck?</label>
                    <input type="checkbox" checked={checked} onChange={handleChange} id="checked"></input>

                </div>
                {/* </section> */}
            </div>
            <div className="flexy">
                <button type="submit" disabled={isLoading}
                    onClick={updateExistingTrip}
                    className="btn_1 btn" > Save </button>
            </div>
        </form >
    )
}
