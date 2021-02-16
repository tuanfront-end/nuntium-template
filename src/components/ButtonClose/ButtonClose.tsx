import React from "react";
export interface ButtonClose {
  containerClassName?: string;
  modalToggleId?: string;
}

const ButtonClose: React.FC<ButtonClose> = ({
  containerClassName = "",
  modalToggleId,
}) => {
  return (
    <button
      className={`text-2xl flex items-center justify-center ${containerClassName}`}
      data-ttnc-modal-toggle={modalToggleId}
    >
      <span className="sr-only">Close</span>
      <i className="las la-times"></i>
    </button>
  );
};

export default ButtonClose;
