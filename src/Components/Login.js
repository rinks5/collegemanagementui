import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Info required")
        }
        else {
            axios.get('https://collegemanagement-backend.herokuapp.com/getUser?email=' + email + '&password=' + password)
                .then(res => {
                    const user = res.data;

                    if (user) {
                        localStorage.setItem("user", JSON.stringify(user))
                        if (user.type === "Admin") {
                            history.push("/admin");
                        }
                        else {
                            axios.get('https://collegemanagement-backend.herokuapp.com/getStudentDetail?id=' + user.id)
                                .then(res => {
                                    if (res.data[0] !== null) {
                                        history.push("/studentStatus");
                                    }
                                    else {
                                        history.push("/studentApplicaion");
                                    }
                                })

                        }
                    }
                    else {
                        alert("User not found")
                    }
                })
        }
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={submit}>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <br />
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
