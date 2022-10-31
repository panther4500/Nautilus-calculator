import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Area from "./area";
import "./conversions.css";

function Conversions() {
  return (
    <div>
      <h1 className="calculator-head">Conversions</h1>
      <div className="container-conv">
        <nav className="navbar-conv">
          <div className="nav-container-conv">
            <ul className="nav-menu-conv">
              <li className="nav-item-conv">
                
                 
                <NavLink
                  to="/conversions/area"
                  activeClassName="active"
                  className="nav-links-conv"
                >
                  Area 
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/hopper" className="nav-links-conv">
                  Distance
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/short" className="nav-links-conv">
                  Temperature
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/regrind" className="nav-links-conv">
                  Volume
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/water" className="nav-links-conv">
                  Weight
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/process" className="nav-links-conv">
                  Pressure
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/process" className="nav-links-conv">
                  Tonnage
                </NavLink>
              </li>

              <li className="nav-item-conv">
                <NavLink exact to="/process" className="nav-links-conv">
                  Pressure Covertor
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Conversions;
