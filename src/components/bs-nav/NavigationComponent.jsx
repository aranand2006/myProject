import React from 'react';
import { NavLink } from 'react-router-dom';

import SwitchRoutes from '../../routes';

import './NavigationComponent.css';

var logo = require('../../logo.svg').default;

const NavigationComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex flex-column align-items-center" to="/">Stitchflow - Coding Assessment</NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <NavLink end className="nav-link d-flex flex-column align-items-center" to="/">
                                    <i className="bi bi-table"></i>
                                    <span>Users List</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/about">
                                    <i className="bi bi-pencil-fill"></i>
                                    <span>User Register</span>
                                </NavLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>

            <>
                {SwitchRoutes}
            </>
        </>
    );
};

export default NavigationComponent;