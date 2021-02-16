import React from "react";

export interface DropdownPanelProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  position?: string;
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({
  children,
  containerClassName = "shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50",
  sizeClass = "w-56",
  radius = "rounded-md",
  position = "right-0 mt-2",
}) => {
  return (
    <div
      className={`wil-dropdown__panel hidden origin-top-right absolute ${position} ${containerClassName} ${sizeClass} ${radius}`}
    >
      {children}
    </div>
  );
};

export default DropdownPanel;
