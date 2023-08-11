import React from "react";
import style from "./navbar.module.css";
import { map, kebabCase } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { useScroll } from "hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const scroll = useScroll();

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
          <span
            key={nav.id}
            onClick={() => {
              navigate(`/home#${kebabCase(nav.name)}`);
              scroll(kebabCase(nav.name));
            }}
            className={style.nav_item}
          >
            {nav.name}
          </span>
        ))}
        <a
          href="https://github.com/Yacn9/snapp-use-form"
          className={style.nav_item}
        >
          Github
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
