import React from "react";
import { Link } from "react-router-dom";

import "./Header.css"

function Header() {
  return (
      
    <div className="header">
        
      {/*logo on the left -> image*/}
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
      
      {/*Search box*/}
      <input type="text" className="header__searchInput"/>
      {/*3 Links*/}
      {/*Basket icon with number*/}
    </div>
  );
}

export default Header;
