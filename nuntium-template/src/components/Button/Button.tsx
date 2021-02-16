import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  size?: string;
  textColor?: string;
  bgColor?: string;
  textSize?: string;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "rounded-full",
  size = "h-14 w-full",
  textColor = "text-gray-900 dark:text-gray-200",
  textSize = "text-xs lg:text-sm xl:text-body",
  bgColor = "bg-gray-200 dark:bg-gray-900",
  children,
}) => {
  const classNames = `${containerClassName} ${size} ${textColor} ${bgColor} ${textSize}`;
  return (
    <button
      className={`wil-button ${classNames} inline-flex items-center justify-center text-center py-2 px-4 md:px-6 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
