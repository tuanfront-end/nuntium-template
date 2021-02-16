import React, { FC } from "react";

export interface SelectProps {
  containerClassName?: string;
  selectedText?: string;
}

const Select: FC<SelectProps> = ({
  containerClassName = "",
  selectedText = "Recent Posts",
}) => {
  return (
    <select
      className={`wil-select truncate rounded-full bg-white dark:bg-gray-900 border border-white dark:border-gray-900 text-gray-900 dark:text-gray-100 font-medium text-xs md:text-base max-w-full pl-4 ${containerClassName}`}
      name=""
    >
      <option value="1">{selectedText}</option>
      <option value="1">Toom cook 1</option>
      <option value="1">Toom cook 2</option>
      <option value="1">Toom cook 3</option>
      <option value="1">Toom cook 4</option>
    </select>
  );
};

export default Select;
