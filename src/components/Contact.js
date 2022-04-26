import React from "react";

import "./Contact.css";
import "./Style.css";
import "./w3.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynjaeci",
        "template_m8nqq2p",
        e.target,
        "user_8KK7cHeHBZLjhs6xeLZMq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal({
      title: "Succeffully",
      text: "You will get a reply shortly!",
      icon: "success",
      button: "Close",
    });
    e.target.reset();
  }

  return (
    <div>
      <header id="main-header">
        <div className="container">
          <h1> EBH AUTOPARTS CAR GENERAL DEALERS</h1>
        </div>
      </header>
      <div className="contact">
        <form onSubmit={sendEmail}>
          {/* <pre>{ JSON.stringify(formValues, undefined, 2)}</pre> */}

          <div className="row pt-2 mx-auto">
            <div className="col-8 form-group  pt-4 ">
              <h1 className="em">Send Us an email</h1>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
                // value={formValues.username}
                // onChange={handleChange}
              />
            </div>
            <div className="col-8 form-group  pt-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="email address"
                name="email"
                // value={formValues.email}
                // onChange={handleChange}
              />
            </div>
            <div className="col-8 form-group pt-4 ">
              <label>Subject</label>
              <input
                type="subject"
                className="form-control"
                placeholder="subject"
                name="subject"
                // value={formValues.subject}
                // onChange={handleChange}
              />
            </div>
            <div className="col-8 form-group pt-4 ">
              <label>Message</label>
              <textarea
                className="form-control"
                id=""
                cols={20}
                rows={4}
                placeholder="Your message"
                name="message"
                // value={formValues.message}
                // onChange={handleChange}
              />
            </div>
            <div className="col-7 pt-4 ">
              <input
                type="submit"
                className="btn btn-info"
                value="Send message"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="em1">
        <h1>Call Us:</h1>
        <ol className="list-unstyled">
          <li>+265881615753</li>
          <li>+265212425753</li>
          <li>+265992056253</li>
        </ol>
      </div>
    </div>
  );
}
