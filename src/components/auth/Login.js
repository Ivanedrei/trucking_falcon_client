import React, { useRef } from "react"
import { Link, Redirect, useHistory } from "react-router-dom"
import "./Login.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
        // http://127.0.0.1:8000/login
        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("t_token", res.token);
                    < Redirect to={"/"} />
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section className="background">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="title_main">Welcome to Trucking Falcon</h1>
                    <div className="input_area">
                        <fieldset className="flex">
                            <div className="flex">
                                <img id="falcon" src="https://www.pngitem.com/pimgs/m/136-1364593_falcon-png-download-simple-falcon-logos-transparent-png.png" alt="falcon" ></img>
                            </div>
                            <div className="fieldset">
                                <label className="test" htmlFor="inputUsername">  </label>
                                <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
                            </div>
                            <div className="fieldset">
                                <label className="test" htmlFor="inputPassword">  </label>
                                <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                            </div>
                            <div className="fieldset">
                                <button className="btn" type="submit">Sign In</button>
                            </div>
                        </fieldset>
                    </div>
                    <section>
                        <button className="flex2 fieldset2">
                            <Link className="btn2" to="/register">Create an Account</Link>
                        </button>
                    </section>
                </form>
            </section>
        </main>
    )
}
