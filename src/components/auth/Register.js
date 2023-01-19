import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Register.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("t_token", res.token)
                        history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };


    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <div>
                    <img src=""></img>
                </div>
                <div className="flexer">
                    <div className="font">
                        <label htmlFor="firstName"> </label>
                        <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First Name" required autoFocus />
                    </div>
                    <div className="font">
                        <label htmlFor="lastName"> </label>
                        <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="flexer2">
                    <div className="font">
                        <label htmlFor="inputUsername"> </label>
                        <input ref={username} type="text" name="username" className="form-control input" placeholder="Username" required />
                    </div>
                    <div className="font">
                        <label htmlFor="inputEmail"> </label>
                        <input ref={email} type="text" name="email" className="form-control input" placeholder="Email Address" required />
                    </div>
                    <div className="font">
                        <label> Are You a Driver? </label>
                        <input id="checkbox" type="checkbox" checked={checked} onChange={handleChange}></input>

                    </div>
                    <div className="font">
                        <label htmlFor="inputPassword"> </label>
                        <input ref={password} type="password" name="password" className="form-control input" placeholder="Password" required />
                    </div>
                    <div className="font">
                        <label htmlFor="verifyPassword"> </label>
                        <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control input" placeholder="Verify password" required />
                    </div>
                </div>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
