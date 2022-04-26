import React, { Component } from "react";
import "./About.css";
import "./w3.css";
import ebh from "./ebh.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="container1">
        <header id="main-header">
          <div className="container4">
            <h1> EBH AUTOPARTS CAR GENERAL DEALERS</h1>
          </div>
        </header>

        <section id="showcase1">
          <div>
            <h1> AUTOPARTS GENERAL DEALER!!!!</h1>
            <p>
              EBH AUTOPARTS is about relationships and maintaining realistic
              inventories and activities. Our cost-effective business model
              allows us to focus on you. This was our core value upon startup
              designated for the establishment of long-term success and to set
              the benchmark within the industry.
            </p>
          </div>
        </section>
        <div className="container4">
          <section id="main1">
            <h2>Owner:</h2>
            <h1>Edward Brian Harawa (EBH)</h1>

            <img src={ebh} alt=''/>
          </section>
          <aside id="sidebar1">
            <p>
              In 2015, when our country was entering the great depression, EBH
              founded his company with high hopes, perseverance and
              determination. He started by selling auto parts to car dealers,
              service stations and garages. A Probox ran a sales route from
              Blantyre town to Nancholi near Filling Station, “rendering dealer
              service of the highest character at all times.”
            </p>
          </aside>

          <h3>CUSTOMER CARE</h3>
          <p>
            <hr />
            Over the last 6 years we forged alliances with the most reputable
            and trust-worthy acquisition managers across the country. They
            helped fill our store-house with more than 15,000 units and
            continually provide us with immediate access to obscure or rare
            engines, transmissions, drive trains, transfer cases and thousands
            of components stemming from all makes and models – domestic or
            imported; new or antiquated. Whatever the need, we’ve dealt with it.
            These alliances fortify our clients within a teetering financial
            existence, aiding cash-strapped clients and are forged to sustain
            trust. This is how we continually grow. Our services and prices
            paralyze the competition scrambling to support their massive
            overheads. Thus, We strive to serve our customers by:
            <ol>
              <li>Exceeding expectations in value, quality and service</li>
              <li>Offering fast, dependable delivery service</li>
              <li>Providing quality name brand parts at affordable prices</li>
              <li>
                Saving customers money by saving them time through express
                delivery
              </li>
              <li>Pleasing each customer with service they deserve</li>
              <li>
                Providing employees with the opportunity to advance and treating
                them with respect{" "}
              </li>
            </ol>
            <hr />
          </p>

          <h2>GUARANTEE AND RETURNS</h2>
          <p>
            <hr />
            Our parts are covered for 30 days from date of sale. All parts are
            marked for identification purposes. If a part that you receive is
            faulty we will send a replacement part or, should a replacement not
            be available then a refund, including postage costs. Should you need
            to return a purchased item,that you purchased in error, you should
            notify us, and the item should be returned within 30 days , in same
            condition as you have received it. We will pay for the return
            postage. A refund can be issued after we have checked the security
            markings we have added to the part. Refunds are usually made within
            7 days of receiving returns. By bidding or buying our parts, you are
            agreeing to have read and agreed by out terms of sale Guarantee
            covers parts only and labor claims cannot be made.
            <hr />
          </p>
        </div>
      </div>
    );
  }
}
