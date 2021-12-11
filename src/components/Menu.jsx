import React from "react";
import "@styles/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__ul">
        <Link to="/">
          <li className="menu__ul__li">Sobre Mi</li>
        </Link>
        <Link to="users">
          <li className="menu__ul__li">Usuarios</li>
        </Link>
        <Link to="questions">
          <li className="menu__ul__li">Preguntas</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
