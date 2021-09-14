import React from 'react'
import { useState } from 'react';

export const StudentApplicationScreen = () => {


    const [jeemarks, setJee] = useState("")
    const [course, setCourse] = useState("")
    const [perten, setTen] = useState("")
    const [pertwelve, setTwelve] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!jeemarks || !course || !perten || !pertwelve) {
            alert("Info required")
        }
        else {
            //props.addUser(email, password,firstName,lastName);
        }
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={submit}>
            <div className="form-group text-left">
            <label htmlFor="course">Course</label>
            <select 
        onChange={(e) => setCourse(e.target.value)}
      >
       <option value="Computer Science">Computer Science</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Mechanical">Mechanical Engineering</option>
        <option value="Electrical">Computer Science</option>
        <option value="Civil">Information Technology</option>
      </select>
            </div>
            <div className="form-group text-left">
                <label htmlFor="jeeMarks">Jee Marks</label>
                <input type="number" value={jeemarks} onChange={(e) => setJee(e.target.value)}  
                    className="form-control" 
                    id="jeeMarks" 
                    placeholder="Jee Marks"
                />
            </div>
            <div className="form-group text-left">
            <label htmlFor="perTen">10 Percentage</label>
            <input type="number" value={perten} onChange={(e) => setTen(e.target.value)}
                   className="form-control" 
                   id="perTen" 
                   aria-describedby="emailHelp" 
                   placeholder="10 Percentage"
            />
            </div>
            <div className="form-group text-left">
                <label htmlFor="perTwelve">12 Percentage</label>
                <input type="number" value={pertwelve} onChange={(e) => setTwelve(e.target.value)}
                    className="form-control" 
                    id="perTwelve" 
                    placeholder="12 Percentage"
                />
            </div>
            <br/>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>
    )
}
