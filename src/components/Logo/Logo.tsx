import React from "react";
import LogoImg from "Logo.png";
import LogoLight from "LogoLight.png";
import { Link } from "react-router-dom";

const Logo: React.FC<{}> = ({}) => {
  return (
    <Link to="/" className="ttnc-logo block">
      <img className="block dark:hidden" src={LogoImg} alt="Logo" />
      <img className="hidden dark:block" src={LogoLight} alt="Logo Light" />
    </Link>
  );
};

export default Logo;
