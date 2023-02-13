import React, { useState } from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [navList, setNavList] = useState([
    { id: 1, name: "Главная", href: "home", isActive: true },
    { id: 2, name: "Создать свой флаер", href: "create", isActive: false },
    { id: 3, name: "О нас", href: "about", isActive: false },
    { id: 4, name: "Наши работы", href: "works", isActive: false },
    { id: 5, name: "Обратная связь", href: "contact", isActive: false },
  ]);

  const getStatus = (id) => {
    setNavList(
      navList.map((list) =>
        list.id === id
          ? { ...list, isActive: true }
          : { ...list, isActive: false }
      )
    );
  };
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <a href="#home" className="nav-logo">
            <img
              src="https://flaer.uz/img/flayer.jpg"
              alt="logo"
              style={{ width: "75px", height: "24px" }}
            />
          </a>

          <ul className="nav-list">
            {navList.map((nav) => {
              return (
                <li className="nav-item" key={nav.id}>
                  <a
                    href={`#${nav.href}`}
                    className={nav.isActive ? "active" : ""}
                    onClick={() => getStatus(nav.id)}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-menu">
            <FiMenu onClick={() => setOpenMenu(!openMenu)} />
          </div>
        </div>
        {openMenu ? (
          <NavMenu
            navList={navList}
            setNavList={setNavList}
            getStatus={getStatus}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
