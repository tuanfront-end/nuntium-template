import React from "react";
import LogoImg from "Logo.png";
import LogoLight from "LogoLight.png";
import Logo2Img from "Logo2.png";
import Logo2Light from "Logo2Light.png";

const Logo: React.FC<{ type?: "type1" | "type2" }> = ({ type = "type1" }) => {
  return (
    <a href="/" className={`wil-logo wil-logo--${type} block`}>
      <img
        id="wil-logo-img"
        className="block dark:hidden"
        src={type === "type1" ? LogoImg : Logo2Img}
        alt="Logo"
      />
      <img
        id="wil-logo-img-light"
        className="hidden dark:block"
        src={type === "type1" ? LogoLight : Logo2Light}
        alt="Logo"
      />
    </a>
  );
};

export default Logo;
