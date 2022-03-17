import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <Navbar fixed="bottom" className="justify-content-center bg-dark p-4">
        <p className="text-light">Copyright {new Date().getFullYear()}</p>
      </Navbar>
    </div>
  );
}

export default Footer;
