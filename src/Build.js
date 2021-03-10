import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import { pass } from "./Model";
import { NavLink } from "react-router-dom";

export default class Build extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topping: [],
      price: "",
      cost: 0,
    };
  }
  componentDidMount() {
    axios
      .get(`https://mernpizzeria.herokuapp.com/pizza/toppings`)
      .then((resp) => {
        // console.log(resp.data);
        this.setState({ topping: resp.data });
      })
      .catch((err) => console.log(err));
  }

  handleCheck = (e, t) => {
    if (e.target.checked) {
      this.setState({
        cost: this.state.cost + t.price,
      });
       pass.setIngredients(t);
    } else {
      this.setState({
        cost: this.state.cost - t.price,
      });
     
    }
  };

  buttonClickHandler(){
    pass.setTotalIngredients(this.state.cost);
  }

  render() {
    return (
      <div>
        <div className="container mb-5">
          <br />
          <br />
          <br />
          {this.state.topping.map((top) => (
            <div className="row text-center" key={top.id}>
              <div className="card col-md-10 mx-auto mb-2">
                <div className="row ">
                  <div className="col-md-4 ">
                    <img
                      alt="img"
                      src={top.image}
                      className="topping-img"
                    ></img>
                  </div>
                  <div className="col-md-4">
                    <div className="pull-left ">{top.tname}</div>
                  </div>
                  <div className="col-md-1">
                    <div>₹{top.price}</div>
                  </div>
                  <div className="col-md-1">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(e) => this.handleCheck(e, top)}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-8 mx-auto">
            <h3>Total cost:{this.state.cost}</h3>
          </div>
        </div>

        <div className="text-center">
          <NavLink to="/Cart">
            <button
              className="btn btn-primary"
              style={{ background: "black" }}
              type="button"
              onClick={() => this.buttonClickHandler()}
            >
              <h5>Build Your Pizza</h5>
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
