import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="./logo" alt="logo-brand" />

        <ul>
          <li>Home</li>
          <li>Top 10</li>
          <li>Categories</li>
          <li>Support</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
