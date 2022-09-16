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
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}

export const createTrip = (tripId) => {
    return fetch(`http://localhost:8000/delivery/${tripId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}