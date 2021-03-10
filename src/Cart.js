import React, { Component } from "react";
import { pass } from "./Model";
import "./Home.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import veg from "./veg.png";
import non from "./non.png";


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: pass.getCart(),
      count: 1,
      total: pass.gettotalCostOrder(),
      ingredients: pass.getIngredients(),
      ingredientsCost: pass.getTotalIngredients(),
      totalCost: pass.getTotalCost(),
      linePrice: 1,
    };
    // console.log(this.state.cart);
    // console.log(this.state.ingredients);
  }

  clickEventHandle = (dprod) => {
    this.setState({
      cart: pass.deleteCart(dprod),
      total: pass.getTotal(),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });
    console.log(this.state.cart);
  };

  // incrementCount = (id) => {
  //   let newCart = this.state.cart;
  //   newCart[id].count = newCart[id].count + 1;
  //   this.setState({
  //     cart: newCart,
  //   });
  // };

  // decrementCount = (id, prod) => {
  //   let newCart = this.state.cart;

  //   if (newCart[id].count === 1) {
  //     this.clickEventHandle(prod);
  //   } else {
  //     newCart[id].count = newCart[id].count - 1;
  //     this.setState({
  //       cart: newCart,
  //     });
  //   }
  // };

  incrementCount(pr) {
    const temp = this.state.cart.map((c) => {
      if (c.id === pr.id) {
        c.quantity++;
      }
      return c;
    });

    this.setState({
      cart: temp,
      total: pass.getIncrement(pr),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });
    // this.setState({
    //   count: pass.quantity++,
    // });
    //  console.log(pass.quantity++);
    console.log(this.state.cart);
  }

  decrementCount(pr) {
    const temp = this.state.cart.map((c) => {
      if (c.id === pr.id && c.quantity !== 0) {
        c.quantity--;
      }
      return c;
    });

    this.setState({
      cart: temp,
      total: pass.getDecrement(pr),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });

    if(pr.quantity===0)
    {
      this.setState({
        cart: pass.deleteCart(pr),
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.cart.length === 0 ? (
          <div
            style={{
              padding: "25% 0%",
              textAlign: "center",
              color: "red",
            }}
          >
            <strong>
              <h1>CART IS EMPTY!!!!!</h1>
            </strong>
            <NavLink to="/ORDER">
              <button className="btn button-bg-cart1">GO TO ORDER PAGE</button>
            </NavLink>
          </div>
        ) : (
          <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
              <div className="card mt-4 col-md-6">
                <div className="row">
                  <h3 className="text-center">MY ORDER</h3>
                  {this.state.cart.map((prod) => (
                    <div className="container" key={prod.id}>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td width="20%">
                              <img src={prod.image} alt="" width="40%" />
                            </td>
                            <td>
                              {prod.type === "veg" ? (
                                <img
                                  width="20"
                                  src={veg}
                                  alt=""
                                  className="mt-2"
                                />
                              ) : (
                                <img width="20" src={non} alt="" />
                              )}
                            </td>
                            <td>
                              <div>{prod.name}</div>
                              <div>₹{prod.price}</div>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn"
                                onClick={() => this.incrementCount(prod)}
                                style={{
                                  width: "2px",
                                  backgroundColor: "green",
                                }}
                              >
                                <TiPlusOutline className="mr-5" />
                              </button>
                            </td>
                            <td>{prod.quantity}</td>
                            <td>
                              <button
                                type="button"
                                className="btn mr-3"
                                onClick={() => this.decrementCount(prod)}
                                style={{ width: "2px", backgroundColor: "red" }}
                              >
                                <TiMinusOutline />
                              </button>
                            </td>
                            <td>
                              <strong>₹{prod.price * prod.quantity}</strong>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => this.clickEventHandle(prod)}
                              >
                                <RiDeleteBin6Line
                                  style={{ color: "black" }}
                                  className="float-bottom"
                                />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card mt-4 col-md-4 ml-2">
                <div className="row">
                  <div>
                    <h4 className="text-center">The total amount of</h4>
                    <div>
                      <div className="container">
                        <div className="row">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>PIZZA</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                                <td>
                                  <strong>₹{this.state.total}</strong>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="dropdown">
                                    Ingredients
                                    <button
                                      className="btn btn-secondary dropdown-toggle"
                                      type="button"
                                      id="dropdownMenuButton"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></button>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      {this.state.ingredients.map((ing) => (
                                        <span
                                          className="dropdown-item"
                                          key={ing.id}
                                        >
                                          {ing.tname}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <strong>₹{this.state.ingredientsCost}</strong>
                                </td>
                              </tr>
                              <tr>
                                <td>TOTAL</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <strong>₹{this.state.totalCost}</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "880px" }} align="right">
                <NavLink to="/Go">
                  <button
                    type="button"
                    className="btn button-bg-cart1 mr-4 mt-1"
                    // onClick={() => this.payEventHandle()}
                  >
                    PAY
                  </button>
                </NavLink>
              </div>
              <NavLink to="/CLEAR">
                <button
                  type="button"
                  className="btn button-bg-cart2 mr-5 mt-1"
                  // onClick={() => this.clearEventHandle()}
                >
                  CLEAR
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
