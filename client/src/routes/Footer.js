import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Link to={"/"}>Expenses Application</Link>
        </div>
        <div>
          <p>copyrights {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
