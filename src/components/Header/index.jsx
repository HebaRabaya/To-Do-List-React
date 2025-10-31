import React from "react";
import "./Header.css";

const Header = ({ dark, toggle }) => {
  return (
    <div className="header">
      <div className="title">
        <h1>My To-Do List</h1>
        <p>Get things done</p>
      </div>
      <button className="theme-btn" onClick={toggle}>
        <i className={`fas ${dark ? "fa-sun" : "fa-moon"}`} />
      </button>
    </div>
  );
};

export default Header;
