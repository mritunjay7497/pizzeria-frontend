import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="inner_section">
            <div className="heading">
              <h1>OUR STORY</h1>
              <p className="text-justify">
                We believe in good. We launched Fresh Pan Pizza Best Excuse
                Awards on our Facebook fan page. Fans were given situations
                where they had to come up with wacky and fun excuses. The person
                with the best excuse won the Best Excuse Badge and won
                Pizzeria's vouchers. Their enthusiastic response proved that
                Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever! Ever
                since we launched the Tastiest Pan Pizza, ever, people have not
                been able to resist the softest, cheesiest, crunchiest,
                butteriest Domino's Fresh Pan Pizza. They have been leaving the
                stage in the middle of a performance and even finding excuses to
                be disqualified in a football match. We launched Fresh Pan Pizza
                Best Excuse Awards on our Facebook fan page. Fans were given
                situations where they had to come up with wacky and fun excuses.
                The person with the best excuse won the Best Excuse Badge and
                won Domino's vouchers. Their enthusiastic response proved that
                Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
              </p>
            </div>
            <div className="row">
              <div className="col-md-5">
                <img
                  className="img-responsive rounded float-left"
                  src="https://image.shutterstock.com/image-photo/raw-dough-pizza-ingredients-spices-600w-526830277.jpg"
                  alt="ingredients"
                />
              </div>
              <div className="col-md-7 text-justify mw-100">
                <h2>INGREDIENTS</h2>
                We're ruthless about goodness. We have no qualms about tearing
                up a day-old lettuce leaf (straight from the farm), or steaming
                a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir.
                While they're still young and fresh - that's our motto. It makes
                the kitchen a better place.
              </div>
            </div>

            <div className="row ">
              <div className="col-md-7 text-justify mw-100 second-element">
                <h2>OUR CHEFS</h2>
                <p>
                  They make sauces sing and salads dance. They create magic with
                  skill, knowledge, passion, and stirring spoons (among other
                  things). They make goodness so good, it doesn't know what to
                  do with itself. We do though. We send it to you. 45 min
                  Delivery
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="img-responsive rounded float-left"
                  src="https://image.shutterstock.com/image-photo/happy-chef-600w-437116033.jpg"
                  alt="ingredients"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <img
                  className="img-responsive rounded float-left"
                  src="https://image.shutterstock.com/image-photo/vintage-analog-kitchen-countdown-timer-260nw-669255388.jpg"
                  alt="ingredients"
                />
              </div>
              <div className="col-md-7 text-justify mw-100">
                <h2 className="third-element">45 min delievery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
