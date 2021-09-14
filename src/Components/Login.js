import React from 'react'
import { useState } from 'react';

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Info required")
        }
        else {
            props.login(email, password);
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
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                />
            </div>
            <br/>
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
