import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { pass } from "./Model";
import veg from "./veg.png";
import non from "./non.png";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      price: "",
      value: 0,
    };
  }

  componentDidMount() {
    axios
      .get('https://mernpizzeria.herokuapp.com/pizza/pizza-menu')
      .then((resp) => {
        // console.log(resp.data);
        this.setState({ order: resp.data });
      })
      .catch((err) => console.log(err));
  }
  addValueHandler = (p) => {
    // console.log(p.price);
    // this.setState({
    //   value: this.state.value + parseInt(p.price),
    // });

    pass.addtocart(p);
    // console.log(pass.retrieve(p.image, p.type, p.price));
    pass.totalCostOrder(p);
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <br />
          <br />
          <br />

          {this.state.order.map((desc) => (
            <div className="card mt-4" key={desc.id}>
              <div className="row ">
                <div className="col-md-4">
                  <img
                    src={desc.image}
                    alt=""
                    className="img-responsive order-img"
                  ></img>
                </div>
                <div className="col-md-4">
                  <h2 className="card-title">{desc.name}</h2>
                  {desc.type === "veg" ? (
                    <img width="30" src={veg} alt="" />
                  ) : (
                    <img width="30" src={non} alt="" />
                  )}
                  <div>{desc.price}</div>
                  <button
                    type="button"
                    onClick={() => this.addValueHandler(desc)}
                    className="btn button-bg mt-5"
                    // class={pass(desc.price)}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="col-md-4 mt-1">
                  <div>{desc.description}</div>
                  <div className="mt-3">
                    <h6 className="pull-left">Ingredients:</h6>
                    {desc.ingredients.map((i) => (
                      <div className=" side-by-side justify-content" key={i.id}>
                        {i.iname},
                      </div>
                    ))}
                  </div>
                  <br />
                  <div className="mt-2">
                    <h6 className="pull-left">Toppings:</h6>
                    {desc.topping.map((t) => (
                      <div className="side-by-side justify-content" key={t.id}>
                        {t.tname},
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div>value:{this.state.value}</div> */}
      </div>
    );
  }
}
