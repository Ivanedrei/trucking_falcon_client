import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createTrip, getTrips } from './tripManager'

export const TripForm = () => {
    const history = useHistory()
    const [checked, setChecked] = useState({})
    const [currentTrip, setCurrentTrip] = useState([])

    useEffect(() => {
        getTrips().then(data => setCurrentTrip(data))
        console.log("test")
    }, [])

    const changeTripState = (domEvent) => {
        const newTrip = { ...currentTrip }
        let selectedVal = domEvent.target.value
        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
            console.log(selectedVal)
        }
        newTrip[domEvent.target.id] = selectedVal
        setCurrentTrip(newTrip)
    }
    const handleChange = () => {
        setChecked(!checked);
    };


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Add New Trip</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start">Start Address: </label>
                    <input type="text" name="start" required autoFocus className="form-control"
                        value={currentTrip.start}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="destination">Destination: </label>
                    <input type="text" name="destination" required autoFocus className="form-control"
                        value={currentTrip.destination}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Start Date: </label>
                    <input type="text" name="date" required autoFocus className="form-control"
                        value={currentTrip.date}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="milage">Truck Milage: </label>
                    <input type="text" name="milage" required autoFocus className="form-control"
                        value={currentTrip.milage}
                        onChange={changeTripState}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="plate">Plate number: </label>
                    <select name="plate" className="form-control"
                        value={currentTrip.plateNum} />
                    <option value="0"> select an event </option>
                    {trip.map(event => (
                        <option key={event.id} value={event.title}> {event.title}</option>
                    ))}
                    // onChange={changeEventState}
                </div> */}
                <fieldset>
                    <label> Loaded Truck?</label>
                    <input type="checkbox" checked={checked} onChange={handleChange}></input>

                </fieldset>
                <div className="form-group">
                    <label htmlFor="date"> Finish Date: </label>
                    <input type="text" name="date" required autoFocus className="form-control"
                        value={currentTrip.finishDate}
                        onChange={changeTripState}
                    />
                </div>

                <div className="form-group">
                    <button className="btn_form" onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        // const trip = {
                        //     employee: 1,
                        //     from_address: currentTrip.start,
                        //     destination: currentTrip.destination,
                        //     start_date: parseInt(currentTrip.date),
                        //     total_miles: parseInt(currentTrip.milage),
                        //     truck: 1,
                        //     loaded: currentTrip.loaded,
                        //     finish_date: currentTrip.finishDate
                        // }

                        const trip = {
                            employee: 1,
                            from_address: "Ivan's test",
                            destination: "my destination",
                            start_date: "2022-08-20T12:00:50.637635Z",
                            total_miles: 1000,
                            truck: 1,
                            loaded: true,
                            finish_date: "2022-08-20T12:00:50.637635Z"
                        }
                        // Send POST request to your API
                        createTrip(trip)
                            .then(() => history.push("/home"))
                    }}>
                        Done
                    </button>
                </div>
            </fieldset >
        </form >
    )
}