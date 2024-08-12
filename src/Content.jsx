import React from "react";
import profile from "./assets/profile.jpeg";
const Content = () => {
  return (
    <div className="flex items-center justify-center flex-col  gap-6 ">
      <img className="h-44" src={profile} alt="." height="10px" />
      <h1 className="text-2xl font-bold">Hi,I'm Ayusha👋🏼</h1>
      <h2>Fullstack Developer</h2>
      <p className="w-1/2 ">
        I'm Ayusha,a fullstack developer with the goal of advancing my carrer
        and practicing in inspiring projects. Here I present my work and my
        passion for web development .Let's shape digital solutions together and
        shape the future!
      </p>
    </div>
  );
};

export default Content;
