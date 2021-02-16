import React, { FC } from "react";
import DropdownPanel from "./DropdownPanel";
import DropdownTrigger from "./DropdownTrigger";

export interface DropdownProps {}

interface DropdownPropsStatic {
  DropdownPanel: typeof DropdownPanel;
  DropdownTrigger: typeof DropdownTrigger;
}

const Dropdown: FC<DropdownProps> & DropdownPropsStatic = ({ children }) => {
  return (
    <div className="ttnc-dropdown relative inline-flex align-middle w-full">
      {children}
    </div>
  );
};

Dropdown.DropdownPanel = DropdownPanel;
Dropdown.DropdownTrigger = DropdownTrigger;

export default Dropdown;
