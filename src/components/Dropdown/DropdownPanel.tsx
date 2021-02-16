import React from "react";

export interface DropdownPanelProps {
  containerClassName?: string;
  popperPlacement?:
    | "left-start"
    | "left"
    | "left-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-start"
    | "bottom"
    | "bottom-end";
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({
  children,
  containerClassName = "",
  popperPlacement = "bottom-start",
}) => {
  return (
    <div
      className={`ttnc-dropdown__panel hidden shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 my-2 z-50 ${containerClassName}`}
      style={{ minWidth: "12rem" }}
      data-popper-placement={popperPlacement}
    >
      {children}
    </div>
  );
};

export default DropdownPanel;
