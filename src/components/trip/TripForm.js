import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getTrucks } from "../truck/truckManager"
import { createTrip } from './tripManager'
import "../../Home.css"

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
            <h2 className="title">Add New Trip</h2>
            <div className="flex_form">
                <div className="form-group input_form1">
                    <label htmlFor="start" id="title">Start Address: </label>
                    <input type="text" name="from_address" required autoFocus className="form-control1"
                        value={currentTrip.start}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="destination" id="title">Destination: </label>
                    <input type="text" name="destination" required autoFocus className="form-control1"
                        value={currentTrip.destination}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="date" id="title">Start Date: </label>
                    <input type="text" name="start_date" required autoFocus className="form-control1"
                        value={currentTrip.date}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group input_form1">
                    <label htmlFor="date" id="title"> Finish Date: </label>
                    <input type="text" name="finish_date" required autoFocus className="form-control1"
                        value={currentTrip.finishDate}
                        onChange={changeTripState}
                    />
                </div>
                <div className="flex_row even_out">
                    <div className="form-group input_form1">
                        <label htmlFor="milage" id="title">Truck Milage: </label>
                        <input type="text" name="total_miles" required autoFocus className="form-control2"
                            value={currentTrip.milage}
                            onChange={changeTripState}
                        />
                    </div>
                    <div className="form-group input_form1">
                        <label htmlFor="truck" id="title">Plate Number: </label>
                        <select name="truck" className="form-control" id="tripId"
                            value={currentTrip.truck}
                            onChange={changeTripState}>
                            <option value="0"> select one </option>
                            {trucks.map(truck => (
                                <option key={truck.id} value={truck.id}> {truck.plate_number}</option>
                            ))} </select>
                    </div>
                </div>
                <div className="truck">
                    <label id="title"> Loaded Truck?</label>
                    <input type="checkbox" checked={checked} onChange={handleChange} id='checked'></input>

                </div>

                <div className="flexy">
                    <button className="btn" onClick={evt => {
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
            </div >
        </form >
    )
}