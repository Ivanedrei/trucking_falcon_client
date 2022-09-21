export const getTrucks = () => {
    return fetch("http://localhost:8000/truck", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("t_token")}`
        }
    })
        .then(response => response.json())
}