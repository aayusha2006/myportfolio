import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
const Button = (props) => {
  return (
    <button
      className={`text-black bg-purple-300 rounded-lg flex items-center justify-center p-3 gap-2${
        props.type == "blue" ? "bg-blue-400" : "bg-purple-400 text-white  rounded-lg  flex items-center justify-center p-1"
      }`}
    >
      {props.icon == "contact" ? (
        <AiFillMessage size="16px" />
      ) : (
        <FaGithub size="16px" />
      )}
      {props.title}
    </button>
  );
};
export default Button;
