import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import styled from "styled-components";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./Header.css";

function Header(props) {
  const [cart, Setcart] = useState(0);

  return (
    <div className="header">
      <span
        onClick={() => {
          console.log("Open drawer");
        }}
      >
        <MenuIcon className="header__menu" />
      </span>

      <img
        className="header__logo"
        src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
          onClick={() => {
            console.log("search");
          }}
          className="header__searchIcon"
        />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="option1">Hello, Sign in</span>
          <span className="option2">Account & Lists</span>
        </div>
        <div className="header__option">
          <span className="option1">Returns</span>
          <span className="option2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="option1">Try</span>
          <span className="option2">Prime</span>
        </div>
      </div>
      <div
        onClick={() => {
          Setcart(cart + 1);
        }}
        onDoubleClick={() => {
          Setcart(cart - 3);
        }}
        className="header__cart"
      >
        <ShoppingCartIcon
          style={{ fontSize: 40 }}
          className="header__cartIcon"
        />
        <span className="header__cartValue">{cart}</span>
      </div>
    </div>
  );
}

export default Header;
