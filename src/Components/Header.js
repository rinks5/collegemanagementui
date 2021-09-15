import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
           <p className="navbar-brand " >{props.title}</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link className="nav-link active" aria-current="page" to="/">Log Out</Link>
                        </li>
                      
                    </ul>
                   
                </div>
    </nav>
    )
}
