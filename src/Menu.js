import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./PizzeriaLogo.png";
import "./Home.css";
import { ImCart } from "react-icons/im";


export default class Menu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-light "
          style={{ backgroundColor: "#000000" }}
        >
          <NavLink to="/" activeClassName="active_class">
            <span className="navbar-brand text-white" href="#">
              <img
                src={logo}
                alt=""
                width="40"
                height="30"
                className="d-inline-block align-top"
              />
              PIZZERIA
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/Order">
                <span className="nav-item nav-link text-white">
                  Order Pizza <span className="sr-only">(current)</span>
                </span>
              </NavLink>
              <NavLink to="/Build">
                <span className="nav-item nav-link text-white">
                  Build Your Pizza
                </span>
              </NavLink>
            </div>
          </div>
          <NavLink to="/Cart">
            <button
              type="button"
              className="btn btn-dark pull-right"
              style={{ backgroundColor: "yellow" }}
            >
              <ImCart style={{ color: "black" }} className="float-bottom" />
              shopping cart
            </button>
          </NavLink>
        </nav>
      </div>
    );
  }
}
