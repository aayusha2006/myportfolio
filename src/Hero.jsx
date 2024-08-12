import React from "react";
import Button from "./Button";
import Content from "./Content";
const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* <img src="./profile.jpeg" alt="" /> */}
      <Content />
      <div className="flex gap-5 ">
        <Button title="Contact Me" type="dodgerblue" icon="contact" />
        <Button title="My projects" type="red" icon="github" />
      </div>
    </div>
  );
};

export default Hero;
