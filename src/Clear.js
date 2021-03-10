import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Clear extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container mt-5 text-center">
          EK TOH PIZZA ORDER KRLE!!!
        </div>
        <div className="text-center">GO back to Order pizaa</div>
        <div className="text-center">
          <NavLink to="/Order">
            <button type="button" className=" btn btn-primary">
              GO BACK
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
