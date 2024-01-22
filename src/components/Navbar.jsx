import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/css/Navbar.css";
import "/src/index.css";

import { navItems, serviceDropdown, tiendaDropdown, aboutUsDropdown } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [tiendaDropdownOpen, setTiendaDropdownOpen] = useState(false);
  const [aboutUsDropdownOpen, setaboutUsDropdownOpen] = useState(false);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NATURE
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Tienda") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setTiendaDropdownOpen(true)}
                  onMouseLeave={() => setTiendaDropdownOpen(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {tiendaDropdownOpen && <Dropdown items={tiendaDropdown} />}
                </li>
              );
            }

            if (item.title === "Servicios") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setServiceDropdownOpen(true)}
                  onMouseLeave={() => setServiceDropdownOpen(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {serviceDropdownOpen && <Dropdown items={serviceDropdown} />}
                </li>
              );
            }

            if (item.title === "Nosotros") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setaboutUsDropdownOpen(true)}
                  onMouseLeave={() => setaboutUsDropdownOpen(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {aboutUsDropdownOpen && <Dropdown items={aboutUsDropdown} />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
