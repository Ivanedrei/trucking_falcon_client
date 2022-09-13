import React, { useRef, useNavigate } from "react"
import { Link, Router } from "react-router-dom";

// import "./Login.css"


export const Login = ({ setAuthUser }) => {
    const username = useRef()
    const existDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <Router>
            <main className="container--login">
                <dialog className="dialog dialog--auth" ref={existDialog}>
                    <div>User does not exist</div>
                    <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
                </dialog>

                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1>Welcome to Trucking-Falcon</h1>
                        <h2>Please sign in</h2>
                        <fieldset>
                            <label htmlFor="inputUsername"> User Name </label>
                            <input ref={username} type="username"
                                id="username"
                                className="form-control"
                                placeholder="user name"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit">
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </section>
                <section className="link--register">
                    {/* <Router> */}
                    <Link to="/register">Create an Account</Link>
                    {/* </Router> */}
                </section>
            </main >
        </Router>
    )
}

