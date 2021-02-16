import React, { FC } from "react";

export interface CheckboxProps {
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label = "Option 1" }) => {
  return (
    <label className="flex items-center space-x-2 md:space-x-3 text-xs md:text-base">
      <input
        type="checkbox"
        name="checked-demo"
        value="1"
        className="form-tick appearance-none h-5 md:h-6 w-5 md:w-6 border-2 border-gray-400 rounded-md checked:bg-quateary checked:border-quateary focus:outline-none focus:ring-quateary text-quateary"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
