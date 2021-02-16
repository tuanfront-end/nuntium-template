import React from "react";
import { ModalId } from "components/Modal/Modal";

export interface ButtonCloseModalProps {
  containerClassName?: string;
  modalId: ModalId;
}

const ButtonCloseModal: React.FC<ButtonCloseModalProps> = ({
  modalId,
  containerClassName = "",
  children,
}) => {
  return (
    <button
      className={containerClassName}
      type="button"
      wil-close-modal={modalId}
    >
      {children}
    </button>
  );
};

export default ButtonCloseModal;
