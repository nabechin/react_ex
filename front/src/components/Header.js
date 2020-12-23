import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/post" className="item">
          Post
        </Link>
      </div>
    </div>
  );
};
export default Header;
