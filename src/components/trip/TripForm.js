import React from "react"
// import { useHistory, useParams } from 'react-router-dom'
// import { createTrip } from './tripManager'
// , { useState, useEffect } 

export const TripForm = () => {
    // const history = useHistory()

    // const [checked, setChecked] = useState({})
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    // const [currentTrip, setCurrentTrip] = useState({
    //     skillLevel: 1,
    //     numberOfPlayers: 0,
    //     title: "",
    //     maker: "",
    //     gameTypeId: 0
    // })

    // const changeTripState = (domEvent) => {
    //     // TODO: Complete the onChange function
    //     /* When changing a state object or array,
    //    always create a copy, make changes, and then set state.*/
    //     const newTrip = { ...trip }
    //     let selectedVal = domEvent.target.value
    //     // forms always provide values as strings. But we want to save the ids as numbers.
    //     if (domEvent.target.id.includes("Id")) {
    //         selectedVal = parseInt(selectedVal)
    //     }
    //     /* Game is an object with properties.
    //     Set the property to the new value
    //     using object bracket notation. */
    //     newTrip[domEvent.target.id] = selectedVal
    //     // update state
    //     setCurrentTrip(newTrip)
    // }
    // const handleChange = () => {
    //     setChecked(!checked);
    // };


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Add New Trip</h2>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Start Address: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                    // value={currentGame.title}
                    // onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maker">Destination: </label>
                    <input type="text" name="maker" required autoFocus className="form-control"
                    // value={currentGame.maker}
                    // onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_players">Date: </label>
                    <input type="text" name="number_of_players" required autoFocus className="form-control"
                    // value={currentGame.numberOfPlayers}
                    // onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skill_level">Truck Milage: </label>
                    <input type="text" name="skill_level" required autoFocus className="form-control"
                    // value={currentGame.skillLevel}
                    // onChange={changeTripState}
                    />
                </div>
                <fieldset>
                    <label> Loaded Truck?</label>
                    <input type="checkbox" checked={checked} onChange={handleChange}></input>

                </fieldset>
                <div className="form-group">
                    <button className="btn_form" onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const trip = {
                            start: currentTrip.start,
                            destination: currentTrip.destination,
                            date: parseInt(currentTrip.date),
                            milage: parseInt(currentTrip.milage),
                            plateNum: parseInt(currentTrip.plateNum),
                            loaded: currentTrip(currentTrip.loaded)
                        }

                        // Send POST request to your API
                        createTrip(trip)
                            .then(() => history.push("/home"))
                    }}>
                        Done
                    </button>
                </div>
            </fieldset > */}
        </form >
    )
}