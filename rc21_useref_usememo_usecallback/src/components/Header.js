import React from "react";
// import { memo } from "react";
import cw from "../assets/cw_logo.png";

const Header = ({ img }) => {
  console.log("Rendering: Header Comp");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default React.memo(Header);

// const Header = memo (({ img }) => {
//   console.log("Rendering: Header Comp");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

// export default Header;
