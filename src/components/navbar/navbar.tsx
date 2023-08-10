import React from "react";
import style from "./navbar.module.css";
import { map, kebabCase } from "lodash";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NAV_ITEMS = [
    { id: 1, name: "Project Overview" },
    { id: 2, name: "Technical Insights" },
    { id: 3, name: "Interactive Playground" },
  ];
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link to="/home" className={style.home}>
          Home
        </Link>
        {map(NAV_ITEMS, (nav) => (
          <Link
            key={nav.id}
            to={`/home#${kebabCase(nav.name)}`}
            className={style.nav_item}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
