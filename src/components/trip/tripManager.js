export const getTrips = () => {
    return fetch("http://localhost:8000/delivery", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}

export const getFuel = () => {
    return fetch("http://localhost:8000/fuel", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}

export const createTrip = (trip) => {
    console.log(trip)
    return fetch("http://localhost:8000/delivery", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    })
        .then(response => response.json())
}

export const getTripById = (id) => {
    return fetch(`http://localhost:8000/delivery/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}

export const getFuelByDeliveryId = (fuelId) => {
    return fetch(`http://localhost:8000/fuel/${fuelId}`, {
        method: "GET",
        headers: {
            "Authorization": `token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteTrip = (tripId) => {
    return fetch(`http://localhost:8000/delivery/${tripId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `token ${localStorage.getItem("t_token")}`
        }
    })
        .then(getTrips)
}

// export const updateMyTrip = (tripId) => {
//     // console.log(id)
//     return fetch(`http://localhost:8000/delivery/${tripId}`, {
//         method: "PUT",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("t_token")}`,
//             "content-Type": "application/json"
//         },
//         body: JSON.stringify()
//     })
//         .then(response => response.json())
// }

export const updateMyTrip = (editedTrip) => {
    return fetch(`http://localhost:8000/delivery/${editedTrip.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTrip)
    })
}