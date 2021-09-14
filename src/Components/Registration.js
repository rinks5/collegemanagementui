import React from 'react'
import axios from "axios";
import { useState } from 'react';

export const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [post, setPost] = useState(null);

    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

    const submit = (e) => {
        e.preventDefault();
        if (!email || !password || !firstName || !lastName) {
            alert("Info required")
        }
        else {
            axios
            .post(baseURL, {
              title: "Hello World!",
              body: "This is a new post."
            })
            .then((response) => {
              setPost(response.data);
            });
        }
    }
    
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={submit}>
            <div className="form-group text-left">
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    className="form-control" 
                    id="firstName" 
                    placeholder="First Name"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  
                    className="form-control" 
                    id="lastName" 
                    placeholder="Last Name"
                />
            </div>
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
                Register
            </button>
        </form>
    </div>
    )
}
