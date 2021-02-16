import React, { FC } from "react";

export type TooltipPosition = "top" | "left" | "right" | "bottom";
export interface TooltipProps {
  title?: string;
  text: string;
  position?: TooltipPosition;
}

const Tooltip: FC<TooltipProps> = ({
  title = "",
  text = "Tooltip",
  children,
  position = "top",
}) => {
  const getPositonClass = () => {
    switch (position) {
      case "top":
        return "bottom-full -translate-x-2/4 left-2/4 ";
      case "bottom":
        return "top-full -translate-x-2/4 left-2/4 ";
      case "left":
        return "right-full -translate-y-2/4 top-2/4 ";
      case "right":
        return "left-full -translate-y-2/4 top-2/4";

      default:
        return "";
    }
  };

  return (
    <div className="wil-tooltip relative">
      {children}
      <div
        className={`wil-tooltip__label absolute ${getPositonClass()} transform text-white dark:text-gray-900 font-medium z-50 text-base p-3px`}
      >
        <div className="bg-gray-700 dark:bg-gray-300 py-1 px-10px rounded-md leading-5">
          {!!title && <span>{title}</span>}
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
