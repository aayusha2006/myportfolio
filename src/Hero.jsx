import React from "react";
import Button from "./Button";
import Content from "./Content";
const Hero = () => {
  return (
    <div className="justify-center flex flex-col g-4">

        {/* <img src="./profile.jpeg" alt="" /> */}
        <Content />
      <Button title="Contact Me" type="dodgerblue" icon="contact" />
      <Button title="My projects" type="red" icon="github" />
    </div>
  );
};

export default Hero;
