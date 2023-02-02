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
            <div>
                <div className="form-group">
                    <label htmlFor="from_address" className="description">Start Address:</label>
                    <input type="text" id="from_address" onChange={handleFieldChange} required autoFocus
                        className="form-control" placeholder={trip.from_address} value={trip.from_address} />
                </div>
                <div className="form-group">
                    <label htmlFor="destination" className="description">Destination:</label>
                    <input type="text" id="destination" onChange={handleFieldChange} required autoFocus
                        className="form-control" placeholder={trip.destination} value={trip.destination} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate" className="description">Start Date:</label>
                    <input type="text" id="start_date" onChange={handleFieldChange} required autoFocus
                        className="form-control" placeholder={trip.start_date} value={trip.start_date} />
                </div>
                <div className="form-group">
                    <label htmlFor="totalMiles" className="description">Total Miles:</label>
                    <input type="number" id="total_miles" onChange={handleFieldChange} required autoFocus
                        className="form-control" placeholder={trip.total_miles} value={trip.total_miles} />
                </div>
                <section className="flex_row">
                    <div className="form-group">
                        <label htmlFor="truck" className="description">Plate Number: </label>
                        <select name="truck" className="form-control" id="truck"
                            value={trip.truck} //your getting the id from the useEffect on line 64
                            onChange={handleFieldChange}>
                            <option value=""> select one </option>
                            {trucks.map(truck => (
                                <option key={truck.id} value={truck.id}> {truck.plate_number}</option>
                            ))} </select>
                    </div>
                    <div>
                        <label className="description"> Loaded Truck?</label>
                        <input type="checkbox" checked={checked} onChange={handleChange} id="checked"></input>

                    </div>
                </section>
                <div>
                    <div className="form-group">
                        <label htmlFor="finishDate" className="description">Finish Date:</label>
                        <input type="text" id="finish_date" onChange={handleFieldChange} required autoFocus
                            className="form-control" placeholder={trip.finish_date} value={trip.finish_date} />
                    </div>
                </div>
            </div>
            <div className="flexy">
                <button type="submit" disabled={isLoading}
                    onClick={updateExistingTrip}
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
                    className="btn_1 btn" > Save </button>
            </div>
        </form >
    )
}


// import React, { useState, useEffect } from "react"
// import { useHistory, useParams } from 'react-router-dom'
// import { getTrucks } from "../truck/truckManager"
// import { getTripById, updateMyTrip } from "./tripManager"


// export const TripEdit = () => {
//     const history = useHistory()
//     const [trucks, setTrucks] = useState([])
//     const [isLoading, setIsLoading] = useState(false);


//     const { tripId } = useParams()

//     const [trip, setTrip] = useState({
//         employee: 1,
//         from_address: "",
//         destination: "",
//         start_date: "2022-09-22",
//         total_miles: 1,
//         truck: 1,
//         // loaded: checked,
//         finish_date: "2022-09-23"
//     })

//     const updateExistingTrip = evt => {
//         // Prevent form from being submitted
//         evt.preventDefault()
//         setIsLoading(true);


//         const updateTrip = {
//             id: tripId,
//             from_address: trip.from_address,
//             destination: trip.destination,
//             start_date: parseInt(trip.start_date),
//             total_miles: parseInt(trip.total_miles),
//             truck: parseInt(trip.truck),
//             loaded: parseInt(trip.loaded),
//             finish_date: parseInt(trip.finish_date)
//         }
//         updateMyTrip(updateTrip)
//             .then(() => history.push("/trips"))
//         console.log(updateTrip)
//     }

//     useEffect(() => {
//         getTrucks().then(setTrucks)
//         if (tripId) {
//             getTripById(tripId)
//                 .then(editTrip => {
//                     setTrip({
//                         id: editTrip.id,
//                         from_address: editTrip.from_address,
//                         destination: editTrip.destination,
//                         start_date: editTrip.start_date,
//                         total_miles: editTrip.total_miles,
//                         truck: editTrip.truck,
//                         loaded: editTrip.loaded,
//                         finish_date: editTrip.finish_date
//                     });
//                     setIsLoading(false);
//                 })
//         }
//     }, [])

//     const changeTripState = (domEvent) => {
//         const newTrip = { ...trip }
//         let selectedVal = domEvent.target.value
//         if (domEvent.target.id.includes("Id")) {
//             selectedVal = parseInt(selectedVal)
//         }
//         newTrip[domEvent.target.name] = selectedVal
//         setTrip(newTrip)
//     }

//     // test from animalEditForm: Kennels
//     // const handleFieldChange = evt => {
//     //     const stateToChange = { ...animal };
//     //     stateToChange[evt.target.id] = evt.target.value;
//     //     setAnimal(stateToChange);
//     // };

    // const handleChange = () => {
    //     setChecked(!checked);
    // };

    // const [checked, setChecked] = useState({})
