import React from 'react'

const Navbar = () => {
  const navList = ["Home", "Skill", "Project", "About me", "Contact"]
  return (
    <div>
    <nav className="border-2 py-4 px-6 mx-auto w-1/2 rounded-full mb-9">
      <ul className="flex gap-4 justify-around">
        {navList.map((item, index) => (
          <li className="text-white hover:text-blue-600" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar