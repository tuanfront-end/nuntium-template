import React from "react";

export interface DropdownTriggerProps {
  containerClassName?: string;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  containerClassName = "flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 rounded-md",
}) => {
  return (
    <button type="button" className={`wil-dropdown__btn ${containerClassName}`}>
      {children || (
        <div className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          Options
          <i className="las la-angle-down"></i>
        </div>
      )}
    </button>
  );
};

export default DropdownTrigger;
