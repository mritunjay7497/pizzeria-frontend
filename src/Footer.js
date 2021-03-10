import React, { Component } from 'react'
import './Home.css';

export default class Footer extends Component {
    render() {
        return (
          <div>
            <footer className="footer mt-5 py-3 bg-light fixed-sticky">
              <div className="container footer-m">
                <span className="text-muted ">
                  Copyrights © 2017 Pizzeria.All rights reserved
                </span>
              </div>
            </footer>
          </div>
        );
    }
}
