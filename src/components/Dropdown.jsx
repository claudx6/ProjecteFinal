import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { tiendaDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "/src/assets/css/Dropdown.css";

// function Dropdown() {
//   const [dropdown, setDropdown] = useState(false);
  
//   return (
//     <>
//       <ul
//         className={dropdown ? "services-submenu clicked" : "services-submenu"}
//         onClick={() => setDropdown(!dropdown)}
//       >
//         {serviceDropdown.map((item) => {
//           return (
//             <li key={item.id}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setDropdown(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}

       
//       </ul>
//     </>
//   );
// }

// export default Dropdown;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "/src/assets/css/Dropdown.css";

function Dropdown({ items }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}

      >
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setDropdownOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
