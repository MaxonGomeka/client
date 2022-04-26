import React, { Component } from "react";
import {
  Navbar,
  Nav,

  Container

} from "react-bootstrap";
import { BrowserRouter as Router,Switch ,Route, Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";

import './Navbar.css';
import './Style.css';
import my10 from "./mazda.png";



export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div id="main-header">
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container  >
              <Navbar.Brand  href="#home"><img src={my10} />EBH AUTOPARTS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar">
                <Nav className="me-auto">
                  <Nav.Link id="basic-navbar" as={Link} to="/Home">
                    Home
                  </Nav.Link>
                  <Nav.Link  id="basic-navbar"as={Link} to={"/About"}>
                    About Us
                  </Nav.Link>
                  <Nav.Link id="basic-navbar" as={Link} to={"/Contact"}>
                    Contact Us
                  </Nav.Link>
                  <Nav.Link id="basic-navbar" as={Link} to={"/Service"}>
                    Products
                  </Nav.Link>
              
                </Nav>
                
                {/* <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Nav.Link as={Link} to={"/Contact"}>
                    
                    <p>Contact Us: +265881615753</p>
                  </Nav.Link>
                 
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
        <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Service">
              <Service/>
            </Route>
            
            </Switch>
          
        </div>
        <header id="main-header">
        <div className="container">
          <h1> EBH AUTOPARTS COMPANY </h1>
        </div>
      </header>
      </Router>
      

    );
  }
}
