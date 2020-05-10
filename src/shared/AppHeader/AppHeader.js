import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header>
      <Link className="logo" to="/">
        Logo
      </Link>
      <div className="prices">Prices</div>
      <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/market">Market</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/signin">SighIn</Link>
      </nav>
    </header>
  );
}

export default AppHeader;
