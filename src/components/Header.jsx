import React, { useState } from "react";
import "@styles/Header.css";
import mainIcon from "@icons/main.png";

import menuIcon from "@icons/menu.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log("clic");
  };
  return (
    <>
      <nav className="header">
        <div className="header__menuicon" onClick={handleClick}>
          <img className="header__menuicon__img" src={menuIcon} alt="EB Icon" />
        </div>
        <div className="header__mainicon">
          <img className="header__mainicon__img" src={mainIcon} alt="EB Icon" />
        </div>
        <div className="header__menu">
        <Link to="questions">
          <button className="header__menu__btn">Preguntas</button>
          </Link>
          <Link to="users">
          <button className="header__menu__btn">Usuarios</button>
          </Link>
          <Link to="">
          <button className="header__menu__btn header__menu__btn--green">
            Sobre mi
          </button>
          </Link>
        </div>
        {open && <Menu />}
      </nav>
      
    </>
  );
};

export default Header;
