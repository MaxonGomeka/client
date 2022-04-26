import React, { Component } from "react";
import "./Service.css";
import "./w3.css";
import our from "./bbb.jpg";
import our2 from "./en.jpg";
import our3 from "./box.jpg";
import our4 from "./ba.jpg";
import our5 from "./engin.jpg";
import our6 from "./joints.jpg";
import our7 from "./radio.jpg";
import our8 from "./air.jpg";
import our9 from "./ring.jpg";
import our10 from "./eee.jpg";
import our11 from "./oil1.jpg";
import our12 from "./redb2.jpg";
import our13 from "./anijo1.jpg";

import my1 from "./e.jpg";
import my2 from "./eeee.jpg";
import my3 from "./ee.jpg";
import my4 from "./p.jpg";
import my5 from "./pint.jpg";
import my6 from "./w.jpg";
import my7 from "./de.jpg";
import my8 from "./shop.jpg";

export default class Service extends Component {
  render() {
    return (
      <div className="container1">
        <header id="main-header">
          <div className="container2">
            <h1> EBH AUTOPARTS CAR GENERAL DEALERS</h1>
          </div>
        </header>

        <section id="showcase2">
          <h1> HOME OF AUTOPARTS!!!!</h1>
        </section>
        <hr />
        <div className="container2">
          <section id="main3">
            <div>
              <img src={our10} alt='' />
            </div>
            <div class="w3-container">
              <h5>Engines Original</h5>
            </div>

            <div>
              <img src={our2} alt=''/>
            </div>

            <div>
              <img src={our5} alt='' />
            </div>
            <div class="w3-container">
              <h5>Gear Box</h5>
            </div>

            <div>
              <img src={our12} alt='' />
            </div>
            <div class="w3-container">
              <h5>Gear Box Oil</h5>
            </div>
          </section>
          <section id="main3">
            <div>
              {" "}
              <img src={our3} alt='' />
            </div>
            <div class="w3-container">
              <h5>Spark Plugs</h5>
            </div>
            <div>
              {" "}
              <img src={our4} alt='' />
            </div>

            <div>
              <img src={our7} alt='' />
            </div>
            <div class="w3-container">
              <h5>Car Radios</h5>
            </div>
            <div>
              {" "}
              <img src={our6} alt='' />
            </div>
            <div class="w3-container">
              <h5>Ball Joints</h5>
            </div>

            <div>
              {" "}
              <img src={our13} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Belts</h5>
            </div>
          </section>
          <section id="main3">
            <div>
              {" "}
              <img src={our8} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Air Cleaner</h5>
            </div>
            <div>
              {" "}
              <img src={our9} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Clutch Disc</h5>
            </div>

            <div>
              {" "}
              <img src={our} alt='' />
            </div>
            <div class="w3-container">
              <h5>Engine Oil</h5>
            </div>

            <div>
              {" "}
              <img src={our11} alt=''/>
            </div>

            <div class="w3-container">
              <h5>Oil Filter</h5>
            </div>
          </section>

          <section id="main3">
            <div>
              {" "}
              <img src={my6} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Bosch</h5>
            </div>

            <div>
              {" "}
              <img src={my5} alt=''/>
            </div>

            <div class="w3-container">
              <h5>Pints</h5>
            </div>

            <div>
              {" "}
              <img src={my4} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Plugs</h5>
            </div>

            <div>
              {" "}
              <img src={my1} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Enginer</h5>
            </div>
          </section>

          <section id="main3">
            <div>
              {" "}
              <img src={my2} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Car Engine</h5>
            </div>
            <div>
              {" "}
              <img src={my3} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Car Engine</h5>
            </div>

            <div>
              {" "}
              <img src={my7} alt=''/>
            </div>
            <div class="w3-container">
              <h5>Decreaser</h5>
            </div>
            <div>
              {" "}
              <img src={my8} alt=''/>
            </div>
            <div class="w3-container">
              <h5>EBH AUTOPARTS Shop</h5>
            </div>
          </section>
        </div>
        <hr />
      </div>
    );
  }
}
