import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/NazmulI95525642"
        rel="noreferrer"
        target="_blank"
      >
        <BsTwitter />
      </a>
      <a href="www.linkedin.com/in/nazmul-islam-nahid-a3b93a217">
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Nazmulislam007"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
