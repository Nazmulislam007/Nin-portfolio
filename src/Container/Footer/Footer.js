import React from "react";
import "./Footer.scss";
import { img } from "../../Constants";
import { useState } from "react";
import { AppWrapper, MotionWrap } from "../../Wrapper";

const Footer = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setInputData({ username: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={img.email} alt="email" />
          <a href="mailto:nazmulislam.ni897@gmail.com" className="p-text">
            nazmulislam.ni897@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={img.mobile} alt="mobile" />
          <a href="tel:+8801734997789" className="p-text">
            Call Me
          </a>
        </div>
      </div>

      {!loading ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="username"
              value={inputData.username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={inputData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              type="text"
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={inputData.message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {"Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapper(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
