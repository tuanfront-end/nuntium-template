import React, { FC, ReactNode } from "react";

export interface InputProps {
  containerClassName?: string;
  size?: string;
  border?: string;
  placeholder?: string;
  inputClassName?: string;
  radius?: string;
  iconEnable?: boolean;
  nodeIcon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Input: FC<InputProps> = ({
  containerClassName = "",
  size = "h-14 w-full",
  border = "border-2 border-gray-300",
  radius = "rounded-full",
  placeholder = "",
  inputClassName = "placeholder-gray-600 bg-transparent text-xs md:text-base",
  nodeIcon,
  iconEnable = true,
  iconPosition = "left",
}) => {
  return (
    <div className={`wil-input relative ${containerClassName} `}>
      {iconEnable && (
        <div
          className={`absolute ${
            iconPosition === "left" ? "left-1" : "right-1"
          } top-1/2 transform -translate-y-1/2`}
        >
          {nodeIcon || (
            <div className="text-xl leading-none p-2">
              <i className="las la-search"></i>
            </div>
          )}
        </div>
      )}
      <input
        type="text"
        aria-label={placeholder}
        placeholder={placeholder}
        className={` px-5 ${size} ${border} ${radius} ${inputClassName} ${
          iconEnable ? (iconPosition === "left" ? "pl-14" : "pr-14") : ""
        } focus:border-primary focus:ring-0 font-medium`}
      />
    </div>
  );
};

export default Input;
