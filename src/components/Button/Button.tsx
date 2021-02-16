import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  type?: "filled" | "ghost" | "borderless" | "round";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "neutral";
  disabled?: boolean;
  isOnlyIcon?: boolean;
  modalToggleId?: string;
  url?: string;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "",
  type = "filled",
  size = "large",
  color = "primary",
  disabled = false,
  isOnlyIcon = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes = containerClassName;

  switch (type) {
    case "filled":
      classes +=
        " uppercase font-bold shadow-button hover:bg-opacity-95 disabled:bg-opacity-70";
      break;
    case "round":
      classes +=
        " font-semibold shadow-button hover:bg-opacity-95 disabled:bg-opacity-70 rounded-full";
      break;
    case "ghost":
      classes +=
        " font-bold uppercase shadow-button hover:bg-opacity-95 disabled:opacity-70";
      break;
    case "borderless":
      classes +=
        " font-semibold border-transparent disabled:border-transparent border-2 disabled:opacity-70";
      break;
    default:
      break;
  }

  switch (size) {
    case "large":
      classes += ` text-button-small lg:text-button-large p-3 ${
        isOnlyIcon ? "lg:p-4" : "lg:px-6 lg:py-5"
      }`;
      break;
    case "medium":
      classes += ` text-button-small lg:text-button-medium p-2 ${
        isOnlyIcon ? "lg:p-3" : "lg:px-5 lg:py-4"
      }`;
      break;
    case "small":
      classes += ` text-button-small ${isOnlyIcon ? "p-2" : "px-3 py-2"}`;
      break;
    default:
      break;
  }

  function _getColorClass(type: ButtonProps["type"]) {
    if (type === "filled" || type === "round") {
      switch (color) {
        case "primary":
          return "text-white bg-primary";
        case "secondary":
          return "text-white bg-secondary";
        default:
          return "";
      }
    }
    if (type === "ghost") {
      switch (color) {
        case "primary":
          return "text-primary border-primary border-2 bg-white";
        case "secondary":
          return "text-secondary border-secondary border-2 bg-white";
        case "neutral":
          return "text-action-neutral border-action-neutral border-2";
        default:
          return "";
      }
    }
    if (type === "borderless") {
      switch (color) {
        case "primary":
          return "text-primary hover:border-primary";
        case "secondary":
          return "text-secondary hover:border-secondary";
        default:
          return "";
      }
    }
  }

  classes += ` ${_getColorClass(type)}`;

  if (!!url) {
    return (
      <a
        href={url}
        className={`ttnc-button ${classes} inline-flex items-center justify-center text-center hover:shadow-none`}
        data-ttnc-modal-toggle={modalToggleId}
      >
        {children || `This Button`}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`ttnc-button ${classes} inline-flex items-center justify-center text-center hover:shadow-none`}
      data-ttnc-modal-toggle={modalToggleId}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
