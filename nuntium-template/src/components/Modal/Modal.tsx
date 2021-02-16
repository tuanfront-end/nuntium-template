import React, { FC } from "react";

export type ModalId =
  | "wil-modal-all-category"
  | "wil-modal-navigation-mobile"
  | "wil-modal-form-sign-in"
  | "wil-modal-form-sign-up"
  | "wil-modal-form-forgot-password";

export interface ModalProps {
  containerClassName?: string;
  contentClassName?: string;
  zIndex?: string;
  id: ModalId;
}

const Modal: FC<ModalProps> = ({
  children,
  id,
  containerClassName = "bg-gray-900",
  contentClassName = "",
  zIndex = "z-max",
}) => {
  return (
    <div
      className={`hidden fixed inset-0 overflow-auto ${zIndex} ${containerClassName}`}
      id={id}
    >
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Modal;
