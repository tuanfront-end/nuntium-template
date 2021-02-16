import React, { FC } from "react";

export interface SelectProps {
  containerClassName?: string;
  name: string;
  label?: string;
}

const Select: FC<SelectProps> = ({
  containerClassName = "",
  name,
  label = "",
  children,
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={name}
          className="block text-paragraph-small text-black dark:text-white ml-4 mb-2"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        autoComplete={name}
        className="block w-full py-2 px-4 border border-action-primary bg-white shadow-sm focus:outline-none focus:ring-action-primary focus:border-primary focus:ring-2 sm:text-sm"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
