import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { img } from "../../Constants";

const About = () => {
  const abouts = [
    {
      title: "Web Developer",
      description: "I am a good Web Developer.",
      imageUrl: img.about01,
    },
    {
      title: "Front-End Web Developer",
      description: "I am a good Front-End Web Developer.",
      imageUrl: img.about02,
    },
    {
      title: "Firebase Backend Developer",
      description: "I am a good Firebase Backend Developer.",
      imageUrl: img.about03,
    },
    {
      title: "ReactJS Developer",
      description: "I am a good ReactJS Developer.",
      imageUrl: img.about04,
    },
  ];

  return (
    <div className="app__about app__whitebg app__flex">
      <h2 className="head-text">
        I Know that <span>Good Developer</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((abouts, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={abouts.title + index}
          >
            <img src={abouts.imageUrl} alt={abouts.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {abouts.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {abouts.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
