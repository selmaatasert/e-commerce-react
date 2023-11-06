import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-3">
              <h1 className="contactHeader">Reach Out to Us</h1>
              <h2></h2>
              <p className="contactParagraph fs-5">
                We are only a step away from you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info mb-3 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="container2 d-flex align-items-center justify-content-center">
              <div className="col-8">
                <map name="" className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427314.743289817!2d7.783974962500005!3d53.550188299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18fab7259df4d%3A0xa8dbbb4d5e740b96!2sDCI%20Digital%20Career%20Institute!5e0!3m2!1sen!2sde!4v1699195858305!5m2!1sen!2sde"
                    allowfullscreen=""
                    width="600px"
                    height="400px"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </map>
              </div>
              <div className="contactInfo col-6">
                <div className="text-start mb-2">
                  <h2>Contact information</h2>
                </div>
                <div className="contact-details">
                  <p className="mb-3">
                    <b>Address:</b> Dci, Wandalenweg 30, 20097 Hamburg
                  </p>
                  <p className="mb-3">
                    <b>Phone:</b>{" "}
                    <a href="tel:015426254258"> Call Us +015426254258</a>
                  </p>
                  <p className="mb-5">
                    <b>Hours Open:</b> From 8 A.m to 5 P.m
                  </p>
                  <p className="mb-3">
                    <b>Follow Us:</b>
                  </p>
                  <div className="col-5 social-icons mb-3 d-flex justify-content-around">
                    <Link>
                      <AiFillTwitterCircle className="fs-4" />
                    </Link>
                    <Link>
                      <BsFacebook className="fs-4" />
                    </Link>
                    <Link>
                      <BsInstagram className="fs-4" />
                    </Link>
                    <Link>
                      <BsLinkedin className="fs-4" />
                    </Link>
                  </div>
                </div>
                <p>
                  We're here to assist you! Feel free to reach out to us through
                  any of the above methods or use the form below.
                </p>
                <p>
                  Our team will get back to you as soon as possible. Your
                  inquiries and feedback are important to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form p-5">
        <div className="container-xx1">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="ContactCard col-8 p-4">
                <div className="text-center mb-3">
                  <h2>Leave Us A Message</h2>
                </div>
                <div className="col-12 d-flex mb-3">
                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter your First Name"
                      aria-label="Enter your First Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter your Second Name"
                      aria-label="Enter your Second Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div className="col-12 d-flex"></div>
                <div className="p-2 mb-3">
                  <label className="contactLabel mb-2">
                    Enter Your Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Enter your Your Email"
                    aria-label="Enter your Your Email"
                    aria-describedby="basic-addon2"
                  />
                </div>

                <div className="form-floating p-2 mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label className="contactLabel" for="floatingTextarea">
                    Type in your message
                  </label>
                </div>
                <button className="contactButton p-3" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
