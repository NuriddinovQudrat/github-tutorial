import React from "react";
import "./nav-menu.css";

const NavMenu = (props) => {
  const { navList, getStatus } = props;
  return (
    <div className="hamburger">
      <div className="menu-wrapper">
        <div className="container">
          <ul>
            {navList.map((nav) => {
              return (
                <li className="nav-item" key={nav.id}>
                  <a
                    href={`#${nav.href}`}
                    className={nav.isActive ? "active" : ""}
                    onClick={() => getStatus(navList.id)}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
