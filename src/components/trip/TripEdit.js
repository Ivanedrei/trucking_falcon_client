import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getTrucks } from "../truck/truckManager"
import { getTripById, updateMyTrip } from "./tripManager"


export const TripEdit = () => {
    const history = useHistory()
    const [trucks, setTrucks] = useState([])

    const { id } = useParams()

    const [trip, setTrip] = useState({
        employee: 1,
        from_address: "",
        destination: "",
        start_date: "2022-09-22",
        total_miles: 1,
        truck: 1,
        // loaded: checked,
        finish_date: "2022-09-23"
    })

    const updateExistingTrip = evt => {
        // Prevent form from being submitted
        evt.preventDefault()

        const updateTrip = {
            id: trip.id,
            from_address: trip.from_address,
            destination: trip.destination,
            start_date: parseInt(trip.start_date),
            total_miles: parseInt(trip.total_miles),
            truck: parseInt(trip.truck),
            loaded: parseInt(trip.loaded),
            finish_date: parseInt(trip.finish_date)
        }
        updateMyTrip(updateTrip)
            .then(() => history.push("/trips"))
        console.log(updateTrip)
    }

    useEffect(() => {
        getTrucks().then(setTrucks)
        if (id) {
            getTripById(parseInt(id))
                .then(editTrip => {
                    setTrip({
                        id: editTrip.id,
                        from_address: editTrip.from_address,
                        destination: editTrip.destination,
                        start_date: editTrip.start_date,
                        total_miles: editTrip.total_miles,
                        truck: editTrip.truck,
                        loaded: editTrip.loaded,
                        finish_date: editTrip.finish_date
                    })
                })
        }
    }, [id])

    const changeTripState = (domEvent) => {
        const newTrip = { ...trip }
        let selectedVal = domEvent.target.value
        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTrip[domEvent.target.name] = selectedVal
        setTrip(newTrip)
    }

    const handleChange = () => {
        setChecked(!checked);
    };

    const [checked, setChecked] = useState({})


    return (
        <form className="tripForm">
            <h2 className="tripForm__title">Update Trip</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startAddress">Start Address:</label>
                    <input type="text" id="startAddress" onChange={changeTripState} required autoFocus
                        className="form-control" placeholder={trip.from_address} value={trip.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="destination">Destination:</label>
                    <input type="text" id="destination" onChange={changeTripState} required autoFocus
                        className="form-control" placeholder={trip.destination} value={trip.maker} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" id="startDate" onChange={changeTripState} required autoFocus
                        className="form-control" placeholder={trip.start_date} value={trip.numberOfPlayers} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="totalMiles">Total Miles:</label>
                    <input type="number" id="totalMiles" onChange={changeTripState} required autoFocus
                        className="form-control" placeholder={trip.total_miles} value={trip.skillLevel} />
                </div>
            </fieldset>
            <div className="form-group">
                <label htmlFor="truck">Plate Number: </label>
                <select name="truck" className="form-control" id="id"
                    value={trip.truck}
                    onChange={changeTripState}>
                    <option value={trip.truck.plate_number}> select one </option>
                    {trucks.map(truck => (
                        <option key={truck.id} value={truck.id}> {truck.plate_number}</option>
                    ))} </select>
            </div>
            <fieldset>
                <label> Loaded Truck?</label>
                <input type="checkbox" checked={checked} onChange={handleChange} id="id"></input>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="finishDate">Finish Date:</label>
                    <input type="text" id="finishDate" onChange={changeTripState} required autoFocus
                        className="form-control" placeholder={trip.finish_date} value={trip.tripTypeId} />
                </div>
            </fieldset>

            < button type="submit" onClick={updateExistingTrip}
                // onClick={evt => {
                //     // Prevent form from being submitted
                //     evt.preventDefault()

                //     const updateTrip = {
                //         from_address: trip.from_address,
                //         destination: trip.destination,
                //         start_date: parseInt(trip.start_date),
                //         total_miles: parseInt(trip.total_miles),
                //         truck: parseInt(trip.truck),
                //         loaded: parseInt(trip.loaded),
                //         finish_date: parseInt(trip.finish_date)
                //     }

                //         // Send POST request to your API


                //         (updateMyTrip(updateTrip, id)
                //             .then(() => history.push("/trips")))
                //     console.log(updateTrip)
                // }
                // } 
                className="btn btn-primary" > Save </button >
        </form >
    )
}