import React from "react";
import { NavLink } from "react-router-dom";
import "./CalcMenu.css";

function CalMenu(){
    return<>
        <nav className="navbar">
            <div className="nav-container">
                

            <ul className="nav-menu">
                <li className="nav-item">
                <NavLink exact to="/molding" activeClassName="active" className="nav-links">
                    Molding Calculations
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/hopper" className="nav-links">
                    Hopper Size Calculations
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/short" className="nav-links">
                    Short Size Estimation
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/regrind" className="nav-links">
                    Regrind Calculations
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/water" className="nav-links">
                    Water Flow Calculations
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/process" className="nav-links">
                    Process Transfer
                </NavLink> 
                </li>

                <li className="nav-item">
                <NavLink exact to="/conversions" className="nav-links conversion">
                    Conversions
                </NavLink> 
                </li>
            </ul>
            </div>
        </nav>
    </>
}

export default CalMenu;