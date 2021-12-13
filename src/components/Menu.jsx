import React from "react";
import "@styles/Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const ontoggle= () =>{
    props.setOpen(false);
  }
  return (
    <div className="menu">
      <ul className="menu__ul">
        <Link to="/">
          <li className="menu__ul__li" onClick={ontoggle}>Sobre Mi</li>
        </Link>
        <Link to="users">
          <li className="menu__ul__li" onClick={ontoggle}>Usuarios</li>
        </Link>
        <Link to="questions">
          <li className="menu__ul__li" onClick={ontoggle}>Preguntas</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
