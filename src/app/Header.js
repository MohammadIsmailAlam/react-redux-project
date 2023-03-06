import React from "react";
import "./Header.css";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="Header">
      <h1>This is a Redux Project and here you can add a Post</h1>
      <a href="https://github.com/mohammadIsamil/React_Redux_project" className="GithubLink">
        <FaGithub />
      </a>
    </header>
  );
};

export default Header;
