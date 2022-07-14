import React from "react";
import "./LogoSearch.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="logo-img" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
