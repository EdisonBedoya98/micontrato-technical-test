import React from "react";
import "@styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__ul">
        <li className="menu__ul__li">Sobre Mi</li>
        <li className="menu__ul__li">Usuarios</li>
        <li className="menu__ul__li">Preguntas</li>
      </ul>
    </div>
  );
};

export default Menu;
