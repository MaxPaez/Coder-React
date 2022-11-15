import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return <div >
    <ul className="Nav1">
        <li>
            <a href="">Link 1</a>
        </li>
        <li>
            <a href="">Link 2</a>
        </li>
        <li>
            <a href="">Link 3</a>
        </li>
    </ul>
    <div>
      <CartWidget/>
    </div>
  </div>;
};

export default NavBar;

