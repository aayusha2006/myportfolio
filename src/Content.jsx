import React from 'react'
import profile from "./assets/profile.jpeg"
const Content = () => {
  return (
    <div>
      <img className="size-28 flex flex-col" src={profile} alt="." />
        <h1>Hi,I'm Ayusha👋🏼</h1>
        <h2>Fullstack Developer</h2>
        <p>I'm Ayusha,a fullstack developer with the goal of advancing my carrer
            and practicing in inspiring projects. Here I present my work and my
            passion for web development .Let's shape digital solutions together
            and shape the future!
        </p>
    </div>
  )
}

export default Content