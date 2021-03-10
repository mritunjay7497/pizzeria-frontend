import React, { Component } from "react";
import "./Home.css";

export default class Go extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-3">Thank You!</h1>
          <p className="lead">
            <strong>Please check your email</strong> for bill and thank you for
            shopping
          </p>
          <hr />
          <p>
            Having trouble? <span>Contact us</span>
          </p>
          <p className="lead">
            <span className="btn go-button btn-sm" role="button">
              Continue to homepage
            </span>
          </p>
        </div>
      </div>
    );
  }
}
