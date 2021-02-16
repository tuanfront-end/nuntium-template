import React from "react";
import { ModalId } from "components/Modal/Modal";

export interface ButtonOpenModalProps {
  containerClassName?: string;
  modalId: ModalId;
  modalIdClosed?: ModalId;
}

const ButtonOpenModal: React.FC<ButtonOpenModalProps> = ({
  modalId,
  containerClassName = "",
  children,
  modalIdClosed,
}) => {
  return (
    <button
      className={containerClassName}
      type="button"
      wil-open-modal={modalId}
      wil-close-modal={modalIdClosed}
    >
      {children}
    </button>
  );
};

export default ButtonOpenModal;
