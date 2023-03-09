import React, { useState } from "react";
import "./Header.css";
import { FaGithub, FaPlus } from "react-icons/fa";
import AddPostForm from "../features/posts/AddPostForm";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    document.body.classList.toggle("no-scroll");
  };
  

  return (
    <header className="Header">
      <a href="https://github.com/mohammadIsamil/react-redux-project" className="GithubLink">
        <FaGithub />
      </a>
      <h1>Post</h1>
      <div className="trn">
        <button className="AddPostButton" onClick={toggleForm}> 
           <FaPlus /> 
         </button>
        {showForm && <AddPostForm />}
      </div>
    </header>
  );
};

export default Header;
