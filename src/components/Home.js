import React, { Component } from "react";
import "./Style.css";
import "./w3.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import my from "./mercedez.png";
import my1 from "./mazda.png";
import my2 from "./mercedes.png";
import my3 from "./auu.jpg";
import my4 from "./citro.png";
import my5 from "./chevl.jpg";
import my6 from "./draft.png";
import my7 from "./lambo.png";
import my8 from "./mishu.jpg";
import my9 from "./t.png";

import my11 from "./main.jpg";
import my12 from "./shop.jpg";
import my13 from "./de.jpg";

import my15 from "./e.jpg";
import my16 from "./eeee.jpg";
import my17 from "./ee.jpg";

import my19 from "./wiper.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="container1">
        <header id="main-header">
          <div class="container">
            <h1> EBH AUTOPARTS CAR GENERAL DEALERS</h1>
          </div>
        </header>

        <section id="showcase">
          <Carousel fade={true} pause={false} controls={true}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my11}
                // alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my12} alt=''
                // alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my13} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my15} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my16} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block1 w-20"
                src={my17} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <hr />
        <div className="container">
          <section id="main">
            <h1>
              <i>Home of the Parts Professionals!</i>
            </h1>
            <img src={my19} alt='' />
            <hr />
          </section>

          <Carousel fade={false} pause={false} controls={true}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my} 
                alt=""
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my1} alt=''
                // alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my2} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my3} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my4} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my5} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my6} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my7} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my8} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-20"
                src={my9} alt=''
                // alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <hr />
        <div className="im">
          <img src={my11} alt=''/>
        </div>
        <hr />
      </div>
    );
  }
}
