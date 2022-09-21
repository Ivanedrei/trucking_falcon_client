import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getTrucks } from "../truck/truckManager"
import { createTrip } from './tripManager'

export const TripForm = () => {
    const history = useHistory()
    const [checked, setChecked] = useState(false)
    const [currentTrip, setCurrentTrip] = useState({
        employee: 1,
        from_address: "",
        destination: "",
        start_date: "2022-09-22",
        total_miles: 1,
        truck: 1,
        // loaded: checked,
        finish_date: "2022-09-23"
    })
    const [trucks, setTrucks] = useState([])

    useEffect(() => {
        getTrucks().then(data => setTrucks(data))
        console.log("test")
    }, [])

    const changeTripState = (domEvent) => {
        console.log(currentTrip)
        const newTrip = { ...currentTrip }
        let selectedVal = domEvent.target.value
        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTrip[domEvent.target.name] = selectedVal
        setCurrentTrip(newTrip)
    }

    const handleChange = () => {
        setChecked(!checked);
    };


    return (
        <form className="tripForm">
            <h2 className="tripForm__title">Add New Trip</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start">Start Address: </label>
                    <input type="text" name="from_address" required autoFocus className="form-control"
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
                    <input type="text" name="start_date" required autoFocus className="form-control"
                        value={currentTrip.date}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="milage">Truck Milage: </label>
                    <input type="text" name="total_miles" required autoFocus className="form-control"
                        value={currentTrip.milage}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="truck">Plate Number: </label>
                    <select name="truck" className="form-control" id="tripId"
                        value={currentTrip.truck}
                        onChange={changeTripState}>
                        <option value="0"> select one </option>
                        {trucks.map(truck => (
                            <option key={truck.id} value={truck.id}> {truck.plate_number}</option>
                        ))} </select>
                </div>
                <fieldset>
                    <label> Loaded Truck?</label>
                    <input type="checkbox" checked={checked} onChange={handleChange}></input>

                </fieldset>
                <div className="form-group">
                    <label htmlFor="date"> Finish Date: </label>
                    <input type="text" name="finish_date" required autoFocus className="form-control"
                        value={currentTrip.finishDate}
                        onChange={changeTripState}
                    />
                </div>

                <div className="form-group">
                    <button className="btn_form" onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const trip = {
                            from_address: currentTrip.from_address,
                            destination: currentTrip.destination,
                            start_date: currentTrip.start_date,
                            total_miles: parseInt(currentTrip.total_miles),
                            truck: currentTrip.truck,
                            loaded: checked,
                            finish_date: currentTrip.finish_date
                        }

                        // const trip = {
                        //     employee: 1,
                        //     from_address: "Ivan's test",
                        //     destination: "my destination",
                        //     start_date: "2022-08-20T12:00:50.637635Z",
                        //     total_miles: 1000,
                        //     truck: 1,
                        //     loaded: true,
                        //     finish_date: "2022-08-20T12:00:50.637635Z"
                        // }
                        // Send POST request to your API
                        createTrip(trip)
                            .then(() => history.push("/home"))
                    }}>
                        Submit
                    </button>
                </div>
            </fieldset >
        </form >
    )
}