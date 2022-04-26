import React from 'react';
import "./App.css";
import "./components/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import my1 from "./components/lambo.png";
import my2 from "./components/mazda.png";
import my3 from "./components/mercedes.png";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <footer id="main-footer">
        <hr />
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h1>
              Conta<span class="w3-badge w3-red">cts</span>
            </h1>
            <ul className="list-unstyled">
              <li>+265881615753</li>
              <li>+265212425753</li>
              <li>+265992056253</li>
              <li>edwardharawa@gmail.com</li>
            </ul>
          </div>

          {/* column2 */}
          <div className="col">
            <h1>
              Abo<span class="w3-badge w3-green">ut</span>
            </h1>
            <ul className="list-unstyled">
              <li>Car General Dealer</li>
              <li>AgriBussiness Specilist</li>
              <li>EBH AutoParts Owner</li>
              <li>Graphic Designer</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h1>
              Prod<span class="w3-badge w3-red">ucts</span>
            </h1>
            <ul className="list-unstyled">
              <li>Japan AutoParts</li>
              <li>RSA AutoParts</li>
              <li>Dubai AutoParts</li>
              <li>Mechanics</li>
              <li>Car Clinic</li>
            </ul>
          </div>

          {/* column4 */}
          <div className="col">
            <h1>
              Locat<span class="w3-badge w3-green">ion</span>
            </h1>
            <ul className="list-unstyled">
              <li>Nancholi Near Filling Station,</li>
              <li>Blantyre,</li>
              <li>Malawi.</li>
            </ul>
          </div>
          {/* column4 */}

          <div className="col">
            <h1>
              Soc<span class="w3-badge w3-red">ial</span> Med
              <span class="w3-badge w3-yellow">ia</span>
            </h1>
            <div className="col-icon">
              <ul className="list-unstyled">
                <li>
                  <a href="https://web.facebook.com/search/top?q=ebh%20autoparts%20online">
                    {" "}
                    <i className="fa fa-facebook-square"> Facebook</i>
                  </a>
                </li>
                <li>
                  <a href="https://web.facebook.com/search/top?q=ebh%20autoparts%20online">
                    <i className="fa fa-instagram"> Instagram</i>
                  </a>
                </li>
                <li>
                  <a href="https://web.facebook.com/search/top?q=ebh%20autoparts%20online">
                    <i className="fa fa-youtube-square"> Youtube</i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://web.facebook.com/search/top?q=ebh%20autoparts%20online">
                    <i className="fa fa-twitter"> Twitter</i>
                  </a>
                </li>
                <li className="coln">
                  {" "}
                  <a href="https://web.facebook.com/search/top?q=ebh%20autoparts%20online">
                    <i className="fa fa-google-plus-square"> Google Plus</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
          <hr />
        </div>
        <div className="row">
          <p className="col-sm1">
            <Carousel fade={true} pause={false} controls={true}>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block1 w-20"
                  src={my1} alt=''
                  // alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block1 w-20"
                  src={my2} alt=''
                  // alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block1 w-20"
                  src={my3} alt=''
                  // alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <p>
              Providing world class customer service and reliable auto parts and
              accessories for over 15 years!
            </p>
            <p>
              Copyright &copy;{new Date().getFullYear()} EBH AutoParts | Terms
              and Conditions | Privacy Policy
            </p>
            &copy;{new Date().getFullYear()} Rama Designs | All rights reserved
            | Terms Of service | Privacy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
