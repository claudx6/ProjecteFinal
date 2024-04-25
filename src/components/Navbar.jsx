import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/css/Navbar.css";
import "/src/index.css";

import { navItems, serviceDropdown, tiendaDropdown } from "./NavItems";
import ButtonSignUp from "./ButtonSignUp.jsx";
import Dropdown from "./Dropdown";
import ButtonLogIn from "./ButtonLogIn.jsx";


function Navbar() {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [tiendaDropdownOpen, setTiendaDropdownOpen] = useState(false);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          PETIT AMAZONES
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
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ButtonSignUp />
        <ButtonLogIn />
      </nav>
    </>
  );
}

export default Navbar;
